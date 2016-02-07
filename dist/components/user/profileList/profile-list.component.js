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
var profile_list_service_1 = require('./profile-list.service');
var ProfileListComponent = (function () {
    function ProfileListComponent(_profileListService) {
        this._profileListService = _profileListService;
        console.log("Profile List Component");
    }
    ProfileListComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    ProfileListComponent.prototype.getAllUsers = function () {
        var _this = this;
        console.log("Profile List Component getAllUsers");
        this._profileListService.getAllUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    ProfileListComponent = __decorate([
        core_1.Component({
            selector: "profile-list",
            template: require('./profile-list.html'),
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./profile-list.scss')],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [profile_list_service_1.ProfileListService]
        }), 
        __metadata('design:paramtypes', [profile_list_service_1.ProfileListService])
    ], ProfileListComponent);
    return ProfileListComponent;
}());
exports.ProfileListComponent = ProfileListComponent;
//# sourceMappingURL=profile-list.component.js.map