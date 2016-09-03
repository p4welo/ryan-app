class AirportDateController {
    constructor($scope, eventEmitter) {
        'ngInject';
        this._eventEmitter = eventEmitter;
        this._initListeners($scope);
        this.dateOptions = {
            formatYear: 'yy',
            minDate: new Date(),
            startingDay: 1
        };
    }

    _initListeners($scope) {
        $scope.$watch('$ctrl.date', newValue => {
            if (!newValue) return;
            const day = formattedNumber(newValue.getDate());
            const month = formattedNumber(newValue.getMonth() + 1);
            const year = newValue.getFullYear();
            this.onChange(this._eventEmitter({'date': `${year}-${month}-${day}`}));
        });

        function formattedNumber(number) {
            return number < 10 ? '0' + number : number;
        }
    }

    open() {
        this.opened = true;
    }
}
export default AirportDateController;