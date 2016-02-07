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
var Observable_1 = require('rxjs/Observable');
var isLoggedIn_1 = require('../../auth/isLoggedIn');
var TaskListService = (function () {
    function TaskListService(http) {
        this.http = http;
        this.token = isLoggedIn_1.getToken();
        console.log("Token ---> " + this.token);
    }
    TaskListService.prototype.retrieveData = function () {
        var headers = new http_1.Headers();
        headers.append('X-AUTH-TOKEN', this.token);
        return this.http.get('http://localhost:9000/api/todo', { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaskListService.prototype.addData = function (task) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-AUTH-TOKEN', this.token);
        var saveTask = { task: task };
        return this.http.post('http://localhost:9000/api/todo/create', JSON.stringify(saveTask), {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaskListService.prototype.deleteData = function (todo) {
        var headers = new http_1.Headers();
        headers.append('X-AUTH-TOKEN', this.token);
        return this.http.delete('http://localhost:9000/api/todo/' + todo.id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaskListService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TaskListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskListService);
    return TaskListService;
}());
exports.TaskListService = TaskListService;
//# sourceMappingURL=task-list.service.js.map