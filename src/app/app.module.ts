import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import 'rxjs/Rx';


import { AppComponent } from './app.component';
import { PackagesComponentComponent } from './packages-component/packages-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { PackagesService } from './Services/packages.service';
import { UsersService } from './Services/users.service';
import { UserpackagesComponentComponent } from './userpackages-component/userpackages-component.component';



@NgModule({
    declarations: [
        AppComponent,
        PackagesComponentComponent,
        UserComponentComponent,
        UserpackagesComponentComponent
    ],
    imports: [
        BrowserModule,
        FlashMessagesModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'user',
                component: UserComponentComponent
            },
            {
                path: 'package',
                component: PackagesComponentComponent
            }
            ,
            {
                path: 'userpackage/:userId',
                component: UserpackagesComponentComponent
            }
        ])
    ],
    providers: [PackagesService, UsersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
