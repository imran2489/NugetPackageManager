import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { PackagesService } from '../Services/packages.service';
import { Package } from '../Models/Package';

@Component({
  selector: 'app-packages',
  templateUrl: './packages-component.component.html',
  styleUrls: ['./packages-component.component.css']
})
export class PackagesComponentComponent implements OnInit {

    packages: Package[];
    errorMessage: String;
    package = new Package();
    packageName: String;
    constructor(private packageService: PackagesService)
    {
    }

    ngOnInit(): void {
        this.fetchPackages();
    }

    fetchPackages(): void {
        this.packageService.getPackagesWithPromise()
            .then(packages => this.packages = packages,
            error => this.errorMessage = <any>error);
    }

  
    formatResult(result) {
        this.packages = result.map(x => x.length) 
    }
    addPackage(): void {
        this.packageService.addPackageWithPromise(this.package)
            .then(book => {
                this.fetchPackages();
                this.reset();
                this.packageName = book.name;
            },
            error => this.errorMessage = <any>error);
    }   
    removePackage(index: number): void {
        var packageId = this.packages[index].id;
        var ctrl = this;
        this.packageService.deletePackageWithPromise(packageId)
            .then(function () { ctrl.fetchPackages() },
            error => this.errorMessage = <any>error);
    }   

    private reset() {
        this.package.id = null;
        this.package.name = null;
        this.errorMessage = null;
        this.packageName = null;
    }

    
  
}


