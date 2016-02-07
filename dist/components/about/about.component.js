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
var About = (function () {
    function About() {
    }
    About.prototype.ngOnInit = function () {
        console.log('[Component] home running');
    };
    About = __decorate([
        core_1.Component({
            selector: "about",
            directives: [],
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./about.scss')],
            template: require('./about.html')
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
}());
exports.About = About;
//# sourceMappingURL=about.component.js.map