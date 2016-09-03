class AirportService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
    }

    getAirports() {
        return this._$http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
    }

    findByCriteria(criteria) {
        return this._$http.get(`https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${criteria.origin.iataCode}/to/${criteria.destination.iataCode}/${criteria.dateFrom}/${criteria.dateTo}/250/unique`);
    }

    getDestinationsByOrigin(origin, routes, airports) {
        const codes = routes[origin.iataCode];
        let destinations = codes.map(code => airports.find(airport => airport.iataCode === code));
        return destinations;
    }


}
export default AirportService;