import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'app-packages',
  templateUrl: './packages-component.component.html',
  styleUrls: ['./packages-component.component.css']
})
export class PackagesComponentComponent implements OnInit {

    packages = [];
    newPackage = new Package();
    constructor(private _httpService: Http)
    {
    }

    ngOnInit() {
        this._httpService.get('/api/package/list').subscribe(values => {
            this.packages = values.json() as string[];
        });
    }

    addPackage = function () {
        if (this.newPackage != undefined)
        {
            this.packages.push(this.newPackage);
            this.newPackage = new Package();
        }
    }

    removePackage = function (index) {
        this.packages.splice(index, 1);
    }

    

}

export class Package {
    public id: number;
    public name: string;   
}
