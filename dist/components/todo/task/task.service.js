"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var Observable_1 = require('rxjs/Observable');
var TaskService = (function () {
    function TaskService(http, _router, _params, _data) {
        this.http = http;
        this._router = _router;
        this._params = _params;
        this._data = _data;
        this.token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYXNpciIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTQ1NDc2ODI1MDUyMCwiZXhwIjoxNDU1MzczMDUwfQ.aqZCI23e_AzR-_NKNOOt8quqPUx0K9Z6jK300wNs_ldEk6S3cnNQgVHP2YQ9ncjVV_6LLSYmeZuQwVjjducKVg";
    }
    TaskService.prototype.retrieveTaskById = function () {
        var id = this._params.get('taskId');
        var headers = new http_1.Headers();
        headers.append('X-AUTH-TOKEN', this.token);
        return this.http.get('http://localhost:9000/api/todo/' + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, router_1.RouteParams, router_1.RouteData])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map