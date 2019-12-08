const host = __DEV__ ? 'http://www.baidu.com' : 'https://www.taobao.com';

const LOGIN_API = `${host}`;
const SEND_SMS = `${host}`;
const GET_MENU_LIST = `${host}`;


export default {
    LOGIN_API,
    SEND_SMS,
    GET_MENU_LIST
}
