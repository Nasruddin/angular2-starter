import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';

import {Router, RouteParams, RouteData, ROUTER_DIRECTIVES} from 'angular2/router';

import { Observable }     from 'rxjs/Observable';

import {Task} from '../task';

@Injectable()
export class TaskService {

    public token: string;
    constructor(private http: Http, private _router: Router,
                private _params: RouteParams, private _data: RouteData) {
        this.token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYXNpciIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTQ1NDc2ODI1MDUyMCwiZXhwIjoxNDU1MzczMDUwfQ.aqZCI23e_AzR-_NKNOOt8quqPUx0K9Z6jK300wNs_ldEk6S3cnNQgVHP2YQ9ncjVV_6LLSYmeZuQwVjjducKVg";
    }

    retrieveTaskById() {

        let id = this._params.get('taskId');
        let headers = new Headers();
        headers.append('X-AUTH-TOKEN', this.token);
        return this.http.get('http://localhost:9000/api/todo/' + id, { headers })
            .map(res => <Task> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
