import angular from 'angular';
import searchForm from './search-form';
import mainComponent from './mainComponent';

const main = angular.module('main', [searchForm])
    .component('main', mainComponent)
    .name;

export default main;