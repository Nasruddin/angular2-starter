import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskListService} from './task-list.service';

import {Task} from '../task';

@Component({
    selector: "task-list",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./task-list.scss')],
    template: require('./task-list.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [TaskListService]
})
export class TaskListComponent {

    constructor(private _taskListService: TaskListService) {
        console.log("[Task component running]");
    }

    tasks: Task[];
    errorMessage: string;

    ngOnInit() { this.getTodos(); }

    getTodos() {
        console.log("In function " +this._taskListService);
        this._taskListService.retrieveData().subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error);
    }

    addTodo(name: string) {
        if (!name) { return; }
        this._taskListService.addData(name).subscribe(
            task => this.tasks.push(task),
            error => this.errorMessage = <any>error);
    }

    deleteTodo(task: Task, tasks: Task[]) {
        if (!task.id) { return; }
        this._taskListService.deleteData(task).subscribe(
                error => this.errorMessage = <any>error
        );

        if (tasks !== undefined) {
                        var pos = tasks.map(function (e) {
                            return e.id;
                        }).indexOf(task.id);
                        tasks.splice(pos, 1);
            }
    }

}
