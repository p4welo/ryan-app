import './airportResults.less';
import controller from './airportResultsController';
import template from './airportResults.html';

export default {
    template: template,
    controller: controller,
    bindings: {
        criteria: '<',
        flights: '<',
        onClose: '&'
    }
};