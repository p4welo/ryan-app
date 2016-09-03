import angular from 'angular';
import airportInput from './airport-input';
import airportDate from './airport-date';
import airportFormComponent from './airportFormComponent';

const airportForm = angular.module('airportForm', [airportInput, airportDate])
    .component('airportForm', airportFormComponent)
    .name;

export default airportForm;