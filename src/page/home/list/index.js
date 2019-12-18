import React, { Component } from 'react';
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import {MasonryList} from '../../../components'
import Dimensions from "../../../constants/Dimensions";
import * as Pages from '../../../page'
const itemWidth = (Dimensions.SCREEN_WIDTH - 16) / 2;

const secToTime = (s) => {
    let h = 0, m = 0;``;
    if(s > 60){
        m = parseInt(s / 60);
        s = parseInt(s % 60);
        if(m > 60) {
            h = parseInt(i / 60);
            m = parseInt(i % 60);
        }
    }
    // 补零
    const zero = (v) => {
        return (v >> 0) < 10 ? ("0" + v) : v;
    };
    return (h == 0 ? [zero(m), zero(s)].join(":") : [zero(h), zero(m), zero(s)].join(":"));
}

export default class ContentWaterfall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
            np: 0,
        }
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
        Get(API.GET_MENU_LIST,{
        },()=>{
            const jsonDataStr = '{"info":{"np":0},"list":[{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":232,"height":344,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/34a9ed4a2f034a97b326d82f975e5242.jpg"],"duration":133},"comment":"fdsafdsa"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":180,"height":180,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/9684e2c4d14f36b7db98e725ea0ed729.jpg"],"duration":133},"comment":"fdsafdsa"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":200,"height":200,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/37a3c2c5ae77b427e38810312e11ea5c.jpg"],"duration":133},"comment":"fdsafdsa"}]}'
            let jsonData =JSON.parse(jsonDataStr);
            this.setState({
                refreshing: false,
                data: jsonData.list,
                np: jsonData.info.np || 0,
            })
        },()=>{
            const jsonDataStr = '{"info":{"np":0},"list":[{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":232,"height":344,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/34a9ed4a2f034a97b326d82f975e5242.jpg"],"duration":133},"comment":"fdsafdsa"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":180,"height":180,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/9684e2c4d14f36b7db98e725ea0ed729.jpg"],"duration":133},"comment":"fdsafdsa"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":200,"height":200,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/37a3c2c5ae77b427e38810312e11ea5c.jpg"],"duration":133},"comment":"fdsafdsa"}]}'
            let jsonData =JSON.parse(jsonDataStr);
            this.setState({
                refreshing: false,
                data: jsonData.list,
                np: jsonData.info.np || 0,
            })
        })

    }

    _onEndReached = () => {

        Get(API.GET_MENU_LIST,{
        },()=>{
            const jsonDataStr = '{"info":{"np":0},"list":[{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":232,"height":344,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/34a9ed4a2f034a97b326d82f975e5242.jpg"],"duration":133},"comment":"食戟之灵 第四季"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":180,"height":180,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/9684e2c4d14f36b7db98e725ea0ed729.jpg"],"duration":133},"comment":"刀剑神域"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":200,"height":200,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/37a3c2c5ae77b427e38810312e11ea5c.jpg"],"duration":133},"comment":"Fate/Grand Order 绝对魔兽战线"}]}'
            let jsonData =JSON.parse(jsonDataStr);
            this.setState({
                data: [...this.state.data, ...jsonData.list],
                np: jsonData.info.np,
            })
        },()=>{
            const jsonDataStr = '{"info":{"np":0},"list":[{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":232,"height":344,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/34a9ed4a2f034a97b326d82f975e5242.jpg"],"duration":133},"comment":"食戟之灵 第四季"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":180,"height":180,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/9684e2c4d14f36b7db98e725ea0ed729.jpg"],"duration":133},"comment":"刀剑神域"},{"type":"video","video":{"video":["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"],"width":200,"height":200,"thumbnail":["https://www.acgndog.com/wp-content/uploads/2019/08/37a3c2c5ae77b427e38810312e11ea5c.jpg"],"duration":133},"comment":"Fate/Grand Order 绝对魔兽战线"}]}'
            let jsonData =JSON.parse(jsonDataStr);
            this.setState({
                data: [...this.state.data, ...jsonData.list],
                np: jsonData.info.np,
            })
        })
    }

    _keyExtractor = (item, index) => {
        return item.text + index;
    }

    _getHeightForItem = ({item}) => {
        return Math.max(itemWidth, itemWidth / item.video.width * item.video.height);
    }

    _renderItem = ({item}) => {
        const itemHeight = this._getHeightForItem({item});
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this._onPressContent(item)}
                style={styles.item}>
                <Image
                    source={{uri: item.video.thumbnail[0]}}
                    style={{width: itemWidth, height: itemHeight, borderRadius: 4}}
                />
                <View style={styles.itemText}>
                    <Text style={{color: '#fff'}}>{secToTime(item.video.duration)}</Text>
                    <Text style={{color: '#fff'}}>{item.comment}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressContent = (item) => {
        GoRoute(RouteKey.ACTION_SCREEN,{pageName:"DetailPage",title:"详情页"})
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        margin: 4,
    },
    itemText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 30,
        backgroundColor: '#0002',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
})