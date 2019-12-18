/**
 *
 */

import Model from './model';
import {action, observable, toJS} from 'mobx';


/**
 * Home ViewModel
 */
export default class ViewModel {
    constructor() {
        this.model = new Model();
    }

    @action
    pop = () =>{
        this.model.showPop = true;
    }
    @action
    updateSearch = (searchText) => {
        this.model.search = searchText
    };

    handleProtocolJump = (url)=>{
        console.warn("jump "+url)
    }
}
