import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { User } from '../Models/User'
import { Package } from '../Models/Package'

@Injectable()
export class UsersService {

    url = "api/user";
    constructor(private http: Http) { }


    getUsersWithPromise(): Promise<User[]> {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    updateUserPackageWithPromise(userId: number,packages: Package[]): Promise<void> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.url + "?userId=" + userId, packages).toPromise()
            .then(function () { })
            .catch(this.handleErrorPromise);
    }

    addUserWithPromise(newuser: User): Promise<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, newuser, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    deleteUserWithPromise(id: number): Promise<void> {
        return this.http.delete(this.url + '/' + id).toPromise()
            .then(function () { })
            .catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

}
