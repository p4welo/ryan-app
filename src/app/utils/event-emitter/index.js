import angular from 'angular';
import emitter from './eventEmitter';

const eventEmitter = angular.module('eventEmitter', [])
    .value('eventEmitter', emitter)
    .name;

export default eventEmitter;