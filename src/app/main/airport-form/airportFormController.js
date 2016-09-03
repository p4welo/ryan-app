class AirportFormController {
    constructor(airportService, eventEmitter) {
        'ngInject';
        this._airportService = airportService;
        this._eventEmitter = eventEmitter;
        this.criteria = {};
    }

    onOriginSelect(origin) {
        this.criteria.origin = origin;
        this.destinations = this._airportService.getDestinationsByOrigin(origin, this.iata.routes, this.iata.airports);
    }

    onDestinationSelect(destination) {
        this.criteria.destination = destination;
    }

    onDateFromChange(date) {
        this.criteria.dateFrom = date.date;
    }

    onDateToChange(date) {
        this.criteria.dateTo = date.date;
    }

    submit() {
        this.onSubmit(this._eventEmitter(this.criteria));
    }
}
export default AirportFormController;