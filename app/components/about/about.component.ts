import {Component, View} from 'angular2/core';

@Component({
  selector: "about",
  directives: [],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./about.scss')],
  template: require('./about.html')
})
export class About {

    constructor() {
    }

    ngOnInit() {
        console.log('[Component] home running');
    }
}
