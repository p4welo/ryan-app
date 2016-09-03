import './airportResults.less';
import template from './airportResults.html';

export default {
    template: template,
    bindings: {
        criteria: '<',
        flights: '<',
        onClose: '&'
    }
};