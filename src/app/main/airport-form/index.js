import angular from 'angular';
import airportInput from './airport-input';
import airportDate from './airport-date';
import airportFormComponent from './airportFormComponent';
import airportService from './airportService';

const airportForm = angular.module('airportForm', [airportInput, airportDate])
    .component('airportForm', airportFormComponent)
    .service('airportService', airportService)
    .name;

export default airportForm;