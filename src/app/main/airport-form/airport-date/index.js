import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap'
import airportDateComponent from './airportDateComponent';

const airportDate = angular.module('airportDate', [uiBootstrap])
    .component('airportDate', airportDateComponent)
    .name;

export default airportDate;