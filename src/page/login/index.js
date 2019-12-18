/**
 *
 */
import {observer} from 'mobx-react/native';
import React, {Component} from 'react';
import { View} from 'react-native';
import styles from './styles';
import ViewModel from './viewModel';
import BasePage from "../../base/BasePage";

/**
 * 登录页
 *
 * @export
 * @class LoginPage
 * @extends {Component}
 */
@observer
export default class LoginPage extends BasePage {

    static pageName = "LoginPage";
    static title = "登录";

    constructor(props) {
        super(props);
        this.viewModel = new ViewModel();
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={[styles.container]}>
            </View>
        );
    }
}
