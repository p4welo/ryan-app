class AirportInputController {
    constructor($scope, eventEmitter) {
        'ngInject';
        this._eventEmitter = eventEmitter;
        this._initListeners($scope);
    }

    _initListeners($scope) {
        // $scope.$watchCollection('$ctrl.list', result => console.log(result));
    }

    onChange($item) {
        this.onSelect(this._eventEmitter($item));
    }
}
export default AirportInputController;