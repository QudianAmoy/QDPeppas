import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';


/**
 * @author Jim.Xiao
 * @description FirstPage
 * @class
 * @extends {Component}
 */
class FirstPage extends Component {

    static pageName = "FirstPage";
    static title = "第一页面";

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Text >我是第一个页面</Text>
        );
    }
}

export default FirstPage;



