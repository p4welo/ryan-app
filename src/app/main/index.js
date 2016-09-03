import angular from 'angular';
import airportForm from './airport-form';
import mainComponent from './mainComponent';

const main = angular.module('main', [airportForm])
    .component('main', mainComponent)
    .name;

export default main;