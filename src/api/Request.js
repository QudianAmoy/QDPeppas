import Toast from '@remobile/react-native-toast';
import DeviceInfo from 'react-native-device-info';
import {NativeModules, Platform} from 'react-native';
import CommonUtil from '../utils/CommonUtil'
import HttpUtils from '../utils/HttpUtils'
import AppConfig from "../config/AppConfig";

/**
 * @author lining
 *
 * @export doRequest
 * @param {*} url API 路由
 * @param {*} {
 *     params,
 *     method = 'GET',
 *     header = {},
 *     success = () => { },
 *     failure = () => { },
 *     showLog = __DEV__,
 *     failToast = true
 * }
 */

async function doRequest(url, {
    params,
    method = 'GET',
    header = {},
    success = () => {
    },
    failure = () => {
    },
    needLogin = () => {
    },
    showLog = __DEV__,
    failToast = true
}) {

    if (method === 'GET' && params) {
        let paramsArray = [];
        // 拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
        if (url.search(/\?/) === -1) {
            if(paramsArray.length !==0){
                url += '?' + paramsArray.join('&');
            }
        } else {
            url += '&' + paramsArray.join('&');
        }
    }

    //统一接口参数
    header = Object.assign({
        'PLATFORM': Platform.OS === 'ios' ? 1 : 2,
        'DEVICE-ID': DeviceInfo.getDeviceId(),
        'LOCALE': 'zh',
        'APP-VERSION':AppConfig.BaseConfig.appVersion,
        'AUTH-TOKEN':'',
        'USER-AGENT':HttpUtils.encodeUnicode(DeviceInfo.getUserAgent()),
    }, header);
    configRequest(url, params, method, header, success, failure, needLogin, showLog, failToast);

}

/**
 * @param {*} url    路由地址
 * @param {*} params 参数
 * @param {*} method 请求方式
 * @param {*} header 自定义 header 参数
 * @param {*} success 成功回调
 * @param {*} failure 失败回调
 * @param {*} showLog 是否显示 Log
 * @param {*} failToast 是否显示错误 toast
 */
function configRequest(url, params, method, header, success, failure, needLogin, showLog, failToast) {
    // 构造请求体
    const request = {
        method: ['GET', 'POST'].indexOf(method) > -1 ? method : 'GET',
        headers: Object.assign({
            'Content-Type': 'application/json',
        }, header),
        body: method === 'GET' ? null : JSON.stringify(params),
    };
    fetch(url, request)
        .then(response => response.json())
        .then(responseJson => {
            const data = responseJson;
            showLog && console.log && console.log('[AJAX SUCCESS]', url.toString().substring(0, 100),
                typeof request === 'object' ? request : request.toString().substring(0, 100),
                typeof data === 'object' ? data : data.toString().substring(0, 100));

            if (data && (data.code === 0 || data.code === 200)) {
                typeof success === 'function' && success(data);
                return;
            }

            if (data && data.code === 401) {
                // 登录状态失效
                typeof needLogin === 'function' && needLogin(data);
            }

            // 错误回调
            if (data === "" || data === undefined || data === null) {
                failToast && Toast.showShortCenter('获取数据出错');
                typeof failure === 'function' && failure(data);
                return;
            } else if (data.message === undefined || data.message === null) {
                failToast && Toast.showShortCenter('获取数据出错');
                typeof failure === 'function' && failure(data);
                return;
            }
            failToast && Toast.showShortCenter(CommonUtil.safeString(data.message) || '获取数据出错');
            typeof failure === 'function' && failure(data);
        })
        .catch(error => {
            showLog && console.log && console.log('[AJAX FAIL]', url.toString().substring(0, 100),
                typeof request === 'object' ? request : request.toString().substring(0, 100), error);
            // 错误回调
            failToast && Toast.showShortCenter('获取数据异常');
            typeof failure === 'function' && failure(error);
        });
}

function doGetRequest(url,
    params,
    success,
    failure,
){
    return doRequest(url, {
            params: params,
            method: 'GET',
            success: success,
            failure: failure
        }
    )
}

function doPostRequest(url,
                           params,
                           success,
                           failure,
){
    return doRequest(url, {
            params: params,
            method: 'POST',
            success: success,
            failure: failure
        }
    )
}


export default {
    doRequest,
    doGetRequest,
    doPostRequest,

}