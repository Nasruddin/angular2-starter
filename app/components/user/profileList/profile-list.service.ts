import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ProfileListService {

    constructor(private _http: Http) {

    }

    getAllUsers() {
        console.log("[Profile List Service getAllUsers()]");
        return this._http.get('http://localhost:9000/api/user')
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
