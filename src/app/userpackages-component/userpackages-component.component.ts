import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { TranslatePipe } from 'angular2-translate';


import { PackagesService } from '../Services/packages.service';
import { UsersService } from '../Services/users.service';
import { Package } from '../Models/Package';

@Component({
    selector: 'app-userpackages-component',    
  templateUrl: './userpackages-component.component.html',
  styleUrls: ['./userpackages-component.component.css']
})
export class UserpackagesComponentComponent implements OnInit {
    userId: number;
    private sub: any;
    packages: Package[];
    errorMessage: String;
    message: string;
    constructor(private packageService: PackagesService, private userService: UsersService
        , private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.userId = +params['userId']; 
        });
        this.fetchPackages(this.userId);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    fetchPackages(userId: number): void {
        this.packageService.getUserPackagesWithPromise(userId)
            .then(packages => this.packages = packages,
            error => this.errorMessage = <any>error);
    }
    update(): void {
        this.message = "";
        this.userService.updateUserPackageWithPromise(this.userId,this.packages)
            .then(res => {
                this.fetchPackages(this.userId);
                this.message = "User package updated successfully !";
            },
            error => this.errorMessage = <any>error);
    }   

    selectAll(): void {
        for (var i = 0; i < this.packages.length; i++) {
            this.packages[i].linked = true;
        }
       
    }  

    deselectAll(): void {
        for (var i = 0; i < this.packages.length; i++) {
            this.packages[i].linked = false;
        }

    }  
}
