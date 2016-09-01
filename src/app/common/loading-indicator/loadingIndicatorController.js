class LoadingIndicatorController {
    constructor($http) {
        'ngInject';
        this._$http = $http;
    }

    get loading() {
        return this._$http.pendingRequests.length > 0;
    }
}

export default LoadingIndicatorController;