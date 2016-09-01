import angular from 'angular';
import loadingIndicatorComponent from './loadingIndicatorComponent';

const loadingIndicator = angular.module('loadingIndicator', [])
    .component('loadingIndicator', loadingIndicatorComponent)
    .name;

export default loadingIndicator;