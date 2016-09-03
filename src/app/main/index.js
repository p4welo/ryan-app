import angular from 'angular';
import airportForm from './airport-form';
import airportResults from './airport-results';
import mainComponent from './mainComponent';
import airportService from './airportService';

const main = angular.module('main', [airportForm, airportResults])
    .component('main', mainComponent)
    .service('airportService', airportService)
    .name;

export default main;