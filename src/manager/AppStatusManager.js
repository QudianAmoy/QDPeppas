/**
 * @author Jim.Xiao
 */
import {UserInfoHelper} from '../store'
import {Platform} from 'react-native';

let instance = undefined;
export default class AppStatusManager {
    static ShareInstance() {
        if(!!instance){
            return instance;
        }
        return new AppStatusManager();
    }

    constructor() {
        if (!instance) {
            instance = this;                    
        }
    }

    //初始化 在App.js里进行初始化
    async _init() {
        this.systemVersion = '';
        this.devicemodel = '';
        this.ipaddress = '';
        this.deviceid = '';
        this.Platform = Platform.OS === 'ios' ? 'app-ios' : 'app-android';//平台

        return new Promise((resolve, reject) => {
            this._initInfo().then((resultStr)=>{
                resolve("");
            }).catch(()=>{
                reject();
            });
        })
    }

    _initInfo() {
        this.userInfo = {};
        return UserInfoHelper.getUserInfo()
    }

    removeUserInfo() {
        this.userInfo = {};
        UserInfoHelper.setUserInfo('');
    }

}