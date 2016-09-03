import angular from 'angular';
import airportForm from './airport-form';
import airportResults from './airport-results';
import mainComponent from './mainComponent';

const main = angular.module('main', [airportForm, airportResults])
    .component('main', mainComponent)
    .name;

export default main;