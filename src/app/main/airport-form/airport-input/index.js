import angular from 'angular';
import uibTypeAhead from 'angular-ui-bootstrap/src/typeahead'
import airportInputComponent from './airportInputComponent';

const airportInput = angular.module('airportInput', [uibTypeAhead])
    .component('airportInput', airportInputComponent)
    .name;

export default airportInput;