class SearchFormController {
    constructor(searchFormService) {
        'ngInject';
        this._searchFormService = searchFormService;
        this.activate();
    }

    activate() {
        this._searchFormService.getAirports();
    }

    onOriginSelect(airport) {
        console.log('onOriginSelect', airport);
    }

    onDestinationSelect(airport) {
        console.log('onDestinationSelect', airport);
    }
}
export default SearchFormController;