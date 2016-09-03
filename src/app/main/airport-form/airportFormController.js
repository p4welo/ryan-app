class AirportFormController {
    constructor(airportService) {
        'ngInject';
        this._airportService = airportService;
        this._activate();
    }

    _activate() {
        this._airportService.getAirports().then(result => this.iata = result.data);
    }

    onOriginSelect(origin) {
        this.origin = origin;
        this.destinations = this._airportService.getDestinationsByOrigin(origin, this.iata.routes, this.iata.airports);
    }

    onDestinationSelect(destination) {
        this.destination = destination;
    }

    onDateFromChange(date) {
        this.dateFrom = date.date;
    }

    onDateToChange(date) {
        this.dateTo = date.date;
    }
}
export default AirportFormController;