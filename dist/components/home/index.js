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
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('[Component] home ngOnInit');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log('[Component] home onDestroy');
    };
    HomeComponent.prototype.ngOnChanges = function () {
        console.log('[Component] home onChanges');
    };
    HomeComponent.prototype.ngDoCheck = function () {
        console.log('[Component] home doCheck');
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        console.log('[Component] home afterContentInit');
    };
    HomeComponent.prototype.ngAfterContentChecked = function () {
        console.log('[Component] home afterContentChecked');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log('[Component] home afterViewInit');
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        console.log('[Component] home afterViewChecked');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
            template: require('./index.html')
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=index.js.map