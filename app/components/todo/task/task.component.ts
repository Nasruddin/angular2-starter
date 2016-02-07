import {Component, View} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskService} from './task.service';

import {Task} from '../task';

@Component({
    selector: "task",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./task.scss')],
    template: require('./task.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [TaskService]
})
export class TaskComponent {
    constructor(private _taskService: TaskService) {
        console.log("[Task component running]");
    }

    task: Task;
    errorMessage: string;

    ngOnInit() { this.getTodoById(); }

    getTodoById() {
        this._taskService.retrieveTaskById()
            .subscribe(
                task => this.task = task,
                error => this.errorMessage = <any>error
            );
    }

}
