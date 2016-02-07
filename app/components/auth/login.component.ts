import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router} from 'angular2/router';
import {LoginService} from './login.service'

@Component({
    selector: "login",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./login.scss')],
    template: require('./login.html'),
    providers: [LoginService]
})
export class LoginComponent {

    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, private router: Router, private _loginService: LoginService) {
        this.form = fb.group({
            username:  ['', Validators.required],
            password:  ['', Validators.required]
        });
    }

      onSubmit(value: any) {
        this._loginService.login(value.username, value.password)
          .subscribe(
            (token: any) => { this.router.navigate(['../Home']); },
            () => { this.error = true; }
          );
      }
}
