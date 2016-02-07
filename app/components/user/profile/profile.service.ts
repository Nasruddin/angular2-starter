import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import {Router, RouteParams, RouteData, ROUTER_DIRECTIVES} from 'angular2/router';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ProfileService {

    constructor(private _http: Http, private _router: Router,
                private _params: RouteParams, private _data: RouteData) {
    }

    getUserProfile() {

        let username = this._params.get('id');
        
        console.log("[Profile Service getUserProfile()] with username" + username);
        return this._http.get("http://localhost:9000/api/user/" + username)
            .map(res => res.json())
            .catch(this.handleError)
    }

    private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
