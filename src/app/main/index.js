import angular from 'angular';

import mainComponent from './mainComponent';

const main = angular.module('main', [])
    .component('main', mainComponent)
    .name;

export default main;