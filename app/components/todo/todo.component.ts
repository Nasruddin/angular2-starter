import {Component, View} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskListComponent} from './taskList/task-list.component';
import {TaskComponent} from './task/task.component';

@Component({
    selector: "todo",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./todo.scss')],
    template: require('./todo.html'),
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({path: "/todo-list", component: TaskListComponent, name: "TodoList", useAsDefault: true}),
    new Route({path: "/task/:taskId", component: TaskComponent, name: "Task"})
])

export class TodoComponent {

    constructor() {

    }
}
