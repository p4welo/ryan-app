class MainController {
    constructor(airportService) {
        'ngInject';
        this._airportService = airportService;
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