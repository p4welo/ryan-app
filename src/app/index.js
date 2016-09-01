import angular from 'angular';

import common from './common';
import main from './main';
import config from './config';

const app = angular.module('app', [common, main])
    .config(config)
    .name;

angular.bootstrap(document, [app]);