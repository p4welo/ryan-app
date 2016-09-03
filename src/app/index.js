import angular from 'angular';
import ngTouch from 'angular-touch';
import uiBootstrap from 'angular-ui-bootstrap';

import config from './config';
import common from './common';
import main from './main';
import utils from './utils';

const app = angular.module('app', [
    ngTouch,
    uiBootstrap,
    common,
    main,
    utils
])
    .config(config)
    .name;

angular.bootstrap(document, [app]);