class AirportService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
        this.paging = {limit: 15, offset: 0};
    }

    getAirports() {
        return this._$http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
    }

    findByCriteria(criteria) {
        let url = `https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${criteria.origin.iataCode}/to/${criteria.destination.iataCode}/${criteria.dateFrom}/${criteria.dateTo}/250/unique?limit=${this.paging.limit}&offset=${this.paging.offset}`;
        return this._$http.get(url);
    }

    getDestinationsByOrigin(origin, routes, airports) {
        const codes = routes[origin.iataCode];
        return codes.map(code => airports.find(airport => airport.iataCode === code));
    }
}
export default AirportService;