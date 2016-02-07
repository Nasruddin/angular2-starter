import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';

import { Observable }     from 'rxjs/Observable';

import {getToken} from '../../auth/isLoggedIn';
import {Task} from '../task';

@Injectable()
export class TaskListService {

    public token: string;
    constructor(private http: Http) {
        this.token = getToken();
        console.log("Token ---> " + this.token);
        }

    retrieveData() {
        let headers = new Headers();
        headers.append('X-AUTH-TOKEN', this.token);
        return this.http.get('http://localhost:9000/api/todo', { headers })
            .map(res => <Task[]> res.json())
            .catch(this.handleError);
    }

    addData(task: string) : Observable<Task> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-AUTH-TOKEN', this.token);
        let saveTask = { task: task }

        return this.http.post('http://localhost:9000/api/todo/create', JSON.stringify(saveTask), {
            headers
        })
                    .map(res => <Task> res.json())
                    .catch(this.handleError);
    }

    deleteData(todo: Task) {
        let headers = new Headers();
        headers.append('X-AUTH-TOKEN', this.token);
        return this.http.delete('http://localhost:9000/api/todo/'+todo.id, { headers })
            .map(res => <string> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
