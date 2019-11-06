import RouterKey from './RouterConfig'
import RouteFunction from './RouterFunction'
import HttpUtils from '../../utils/HttpUtils'
import RouterStack from "./RouterStack";
///保存当前路由
let mNavigator = null;
//设置当前路由
function setCurrentNavigatior(navigator) {
    mNavigator = navigator;
}

function runURIAction(uri,
    success = () => {
    },
    failure = () => {
    }, ) {
    runURIActionWithParams(uri, {}, success, failure);
}

/**
 *
 *
 * @param {string} uri 参数()
 * @param {object} params 参数从params取参数
 * @param {object} success 参数从params取参数
 * @param {object} failure 参数从params取参数
 */
function runURIActionWithParams(uri,
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
    if (uri.indexOf(RouterKey.ACTION_OPENAPP) === 0) {
        let oriUrl = genParams.url;

        if (typeof (oriUrl) === 'undefined') {
            return;
        }
        let url = decodeURIComponent(oriUrl);
        let subParams = HttpUtils.combineParams(uri, {});
        if (subParams && params.channelFrom) {
            // AppStatusManager.ShareInstance().channelfrom = params.channelFrom;
        }
        runURIAction(url);
        return;
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

    // 电话
    if (uri.indexOf(RouterKey.ACTION_TEL_PHONE) === 0) {
        RouteFunction.openPhone(uri);
        canAction = true;
    }

    //跳转系统设置页面
    if (uri.indexOf(RouterKey.ACTION_TO_SYSTEM_SETTING) === 0) {
        //TODO跳转设置页面
        canAction = true;
    }

    // pop
    if (uri.indexOf(RouterKey.Action_POP_TO_ROOT) === 0) {
        RouteFunction.popToRootScreen(mNavigator, true, success);
        canAction = true;
    } else if (uri.indexOf(RouterKey.ACTION_POP_TO) === 0) {
        const { pageName } = genParams;
        const componentId = RouterStack.getComponentId(pageName);
        RouteFunction.popToScreen(componentId, true, success);
        canAction = true;
    } else if (uri.indexOf(RouterKey.ACTION_POP) === 0) {
        RouteFunction.popScreen(mNavigator, true, success);
        canAction = true;
    }

    let mobpath = genParams.mobpath;
    if (mobpath && mobpath !== 'undefine' && canAction) {
        //埋点添加
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

/**
 *
 * @param {array} children exam [Screens.MY_SCREEN, Screens.CER_CENTER_SCREEN]
 */
function setStackRootAction(children) {
    RouteFunction.setStackRoot(mNavigator, children);
}

export default {
    runPushAction,
    runPushWithOptionsAction,
    runURIAction,
    runURIActionWithParams,
    setCurrentNavigatior,
    runPopAction,
    runPopToAction,
    runPopToRootAction,
    mergeOptions,
    setStackRootAction,
};
