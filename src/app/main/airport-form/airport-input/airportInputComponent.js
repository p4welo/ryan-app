import './airportInput.less';
import controller from './airportInputController';
import template from './airportInput.html';

export default {
    template: template,
    controller: controller,
    bindings: {
        icon: '@',
        label: '@',
        list: '<',
        onSelect: '&'
    }
};