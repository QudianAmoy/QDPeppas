/**
 * @usage 当前页面堆栈
 * @author shangyuchen
 */
import {
    Platform,
} from 'react-native';
import {isListEmpty} from '../../utils/CommonUtil';
import * as Pages from '../../page';

const curStack = [];
const rootTabs = [];
let currentTab = -1;
let resetStack = [];
let curCommand = '';

function configRootTabs(params) {
    params.forEach((item, index) => {
        const componentId = item.children[0].id;
        const pageName = item.children[0].data.name;
        rootTabs.push({componentId, pageName});
    });
}

function checkRootPage(componentId, pageName) {
    if (Platform.OS === 'ios') {
        for (let index = 0; index < rootTabs.length; index++) {
            const item = rootTabs[index];
            if (item.componentId === componentId && item.pageName === pageName) {
                return index;
            }
        }
    } 
    return -1;
}

function checkPageIndex(componentId, pageName) {
    if (isListEmpty(curStack)) {
        return -1;
    }
    for (let index = 0; index < curStack.length; index++) {
        const item = curStack[index];
        if (item.componentId === componentId && item.pageName === pageName) {
            return index;
        }
    }
    return -1;
}

function handleResetStackRoot(componentId) {
    const componentPrefix = componentId.substring(0, 9);
    const componentNumber = Number(componentId.substring(9));
    curStack.splice(0, curStack.length);
    resetStack.forEach((item, index) => {
        const newNumber = componentNumber-resetStack.length+index+1;
        const newComponent = `${componentPrefix}${newNumber}`;
        curStack.push({componentId: newComponent, pageName: item.pageName});
    });
    const newRootPage = curStack[0];
    if (!isListEmpty(rootTabs) && currentTab !== -1 && currentTab < rootTabs.length) {
        rootTabs.splice(currentTab, 1, newRootPage);
    }
    resetStack = [];
}

function newPageDidAppear(componentId, pageName) {
    if ((curCommand === 'setStackRoot' || Platform.OS === 'android') && !isListEmpty(resetStack)) {
        const resetPage = resetStack[resetStack.length-1];
        if (pageName === resetPage.pageName) {
            handleResetStackRoot(componentId);
        }
        curCommand = '';
        return;
    } else if (curCommand === 'push') {
        curStack.push({componentId, pageName});
        curCommand = '';
        return;
    } else if (curCommand === 'pop') {
        curStack.splice(curStack.length-1, 1);
        curCommand = '';
        return;
    }
    const rootTab = checkRootPage(componentId, pageName);
    if (rootTab === -1) {
        const pageIndex = checkPageIndex(componentId, pageName);
        if (pageIndex === -1) {
            curStack.push({componentId, pageName});
        } else {
            curStack.splice(pageIndex+1, curStack.length-pageIndex-1);
        }
    } else {
        currentTab = rootTab;
        curStack.splice(0, curStack.length);
        curStack.push({componentId, pageName});
    }
}

function handleCommandCompleted(commandId, params) {
    const currentPage = curStack[curStack.length-1];
    if (commandId === 'setRoot') {
        const rootChildren = params.layout.root.children;
        configRootTabs(rootChildren);
    } else if (currentPage && params && currentPage.componentId === params.componentId) {
        curCommand = commandId;
    }
}

function currentStack() {
    const pages = [];
    curStack.forEach((item, index) => {
        const title = Pages[item.pageName];
        pages.push({pageName: item.pageName, title: title});
    });
    return pages;
}

function getComponentId(pageName) {
    for (let index = 0; index < curStack.length; index++) {
        const item = curStack[index];
        if (item.pageName === pageName) {
            return item.componentId;
        }
    }
    return -1;
}

function setStackRoot(children) {
    resetStack = children;
}

export default {
    newPageDidAppear,
    handleCommandCompleted,
    currentStack,
    getComponentId,
    setStackRoot,
}
