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
var profile_list_component_1 = require('./profileList/profile-list.component');
var profile_component_1 = require('./profile/profile.component');
var UserListComponent = (function () {
    function UserListComponent() {
        console.log("[User List Component]");
    }
    UserListComponent = __decorate([
        core_1.Component({
            selector: "user",
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./user-list.scss')],
            template: require('./user-list.html'),
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: "/user-list", component: profile_list_component_1.ProfileListComponent, name: "UserList", useAsDefault: true }),
            new router_1.Route({ path: "/profile/:id", component: profile_component_1.ProfileComponent, name: "Profile" })
        ]), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map