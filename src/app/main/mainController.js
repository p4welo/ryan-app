class MainController {
    constructor(airportService) {
        'ngInject';
        this._airportService = airportService;
    }

    submit(criteria) {
        this._airportService.findByCriteria(criteria).then(result => {
            this.flights = result.data.flights;
        }, response => $log.error(response));
    }
}
export default MainController;