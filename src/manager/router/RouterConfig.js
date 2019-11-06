import {AppConfig} from '../../config'

export const scheme = AppConfig.BaseConfig.appName;

//外部app 打开
const ACTION_OPENAPP = `${scheme}://openapp`;
///登录协议
const ACTION_LOGIN = `${scheme}://login`;
///注册协议
const ACTION_REGISTER = `${scheme}://register`;
// 打开网页
const ACTION_OPEN_WEB = `${scheme}://web`;
const ACTION_OPEN_BROWSER_HTTP = 'http';

// 切换tab
const ACTION_TO_TAB = `${scheme}://switchToTab`;

// 拨打电话
const ACTION_TEL_PHONE = `tel:`;

// 跳转页面
const ACTION_SCREEN = `${scheme}://screen`;

// 跳转手机APP设置页面【Android与IOS】
const ACTION_TO_SYSTEM_SETTING = `${scheme}://systemSettings`;

// pop
const ACTION_POP = `${scheme}://pop`;

// popTo
const ACTION_POP_TO = `${scheme}://popTo`;

// popToRoot
const Action_POP_TO_ROOT = `${scheme}://popToRoot`;

export default {
    ACTION_OPENAPP,
    ACTION_LOGIN,
    ACTION_REGISTER,
    ACTION_OPEN_WEB,
    ACTION_OPEN_BROWSER_HTTP,
    ACTION_TO_TAB,
    ACTION_TEL_PHONE,
    ACTION_SCREEN,
    ACTION_TO_SYSTEM_SETTING,
    ACTION_POP,
    ACTION_POP_TO,
    Action_POP_TO_ROOT,

}
