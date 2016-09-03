import angular from 'angular';
import airportResultsComponent from './airportResultsComponent';
import airportResultsService from './airportResultsService';

const airportResults = angular.module('airportResults', [])
    .component('airportResults', airportResultsComponent)
    .service('airportResultsService', airportResultsService)
    .name;

export default airportResults;