import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';


/**
 * @author Jim.Xiao
 * @description SecondPage
 * @class
 * @extends {Component}
 */
class SecondPage extends Component {

    static pageName = "SecondPage";
    static title = "第二页面";

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        
    }

    render() {
        
        return (
            <Text >我是第二个页面</Text>
        );
    }
}

export default SecondPage;



