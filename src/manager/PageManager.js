import * as Pages from '../page';
import {Navigation} from 'react-native-navigation';


function autoRegisterPages() {
    Object.keys(Pages).map(key => {
        if (key && Pages[key].pageName){
            Navigation.registerComponent(Pages[key].pageName, () => Pages[key]);
        }
    })
}

export default{
    autoRegisterPages
}