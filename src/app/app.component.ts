import { Component, OnInit } from '@angular/core';


import { Http } from '@angular/http'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   
    constructor(private _httpService: Http) {
       
    }
    apiValues: string[] = [];
    ngOnInit() {
        
        document.getElementById("mySidenav").style.width = "250px";
    }

    

    openNav(): void {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("navDiv").style.width = "88%";
        document.getElementById("navDiv").style.marginLeft = "250px";
    }  

    closeNav(): void {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mainDiv").style.marginLeft = "0";

        document.getElementById("navDiv").style.width = "100%";
        document.getElementById("navDiv").style.marginLeft = "0px";
    } 


   
}