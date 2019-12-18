import {Platform,PermissionsAndroid,Alert} from 'react-native';


//校验权限
async function checkPermission(callBack){
    try {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ]);
            if (granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] !== PermissionsAndroid.RESULTS.GRANTED) {
                let options = [
                    {
                        text: '去设置', onPress: () => {
                            callBack && callBack("1")
                        }
                    },
                    {
                        text: '取消', onPress: () => {
                            callBack && callBack("2")
                        }, style: 'cancel'
                    }
                ];
                Alert.alert('温馨提醒', '我们需要获取相应权限，否则您将无法正常使用。', options, {
                    cancelable: false,
                });
            }
        }
    } catch (err) {
        console.warn(err)
    }
}

export default {
    checkPermission
}