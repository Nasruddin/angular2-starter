import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileListService} from './profile-list.service';

@Component({
    selector: "profile-list",
    template: require('./profile-list.html'),
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./profile-list.scss')],
    directives: [ROUTER_DIRECTIVES],
    providers: [ProfileListService]
})

export class ProfileListComponent {
    //Make type of user instead of Object
    users: Array<Object>;
    errorMessage: String;
    constructor(private _profileListService: ProfileListService) {
        console.log("Profile List Component");
    }

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {
        console.log("Profile List Component getAllUsers");
        this._profileListService.getAllUsers()
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error
            );
    }
}
