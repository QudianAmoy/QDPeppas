/**
 *
 */
import {observer} from 'mobx-react/native';
import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ViewModel from './viewModel';
import BasePage from "../../base/BasePage";
import ContentWaterfall from "./list"
/**
 * Home主页
 *
 * @export
 * @class HomePage
 * @extends {Component}
 */
@observer
export default class HomePage extends BasePage {

    static pageName = "HomePage";
    static title = "新番速递";

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
                <ContentWaterfall
                    tabLabel="新番速递"
                />
            </View>
        );
    }
}
