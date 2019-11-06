
import { Navigation } from 'react-native-navigation';
import Colors from "../../constants/Colors";
import { Linking } from "react-native";
import RouterStack from "./RouterStack";
import {AppConfig} from "../../config"

//打开webview
function openWeb(componentId, url, title) {

    //白名单
    let containDomain = false;
    AppConfig.BaseConfig.WhiteDomains.forEach(item => {
        if (url.indexOf(item) !== -1) {
            containDomain = true;
        }
    });
    if (!containDomain) {
        return;
    }
    Navigation.push(componentId, {
        component: {
            name: 'General.Webpage',
            passProps: {
                url: url
            },
            options: {
                topBar: {
                    title: {
                        text: title
                    }
                },
                bottomTabs: {
                    visible: false,
                    drawBehind: true,
                },
            }

        }
    });
}

//切换tab
function switchTab(componentId, tabIndex) {

    if (tabIndex < 0) {
        tabIndex = 0;
    }
    Navigation.mergeOptions(componentId, {
        bottomTabs: {
            currentTabIndex: parseInt(tabIndex),
            visible: true,
        }
    });
}

//跳转页面
function pushScreen(componentId, screenName, title, passProps, animation = true, success = () => {}) {
    //screen
    if (!screenName || screenName.length === 0) {
        return;
    }
    Navigation.push(componentId, {
        component: {
            name: screenName,
            passProps: passProps,
            options: {
                topBar: {
                    title: {
                        text: title,
                        alignment: 'center',
                        color: Colors.black15,
                        fontSize: 18,
                        fontWeight: 'bold'
                    }
                },
                bottomTabs: {
                    visible: false,
                    drawBehind: true,
                },
                animations: {
                    push: {
                        enabled: animation,
                    }
                }
            }
        }
    }).then(() => {
        requestAnimationFrame(() => {
            success();
        })
    });
}

function pushScreenWithOptions(componentId, screenName, passProps, options) {
    if (!screenName || screenName.length === 0) {
        return;
    }
    Navigation.push(componentId, {
        component: {
            name: screenName,
            passProps: passProps,
            options: options
        }
    })
}

function popScreen(componentId, animation = true, success = () => { }) {
    Navigation.pop(componentId, {animations: {pop: {enabled: animation}}}).then(() => {
        if(animation){
            setTimeout(() => {
                requestAnimationFrame(() => {
                    success();
                });
            }, 100);
        }else{
            requestAnimationFrame(() => {
                success();
            });
        }
    });

}

function popToRootScreen(componentId, animation = true, success) {
    Navigation.popToRoot(componentId, {animations: {pop: {enabled: animation}}}).then(() => {
        if (animation) {
            setTimeout(() => {
                requestAnimationFrame(() => {
                    if(!!success){
                        success();
                    }
                });
            }, 100);
        } else {
            requestAnimationFrame(() => {
                if(!!success){
                    success();
                }
            });
        }
    });
}

function popToScreen(componeentId, animation = true, success = () => { }) {
    Navigation.popTo(componeentId, {animations: {pop: {enabled: animation}}}).then(() => {
        if (animation) {
            setTimeout(() => {
                requestAnimationFrame(() => {
                    success();
                });
            }, 100);
        } else {
            requestAnimationFrame(() => {
                success();
            });
        }
    });
}

function showModalScreen(screenName, title, passProps) {
    if (!screenName || screenName.length === 0) {
        return;
    }
    Navigation.showModal({
        stack: {
            children: [{
                component: {
                    name: screenName,
                    passProps: passProps,
                    options: {
                        topBar: {
                            title: {
                                text: title,
                            }
                        },
                        bottomTabs: {
                            visible: false,
                        }
                    }
                }
            }]
        }
    })
}

function dismissModal(componentId) {
    Navigation.dismissModal(componentId);
}

function mergeOptions(componentId, options) {
    Navigation.mergeOptions(componentId, options);
}

function setStackRoot(componentId, children) {
    RouterStack.setStackRoot(children);
    const childrenComponents = [];
    children.forEach((item, index) => {
        childrenComponents.push({
            component: {
                name: item.pageName,
                passProps: item,
                options: {
                    animations: {
                        setStackRoot: {
                            enabled: children.length === index+1,
                        }
                    },
                    topBar: {
                        title: {
                            text: item.title,
                        }
                    },
                    bottomTabs: {
                        visible: index === 0,
                    }
                }
            }
        })
    });
    Navigation.setStackRoot(componentId, childrenComponents);
}

// 打电话
function openPhone(uri) {
    Linking.openURL(uri);
}


export default {
    openWeb,
    switchTab,
    pushScreen,
    pushScreenWithOptions,
    popScreen,
    popToRootScreen,
    popToScreen,
    showModalScreen,
    dismissModal,
    mergeOptions,
    setStackRoot,
    openPhone,
};