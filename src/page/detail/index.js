/**
 *
 */
import {observer} from 'mobx-react/native';
import styles from './styles';
import ViewModel from './viewModel';
import BasePage from "../../base/BasePage";
import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
} from 'react-native';
/**
 * 详情页
 *
 * @export
 * @class DetailPage
 * @extends {Component}
 */
@observer
export default class DetailPage extends BasePage {

    static pageName = "DetailPage";
    static title = "详情页";

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
            <SafeAreaView style={styles.container}>
                <Text>详情</Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => this.viewModel.goBack()}
                >
                    <Text>返回</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
};
