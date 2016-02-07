import {Component} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileService} from './profile.service';

@Component({
    selector: "profile",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./profile.scss')],
    template: require('./profile.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [ProfileService]
})
export class ProfileComponent {

    user: Object
    errorMessage: String;
    constructor(private _profileService: ProfileService) {
        console.log("[Profile Component running]")
    }

    ngOnInit() {
        this._profileService.getUserProfile()
            .subscribe(
                user => {
                    this.user = user
                    console.log("username" + this.user);
                },
                error => this.errorMessage = <any>error
            );
    }
}
