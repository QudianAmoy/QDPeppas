//协议跳转
import {RouterManager,RouterKey} from "./manager";
import {UrlConstants,Request} from "./api";

//全局路由
global.GoRoute =  (
    uri,params,
    success = () => {
    },
    failure = () => {
    }
) => {
    RouterManager.runURIAction(uri,params,success,failure);
};

global.GoBack = (animation = true, success = () => { }) =>{
    RouterManager.runPopAction(animation,success);
}

//路由key
global.RouteKey = RouterKey;


//全局doRequest(GET)
global.Get = Request.doGetRequest;
//全局doRequest(POST)
global.Post =  Request.doPostRequest;


//API URL
global.API = UrlConstants;


