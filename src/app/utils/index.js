import angular from 'angular';
import eventEmitter from './event-emitter';

const utils = angular.module('utils', [
    eventEmitter
])
    .name;

export default utils;