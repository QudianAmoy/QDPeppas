import {Platform} from 'react-native'
import Toast from '@remobile/react-native-toast';

function setReportRNError(){
    if (Platform.OS === 'ios') {
        require('ErrorUtils').setGlobalHandler(function (err) {
            if (__DEV__) {
                throw new Error(err);
            } else {
                const message = err.message ? err.message : '';
                const stack = err.stack ? err.stack.split('\n') : '';
                stack.splice(0, 0, message);
                //TODO上报错误内容
                Toast.showShortBottom('出错啦，请重启app后再进行尝试');
            }
        });
    } else {
        require('ErrorUtils').setGlobalHandler(function (err) {
            if (__DEV__) {
                throw new Error(err);
            } else {
                const message = err.message ? err.message : '';
                const stack = err.stack ? err.stack : '';
                //TODO上报错误内容
                Toast.showShortBottom('出错啦，请重启app后再进行尝试');
            }
        });
    }
}

export  default {
    setReportRNError
}

