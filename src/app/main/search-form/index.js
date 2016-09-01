import angular from 'angular';
import airportInput from './airport-input';
import searchFormComponent from './searchFormComponent';
import searchFormService from './searchFormService';

const searchForm = angular.module('searchForm', [airportInput])
    .component('searchForm', searchFormComponent)
    .service('searchFormService', searchFormService)
    .name;

export default searchForm;