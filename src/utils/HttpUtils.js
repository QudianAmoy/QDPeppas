/**
 *
 * @解析uri协议
 * @param {string} uri 参数
 *
 */
import {isEmptyValue} from './CommonUtil';
function paramURI(uri) {
    let params = {};
    let indexParams = uri.indexOf('?')
    if ( indexParams< 0) {
        return params
    }
    let str = uri.substr(indexParams + 1);
    let subIndex = str.indexOf('?')
    if ( subIndex> 0) {
        str =  str.substring(0,subIndex)+escape(str.substring(subIndex,str.length))
    }
    let strs = str.split('&');
    for (let index = 0; index < strs.length; index++) {
        let key = strs[index].split('=')[0];
        let value = unescape(strs[index].split('=')[1]);
        params[key] = value;
    }
    return params;
}

function combineParams(uri, params) {
    let genParams = {};
    let urlParams = paramURI(uri);
    if (urlParams) {
        Object.keys(urlParams).forEach(function (key) {
            if (!isEmptyValue(urlParams[key])) {
                genParams[key] = urlParams[key]
            }
        });
    }
    if (params) {
        Object.keys(params).forEach(function (key) {
            if (!isEmptyValue(params[key])) {
                genParams[key] = params[key]
            }
        });
    }
    return genParams
}

function addParamsToUrl(url, obj) {
    if (!url) {
        return ""
    }
    if (!obj) {
        return url
    }
    let params = '';
    Object.keys(obj).forEach(function (key) {
        if (!isEmptyValue(obj[key])) {
            params += "&" + key + "=" + obj[key]
        }
    });
    if (params.length > 0) {
        if (url.indexOf('?') < 0) {
            return url + '?' + params.substr(1);
        } else {
            return url + params.substr(1);
        }
    }else{
        return url
    }

}

// Unicode编码
function encodeUnicode(str) {
    if(!str){
        return "";
    }
    let res = [];
    for ( var i=0; i<str.length; i++ ) {
        res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
    }
    return "\\u" + res.join("\\u");
}

// Unicode解码
function decodeUnicode(str) {
    if(!str){
        return "";
    }
    str = str.replace(/\\/g, "%");
    //转换中文
    str = unescape(str);
    //将其他受影响的转换回原来
    str = str.replace(/%/g, "\\");
    //对网址的链接进行处理
    str = str.replace(/\\/g, "");
    return str;
}

export default {
    combineParams,
    paramURI,
    addParamsToUrl,
    encodeUnicode,
    decodeUnicode,
};