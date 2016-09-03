class MainController {
    constructor(airportService) {
        'ngInject';
        this._airportService = airportService;
        this._activate();
    }

    _activate() {
        this._airportService.getAirports().then(result => this.iata = result.data);
    }

    submit(criteria) {
        this.criteria = criteria;
        this._airportService.findByCriteria(criteria).then(result => {
            this.flights = result.data.flights;
        }, response => $log.error(response));
    }

    cleanCriteria() {
        delete this['criteria'];
        delete this['flights'];
    }
}
export default MainController;