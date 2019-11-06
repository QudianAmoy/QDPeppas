import React, {Component} from 'react';
import {
    DeviceEventEmitter,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';


/**
 * @author 
 * @description 基础页
 * @class 
 * @extends {Component}
 */
class BasePage extends Component {

    static pageName = "basePage";
    static title = "父类页面";

    constructor(props) {
        
        super(props);                
        this.init();
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    init(){
        
    }

    render() {
        return (
            <View />
        );
    }

}

export default BasePage;



