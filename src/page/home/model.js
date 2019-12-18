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
    @observable data = {};
    @observable showPop = false;
    @observable search = "";
}
