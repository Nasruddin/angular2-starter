import {Component, View} from 'angular2/core';

@Component({
    selector: "home",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./home.scss')],
    template: require('./home.html')
})
export class HomeComponent {}
