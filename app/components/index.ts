import {Component, View}    from 'angular2/core';
import {NavbarComponent}    from './navbar/navbar.component';
import {HomeComponent}      from './home/home.component';
import {About}              from './about/about.component';
import {UserListComponent}  from './user/user-list.component';
import {TodoComponent}      from './todo/todo.component';
import {LoginComponent}     from './auth/login.component';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

import 'rxjs/Rx';

@Component({
    selector: "app"
})
@View({
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
@RouteConfig([
    new Route ({ path: '/', component: HomeComponent, name: 'Home' }),
    new Route({ path: '/login', component: LoginComponent, name: 'Login'}),
    new Route ({ path: '/about', component: About, name: 'About', data: { pageId: null }} ),
    new Route({ path: '/users/...', component: UserListComponent, name: 'Users'}),
    new Route({ path: '/todos/...', component: TodoComponent, name: 'Todos'})
])
export class App {

    constructor() {

    }

    ngOnInit() {
        console.log('[Component] app running');
    }
}
