class AirportService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
    }

    getAirports() {
        return this._$http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
    }

    findByCriteria() {
        console.log('findByCriteria()');
    }

    getDestinationsByOrigin(origin, routes, airports) {
        const codes = routes[origin.iataCode];
        let destinations = codes.map(code => airports.find(airport => airport.iataCode === code));
        return destinations;
    }


}
export default AirportService;