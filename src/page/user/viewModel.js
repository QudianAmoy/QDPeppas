/**
 *
 */

import Model from './model';
import {action, observable, toJS, computed} from 'mobx';

/**
 * Home ViewModel
 */
export default class ViewModel {
    constructor() {
        this.model = new Model();
    }

    @action
    getMenuListData = () =>{
        return toJS(this.model.data)
    }

    @action
    onReFreshInfo = () => {
        Get(API.GET_MENU_LIST,{
        },()=>{


        },()=>{

        })
    }

    @action
    onLogin = () => {
        GoRoute(RouteKey.ACTION_LOGIN);
    }

    @action
    showDialog = () => {
        this.model.showDialog = true;
    }
    @action
    hideDialog = () => {
        this.model.showDialog = false;
    }


}
