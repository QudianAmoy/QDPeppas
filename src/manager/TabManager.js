/**
 * 导航控制，导航Tab配置页
 * @author Jim.Xiao
 */
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as Page from '../page';
import ColorKey from '../constants/Colors';
import ImageKey from '../constants/Image';


function configOptions(text, icon, selectIcon, id) {
    return {
        text: text,
        icon: icon,
        selectedIcon: selectIcon,
        testID: id,
    }
}

// Tab Config
const HOME_OPTIONS = configOptions('首页', ImageKey.TAB_HOME_UP, ImageKey.TAB_HOME_Down, 'HOME_TAB_BAR_BUTTON');
const FIRST_OPTIONS = configOptions('分类', ImageKey.TAB_CLASSIFICATION_UP, ImageKey.TAB_CLASSIFICATION_Down, 'TEST_TAB_BAR_BUTTON');
const SHARE_OPTIONS = configOptions('分享', ImageKey.TAB_SHARE_UP, ImageKey.TAB_SHARE_Down, 'SHARE_TAB_BAR_BUTTON');
const MY_OPTIONS = configOptions('我的', ImageKey.TAB_ME_UP, ImageKey.TAB_ME_Down, 'MINE_TAB_BAR_BUTTON')


function initTabBasedScreen() {
    // for android todo
    let statusBarBg = ColorKey.navBarColors.statusBarBgDarkColor;
    let statusText = 'light';
    // Android O
    if(Platform.Version >=26){
        statusBarBg = ColorKey.navBarColors.statusBarBgLightColor;
        statusText = 'dark'
    }
    Navigation.setDefaultOptions({
        topBar: {
            background: {
                color: ColorKey.navBarColors.navBarBackgroundColor,
            },
            title: {
                color: ColorKey.navBarColors.navBarTextColor,
                alignment: 'center',
            },
            backButton: {
                title: '',
                color: ColorKey.navBarColors.navBarButtonColor,
            },
            buttonColor: ColorKey.navBarColors.navBarButtonColor,
            noBorder: true,
            ...Platform.select({
                android: {
                    elevation: 0,
                }
            })
        },
        statusBar: {
            ...Platform.select({
                android: {
                    style: statusText,
                    backgroundColor: statusBarBg,
                    drawBehind: false,
                },
                ios:{
                    style: 'light' | 'dark',
                }
            })
        },
        layout: {
            orientation: ['portrait']
        },
        bottomTabs: {
            titleDisplayMode: 'alwaysShow',
            backgroundColor: ColorKey.tabBarColors.tabBarBackgroundColor,
        },
        bottomTab: {
            textColor: ColorKey.tabBarColors.tabBarLabelColor,
            selectedTextColor: ColorKey.tabBarColors.tabBarSelectedLabelColor,
            ...Platform.select({
                android: {
                    selectedIconColor: ColorKey.tabBarColors.tabBarSelectedButtonColor,
                }
            })
        }
    });

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [{
                            component: {
                                name: Page.FirstPage.pageName,
                                options: {
                                    topBar: {
                                        title: {
                                            text: Page.FirstPage.title,
                                        }
                                    }
                                }
                            }
                        }],
                        options: { bottomTab: HOME_OPTIONS },
                    }
                }, {
                    stack: {
                        children: [{
                            component: {
                                name: Page.SecondPage.pageName,
                                options: {
                                    topBar: {
                                        title: {
                                            text: Page.SecondPage.title,
                                        }
                                    }
                                }
                            }
                        }],
                        options: { bottomTab: FIRST_OPTIONS },
                    }
                }, {
                    stack: {
                        children: [{
                            component: {
                                name: Page.FirstPage.pageName,
                                options: {
                                    topBar: {
                                        title: {
                                            text: Page.FirstPage.title,
                                        }
                                    }
                                }
                            }
                        }],
                        options: { bottomTab: SHARE_OPTIONS },
                    }
                }, {
                    stack: {
                        children: [{
                            component: {
                                name: Page.SecondPage.pageName,
                                options: {
                                    topBar: {
                                        title: {
                                            text: Page.SecondPage.title,
                                            color: '#fff'
                                        },
                                        background: {
                                            color: ColorKey.themeMain,
                                        },
                                    },
                                }
                            }
                        }],
                        options: {
                            bottomTab: MY_OPTIONS,
                        },
                    }
                }]
            }
        }
    })
}

export default {
    initTabBasedScreen,
}
