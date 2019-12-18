import React, { Component } from 'react';
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import {MasonryList} from '../../../components'
import Dimensions from "../../../constants/Dimensions";
import * as Pages from '../../../page'
import styles from './styles';
import ViewModel from './viewModel'
const itemWidth = (Dimensions.SCREEN_WIDTH - 16) / 2;


export default class ContentWaterfall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
        }
        this.viewModel = new ViewModel();
    }

    componentDidMount = () => {
        this.onRefreshing();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MasonryList
                    data={this.state.data}
                    numColumns={2}
                    renderItem={this._renderItem}
                    getHeightForItem={this._getHeightForItem}
                    refreshing = {this.state.refreshing}
                    onRefresh = {this.onRefreshing}
                    onEndReachedThreshold={0.5}
                    onEndReached={this._onEndReached}
                    keyExtractor={this._keyExtractor}
                />
            </SafeAreaView>
        )
    }

    onRefreshing = () => {
        this.setState({
            refreshing: true,
        });

        //模拟请求
        setTimeout(() => {
            const data = this.viewModel.initData();
            this.setState({
                refreshing: false,
                data: data.datas,                
            })
        }, 1000);

    }

    _onEndReached = () => {

    }

    _keyExtractor = (item, index) => {
        return (item.title + index);
    }

    _getHeightForItem = ({item}) => {
        return (itemWidth+60);
    }

    _renderItem = ({item}) => {
        const itemHeight = this._getHeightForItem({item});
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this._onPressContent(item)}
                style={styles.item}>
                <Image
                    source={{uri: item.imageurl}}
                    style={{width: itemWidth, height: itemHeight, borderRadius: 4}}
                />
                <View style={styles.itemText}>                    
                    <Text style={{color: '#fff'}}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressContent = (item) => {
        GoRoute(RouteKey.ACTION_SCREEN,{pageName:"DetailPage",title:"详情页"})
    }

}

