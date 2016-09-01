class SearchFormService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
    }

    getAirports() {
        console.log('getAirports()');
    }

    findByCriteria() {
        console.log('findByCriteria()');
    }
}
export default SearchFormService;