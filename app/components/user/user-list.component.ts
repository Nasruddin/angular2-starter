import {Component, View} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileListComponent} from './profileList/profile-list.component';
import {ProfileComponent} from './profile/profile.component';

@Component({
    selector: "user",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./user-list.scss')],
    template: require('./user-list.html'),
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({path: "/user-list", component: ProfileListComponent, name: "UserList", useAsDefault: true}),
    new Route({path: "/profile/:id", component: ProfileComponent, name: "Profile"})
])
export class UserListComponent {

    constructor()  {
        console.log("[User List Component]");
    }
}
