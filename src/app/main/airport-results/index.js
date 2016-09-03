import angular from 'angular';
import uibTooltip from 'angular-ui-bootstrap/src/tooltip';
import airportResultsComponent from './airportResultsComponent';

const airportResults = angular.module('airportResults', [uibTooltip])
    .component('airportResults', airportResultsComponent)
    .name;

export default airportResults;