"use strict";
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var index_1 = require('./components/index');
browser_1.bootstrap(index_1.App, [
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=index.js.map