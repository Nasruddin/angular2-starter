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
var navbar_component_1 = require('./navbar/navbar.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var user_list_component_1 = require('./user/user-list.component');
var todo_component_1 = require('./todo/todo.component');
var login_component_1 = require('./auth/login.component');
var router_1 = require('angular2/router');
require('rxjs/Rx');
var App = (function () {
    function App() {
    }
    App.prototype.ngOnInit = function () {
        console.log('[Component] app running');
    };
    App = __decorate([
        core_1.Component({
            selector: "app"
        }),
        core_1.View({
            directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES],
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
            template: require('./index.html')
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: home_component_1.HomeComponent, name: 'Home' }),
            new router_1.Route({ path: '/login', component: login_component_1.LoginComponent, name: 'Login' }),
            new router_1.Route({ path: '/about', component: about_component_1.About, name: 'About', data: { pageId: null } }),
            new router_1.Route({ path: '/users/...', component: user_list_component_1.UserListComponent, name: 'Users' }),
            new router_1.Route({ path: '/todos/...', component: todo_component_1.TodoComponent, name: 'Todos' })
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=index.js.map