import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UsersService } from '../Services/users.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
    users: User[];
    errorMessage: String;
    user = new User();
   
    constructor(private userService: UsersService, private router: Router) {
    }

    ngOnInit(): void {
        this.fetchUsers();
    }

    fetchUsers(): void {
        this.userService.getUsersWithPromise()
            .then(users => this.users = users,
            error => this.errorMessage = <any>error);
    }


    formatResult(result) {
        this.users = result.map(x => x.length)
    }
    addUser(): void {
        this.userService.addUserWithPromise(this.user)
            .then(book => {
                this.fetchUsers();
                this.reset();
               
            },
            error => this.errorMessage = <any>error);
    }
    removeUser(index: number): void {
        var userId = this.users[index].id;
        var ctrl = this;
        this.userService.deleteUserWithPromise(userId)
            .then(function () { ctrl.fetchUsers() },
            error => this.errorMessage = <any>error);
    }

    managePackages = function (user: User) {
        this.router.navigate(['/userpackage', user.id]);
    };

    private reset() {
        this.user.id = null;
        this.user.dateOfBirth = null;
        this.user.firstName = null;
        this.user.lastName = null;
        this.user.password = null;
        this.user.streetAndNumber = null;
        this.errorMessage = null;
        this.user.userName = null;
        
    }



}



