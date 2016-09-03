import './airportDate.less';
import controller from './airportDateController';
import template from './airportDate.html';

export default {
    template: template,
    controller: controller,
    bindings: {
        label: '@',
        onChange: '&'
    }
};