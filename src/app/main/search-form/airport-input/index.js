import angular from 'angular';
import airportInputComponent from './airportInputComponent';

const airportInput = angular.module('airportInput', [])
    .component('airportInput', airportInputComponent)
    .name;

export default airportInput;