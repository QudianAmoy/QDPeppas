/**
 *
 */

import HomeListModel from './model';
import {action, observable, toJS} from 'mobx';


/**
 * Home ViewModel
 */
export default class HomeListViewModel {
    constructor() {
        this.model = new HomeListModel();
    }


    @action 
    initData = () => {
        return this.model.data;
    }
    handleProtocolJump = (url)=>{
        console.warn("jump "+url)
    }
}
