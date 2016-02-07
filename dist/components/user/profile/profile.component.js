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
var profile_service_1 = require('./profile.service');
var ProfileComponent = (function () {
    function ProfileComponent(_profileService) {
        this._profileService = _profileService;
        console.log("[Profile Component running]");
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.getUserProfile()
            .subscribe(function (user) {
            _this.user = user;
            console.log("username" + _this.user);
        }, function (error) { return _this.errorMessage = error; });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "profile",
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./profile.scss')],
            template: require('./profile.html'),
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [profile_service_1.ProfileService]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map