import RouterKey from './RouterConfig'
import RouteFunction from './RouterFunction'
import HttpUtils from '../../utils/HttpUtils'
import RouterStack from "./RouterStack";
import * as Pages from '../../page'
///保存当前路由
let mNavigator = null;
//设置当前路由


function setCurrentNavigatior(navigator) {
    mNavigator = navigator;
}

/**
 *
 *
 * @param {string} uri 参数()
 * @param {object} params 参数从params取参数
 * @param {object} success 参数从params取参数
 * @param {object} failure 参数从params取参数
 */
function runURIAction(uri,
    params = {},
    success = () => {
    },
    failure = () => {
    }) {
    if (typeof (uri) === 'undefined') {
        console.warn('请检查链接是否正常');
        return;
    }
    let genParams = HttpUtils.combineParams(uri, params);         //合并URI中的字段,以及Params中的参数字段,为参数透传准备

    let canAction = false;

    //openapp
    if (uri.indexOf(RouterKey.ACTION_OPEN_APP) === 0) {
        let oriUrl = genParams.url;

        if (typeof (oriUrl) === 'undefined') {
            return;
        }
        let url = decodeURIComponent(oriUrl);
        runURIAction(url);
        return;
    }

    //跳转某个RN页面
    if (uri.indexOf(RouterKey.ACTION_SCREEN) === 0) {
        RouteFunction.pushScreen(mNavigator,genParams.pageName ,
            genParams.title, { success, failure, ...genParams });
        canAction = true;
    }
    //登录
    if (uri.indexOf(RouterKey.ACTION_LOGIN) === 0) {
        RouteFunction.pushScreen(mNavigator,Pages.LoginPage.pageName ,
            Pages.LoginPage.title, { success, failure, ...genParams });
        canAction = true;
    }

    //web 跳转
    if (uri.indexOf(RouterKey.ACTION_OPEN_WEB) === 0) {
        let url = genParams.url;
        if (typeof (url) === 'undefined') {
            return;
        }
        let title = genParams.title;
        if (typeof (id_number) === 'undefined') {
            title = '';
        }
        RouteFunction.openWeb(mNavigator, url, title);
        canAction = true;
    }

    //直接http
    if (uri.indexOf(RouterKey.ACTION_OPEN_BROWSER_HTTP) === 0) {
        let title = genParams.title;
        if (typeof (title) === 'undefined') {
            title = '';
        }
        RouteFunction.openWeb(mNavigator, uri, title);
        canAction = true;
    }

    if (uri.indexOf(RouterKey.ACTION_TO_SYSTEM_SETTING) === 0) {
        console.warn("function is not unSupport")
        canAction = true;
    }
    //其他协议
    if (canAction === false) {
        // Linking.openURL(uri);
    }

}

function runPushAction(params, animation = true, callback) {
    const name = params.pageName;
    const title = params.title;
    RouteFunction.pushScreen(mNavigator, name, title, params, animation, callback);
}

function runPushWithOptionsAction(params, options) {
    const name = params.pageName;
    RouteFunction.pushScreenWithOptions(mNavigator, name, params, options);
}

function runPopAction(animation = true, success = () => { }) {
    RouteFunction.popScreen(mNavigator,animation,success);
}

function runPopToAction(pageName, animation = true, callback) {
    const componentId = RouterStack.getComponentId(pageName);
    RouteFunction.popToScreen(componentId, animation, callback);
}

function runPopToRootAction(animation = true, callback) {
    RouteFunction.popToRootScreen(mNavigator, animation, callback);
}

function mergeOptions(params) {
    RouteFunction.mergeOptions(mNavigator, params);
}

function setStackRootAction(children) {
    RouteFunction.setStackRoot(mNavigator, children);
}

export default {
    runPushAction,
    runPushWithOptionsAction,
    runURIAction,
    setCurrentNavigatior,
    runPopAction,
    runPopToAction,
    runPopToRootAction,
    mergeOptions,
    setStackRootAction,
};
