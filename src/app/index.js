import angular from 'angular';
import ngTouch from 'angular-touch';
import uiBootstrap from 'angular-ui-bootstrap';

import common from './common';
import main from './main';
import config from './config';

const app = angular.module('app', [
    ngTouch,
    uiBootstrap,
    common,
    main
])
    .config(config)
    .name;

angular.bootstrap(document, [app]);