import { EventTraceManager } from '@peppas/toolkit';
import { isEmptyString } from '../utils/CommonUtil'

function init() {
    EventTraceManager.init('vipplus-app', AppStatusManager.ShareInstance().appVersion);
    EventTraceManager.setDefaultProps({ 'install_channel': AppStatusManager.ShareInstance().install_channel, 'bi_device_id': AppStatusManager.ShareInstance().deviceid });

}

function setDynamicProps(){
    let dynamicProps = {};
    EventTraceManager.setDynamicProps(dynamicProps);
}
function onPageVisitEvent(pageName) {
    setDynamicProps();
    EventTraceManager.onPageVisitEvent(pageName);
}
function onTabClickEvent(index,pageName){
    setDynamicProps();
    EventTraceManager.onTabClickEvent(index,pageName);
}

function onAdClickEvent({ page, ad, title, toUrl, adName }) {
    setDynamicProps();
    EventTraceManager.onAdClickEvent({ page, ad, title, toUrl, adName })
}
function onPageVisitEventProps(pageName,props) {
    setDynamicProps();
    EventTraceManager.onPageVisitEventProps(pageName,props);
}

export default {
    init,
    onPageVisitEvent,
    onPageVisitEventProps,
    onTabClickEvent,
    onAdClickEvent,
}
