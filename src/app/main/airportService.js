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

    calculateDiscounts(iata, criteria) {
        const route = criteria.origin.iataCode + criteria.destination.iataCode;
        let discountByRoute = this._findDiscountsByRoute(route, iata.discounts);
        const country = criteria.destination.country.code;
        let discountsByCountry = this._findDiscountsByCountry(country, iata.discounts);
        return [...discountByRoute, ...discountsByCountry];
    }

    _findDiscountsByRoute(route, discounts) {
        let codes = discounts.routes[route];
        if (!codes || codes.length < 1) return [];
        return codes.map(code => discounts.types[code]);
    }

    _findDiscountsByCountry(country, discounts) {
        let codes = discounts.countries[country];
        if (!codes || codes.length < 1) return [];
        return codes.map(code => discounts.types[code]);
    }
}
export default AirportService;