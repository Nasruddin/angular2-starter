import {Injectable} from 'angular2/core';

import { Http, Response, Headers } from 'angular2/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: string;
  constructor(private http: Http) {
    this.token = localStorage.getItem('x-token');
  }

  login(_username: string, _password: string) {

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let loginDetails = { username: _username, password: _password }
      return this.http.post('http://localhost:9000/api/auth', JSON.stringify(loginDetails), {headers})
        .map((res : any) => {
            let data = res.json();
            this.token = data.token;
            localStorage.setItem('x-token', this.token);
            window.location.reload();
        });
  }

  logout() {
    /*
     * If we had a login api, we would have done something like this

    return this.http.get(this.config.serverUrl + '/auth/logout', {
      headers: new Headers({
        'x-security-token': this.token
      })
    })
    .map((res : any) => {
      this.token = undefined;
      localStorage.removeItem('token');
    });
     */

    this.token = undefined;
    localStorage.removeItem('x-token');
    window.location.reload();

    return Observable.of(true);
  }

  private handleError (error: Response) {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
    }

}
