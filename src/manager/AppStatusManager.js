export default class AppStatusManager {
    static ShareInstance() {
        let singleton = new AppStatusManager();
        return singleton;
    }
    constructor() {
        if (!instance) {
            instance = this;                    
        }
        return instance;
    }

}