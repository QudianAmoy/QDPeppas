/**
 *
 * @author Jim.Xiao
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import CodePush from 'react-native-code-push';
import { BackHandler } from 'react-native';
import {PermissionManager,TabManager,PageManager,ReportManager} from './manager';
import {RouterManager,RouterStack} from './manager/router'

//APP初始化最早进入方法
function onAppInit (){
    //设置RNBugly上报监听
    ReportManager.setReportRNError();
    //自动注册页面
    PageManager.autoRegisterPages();
    //CodePush 更新通知
    CodePush.sync({
        installMode: CodePush.InstallMode.IMMEDIATE,
    });
    //权限判断
    PermissionManager.checkPermission((result)=>{
        if(result ==='1'){
            GoRoute(RouteKey.ACTION_TO_SYSTEM_SETTING);
        }else{
            BackHandler.exitApp();
        }
    });
}
onAppInit();

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    //路由组件使用
    RouterManager.setCurrentNavigatior(componentId);
    RouterStack.newPageDidAppear(componentId, componentName);
    //页面浏览埋点
});



//APP启动回调
Navigation.events().registerAppLaunchedListener(() => {
    TabManager.initTabBasedScreen();
});


