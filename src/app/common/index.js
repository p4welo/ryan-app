import angular from 'angular';
import loadingIndicator from './loading-indicator';

const common = angular.module('common', [
    loadingIndicator
])
    .name;

export default common;