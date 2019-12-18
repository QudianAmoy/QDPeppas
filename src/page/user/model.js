/**
 *
 */

import { observable } from 'mobx';


/**
 * Home model
 *
 * @export
 * @class Model
 */
export default class Model {
    @observable data = [{
        content: [
            {key: require('../../assets/me/mine_icon_hot.png'), title: '排行榜'},
            {key: require('../../assets/me/mine_icon_preview.png'), title: '我的收藏'},
            {key: require('../../assets/me/mine_icon_manhua.png'), title: '2次元'},
            {key: require('../../assets/me/mine_icon_activity.png'), title: '公会'},
            {key: require('../../assets/me/mine_icon_nearby.png'), title: '附近'},
            {key: require('../../assets/me/mine_icon_random.png'), title: '随机穿越'},
            {key: require('../../assets/me/mine_icon_feedback.png'), title: '意见反馈'},
            {key: require('../../assets/me/mine_icon_more.png'), title: '更多'},
        ],
        key: 'content',
    }];
}
