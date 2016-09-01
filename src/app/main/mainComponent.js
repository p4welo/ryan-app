import template from './main.html';

export default {
    template: template,
    bindings: {},
    controller: MainController
};

class MainController {
    constructor() {
        "ngInject";

        this._$http = $http;
    }
}