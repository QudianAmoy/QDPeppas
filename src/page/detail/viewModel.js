/**
 *
 */

import Model from './model';


/**
 * Home ViewModel
 */
export default class ViewModel {
    constructor() {
        this.model = new Model();
    }

    goBack = ()=>{
        GoBack();
    }
}
