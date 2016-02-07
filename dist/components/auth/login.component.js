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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(fb, router, _loginService) {
        this.router = router;
        this._loginService = _loginService;
        this.error = false;
        this.form = fb.group({
            username: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required]
        });
    }
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this._loginService.login(value.username, value.password)
            .subscribe(function (token) { _this.router.navigate(['../Home']); }, function () { _this.error = true; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./login.scss')],
            template: require('./login.html'),
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map