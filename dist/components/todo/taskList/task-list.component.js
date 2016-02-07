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
var router_1 = require('angular2/router');
var task_list_service_1 = require('./task-list.service');
var TaskListComponent = (function () {
    function TaskListComponent(_taskListService) {
        this._taskListService = _taskListService;
        console.log("[Task component running]");
    }
    TaskListComponent.prototype.ngOnInit = function () { this.getTodos(); };
    TaskListComponent.prototype.getTodos = function () {
        var _this = this;
        console.log("In function " + this._taskListService);
        this._taskListService.retrieveData().subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return _this.errorMessage = error; });
    };
    TaskListComponent.prototype.addTodo = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this._taskListService.addData(name).subscribe(function (task) { return _this.tasks.push(task); }, function (error) { return _this.errorMessage = error; });
    };
    TaskListComponent.prototype.deleteTodo = function (task, tasks) {
        var _this = this;
        if (!task.id) {
            return;
        }
        this._taskListService.deleteData(task).subscribe(function (error) { return _this.errorMessage = error; });
        if (tasks !== undefined) {
            var pos = tasks.map(function (e) {
                return e.id;
            }).indexOf(task.id);
            tasks.splice(pos, 1);
        }
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: "task-list",
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./task-list.scss')],
            template: require('./task-list.html'),
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [task_list_service_1.TaskListService]
        }), 
        __metadata('design:paramtypes', [task_list_service_1.TaskListService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map