/**
 *
 */
import {observer} from 'mobx-react/native';
import React, {Component} from 'react';
import {
    View, Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    FlatList,
    SectionList,
} from 'react-native';
import styles from './styles';
import ViewModel from './viewModel';
import BasePage from "../../base/BasePage";

/**
 * 用户中心页面
 *
 * @export
 * @class UserPage
 * @extends {Component}
 */
@observer
export default class UserPage extends BasePage {

    static pageName = "UserPage";
    static title = "我的二次元";

    constructor(props) {
        super(props);
        this.viewModel = new ViewModel();
    }

    componentDidMount() {
        this.viewModel.onReFreshInfo();
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const data = this.viewModel.getMenuListData();
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={[{data}]}
                    renderItem={this._renderSectionItem}
                    ListHeaderComponent={this._ListHeaderComponent}
                    ListFooterComponent={this._ListFooterComponent}
                    keyExtractor={this._keyExtractor}
                />
            </SafeAreaView>
        )
    }

    _keyExtractor = (item, index) => {
        return item.key;
    }

    _ListHeaderComponent = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.header}
            >
                <View style={styles.headerUser}>
                    <Image
                        source={require('../../assets/me/default_header.png')}
                        style={{width: 50, height: 50}}
                    />
                    <Text style={{marginHorizontal: 10}}>我只是一个斯莱姆</Text>
                    <Image
                        source={require('../../assets/me/profile_level20.png')}
                        style={{width: 36, height: 15}}
                    />
                </View>
                <Image
                    source={require('../../assets/me/arrow_right.png')}
                    style={{width: 7, height: 12}}
                />
            </TouchableOpacity>
        )
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.item}
            >
                <Image
                    source={item.key}
                    style={styles.itemImage}
                />
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    _renderSectionItem = ({section}) => {
        return (
            <FlatList
                data={section.data[0].content}
                numColumns={5}
                renderItem={this._renderItem}
                style={{backgroundColor: '#fff'}}
                scrollEnabled={false}
            />
        )
    }

    _ListFooterComponent = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.footer}
            >
                <Text>好友动态</Text>
                <Image
                    source={require('../../assets/me/arrow_right.png')}
                    style={{width: 7, height: 12}}
                />
            </TouchableOpacity>
        )
    }
};

