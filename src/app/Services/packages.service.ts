import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Package } from '../Models/Package'

@Injectable()
export class PackagesService {
   
    url = "api/package";
    constructor(private http: Http) { }

    getUserPackagesWithPromise(userId: number): Promise<Package[]> {

        return this.http.get(this.url + '/' + userId).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }


    getPackagesWithPromise(): Promise<Package[]> {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }
    addPackageWithPromise(newpackage: Package): Promise<Package> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, newpackage, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    deletePackageWithPromise(id: number): Promise<void> {
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
