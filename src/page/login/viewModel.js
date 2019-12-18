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

    login = ()=>{
        this.model.loading = true;
        Post(API.LOGIN_API,{

        },()=>{
            this.model.loading = false;
            console.warn("登录成功")
        },()=>{
            this.model.loading = false;
            console.warn("登录失败")
        }).then().catch((e) =>{
            console.error(e)
        })
    }
}
