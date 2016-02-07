import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {isLoggedin} from '../auth/isLoggedIn';
import {LoginService} from '../auth/login.service';

@Component({
  selector: "navbar",
  directives: [RouterLink],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./navbar.scss')],
  template: require('./navbar.html'),
  providers: [LoginService]
})
export class NavbarComponent {

    title: string;
    isLoggedIn: boolean;

    constructor(private _loginService: LoginService) {
        this.title = window.todoapp.name;
        this.isLoggedIn = isLoggedin();
    }

    ngOnInit() {
        console.log('[Component] navbar running');
    }

    logout() {
        this._loginService.logout();
    }
}
