webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 139;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(153);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Package; });
var Package = (function () {
    function Package() {
    }
    return Package;
}());

//# sourceMappingURL=Package.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("navDiv").style.width = "88%";
        document.getElementById("navDiv").style.marginLeft = "250px";
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mainDiv").style.marginLeft = "0";
        document.getElementById("navDiv").style.width = "100%";
        document.getElementById("navDiv").style.marginLeft = "0px";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(216),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__packages_component_packages_component_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_component_user_component_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Services_packages_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userpackages_component_userpackages_component_component__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__packages_component_packages_component_component__["a" /* PackagesComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_component_user_component_component__["a" /* UserComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__userpackages_component_userpackages_component_component__["a" /* UserpackagesComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'user',
                    component: __WEBPACK_IMPORTED_MODULE_9__user_component_user_component_component__["a" /* UserComponentComponent */]
                },
                {
                    path: 'package',
                    component: __WEBPACK_IMPORTED_MODULE_8__packages_component_packages_component_component__["a" /* PackagesComponentComponent */]
                },
                {
                    path: 'userpackage/:userId',
                    component: __WEBPACK_IMPORTED_MODULE_12__userpackages_component_userpackages_component_component__["a" /* UserpackagesComponentComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__Services_packages_service__["a" /* PackagesService */], __WEBPACK_IMPORTED_MODULE_11__Services_users_service__["a" /* UsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_packages_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_Package__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PackagesComponentComponent = (function () {
    function PackagesComponentComponent(packageService) {
        this.packageService = packageService;
        this.package = new __WEBPACK_IMPORTED_MODULE_2__Models_Package__["a" /* Package */]();
    }
    PackagesComponentComponent.prototype.ngOnInit = function () {
        this.fetchPackages();
    };
    PackagesComponentComponent.prototype.fetchPackages = function () {
        var _this = this;
        this.packageService.getPackagesWithPromise()
            .then(function (packages) { return _this.packages = packages; }, function (error) { return _this.errorMessage = error; });
    };
    PackagesComponentComponent.prototype.formatResult = function (result) {
        this.packages = result.map(function (x) { return x.length; });
    };
    PackagesComponentComponent.prototype.addPackage = function () {
        var _this = this;
        this.packageService.addPackageWithPromise(this.package)
            .then(function (book) {
            _this.fetchPackages();
            _this.reset();
            _this.packageName = book.name;
        }, function (error) { return _this.errorMessage = error; });
    };
    PackagesComponentComponent.prototype.removePackage = function (index) {
        var _this = this;
        var packageId = this.packages[index].id;
        var ctrl = this;
        this.packageService.deletePackageWithPromise(packageId)
            .then(function () { ctrl.fetchPackages(); }, function (error) { return _this.errorMessage = error; });
    };
    PackagesComponentComponent.prototype.reset = function () {
        this.package.id = null;
        this.package.name = null;
        this.errorMessage = null;
        this.packageName = null;
    };
    return PackagesComponentComponent;
}());
PackagesComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-packages',
        template: __webpack_require__(217),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_packages_service__["a" /* PackagesService */]) === "function" && _a || Object])
], PackagesComponentComponent);

var _a;
//# sourceMappingURL=packages-component.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_User__ = __webpack_require__(147);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponentComponent = (function () {
    function UserComponentComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__Models_User__["a" /* User */]();
        this.managePackages = function (user) {
            this.router.navigate(['/userpackage', user.id]);
        };
    }
    UserComponentComponent.prototype.ngOnInit = function () {
        this.fetchUsers();
    };
    UserComponentComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.userService.getUsersWithPromise()
            .then(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    UserComponentComponent.prototype.formatResult = function (result) {
        this.users = result.map(function (x) { return x.length; });
    };
    UserComponentComponent.prototype.addUser = function () {
        var _this = this;
        this.userService.addUserWithPromise(this.user)
            .then(function (book) {
            _this.fetchUsers();
            _this.reset();
        }, function (error) { return _this.errorMessage = error; });
    };
    UserComponentComponent.prototype.removeUser = function (index) {
        var _this = this;
        var userId = this.users[index].id;
        var ctrl = this;
        this.userService.deleteUserWithPromise(userId)
            .then(function () { ctrl.fetchUsers(); }, function (error) { return _this.errorMessage = error; });
    };
    UserComponentComponent.prototype.reset = function () {
        this.user.id = null;
        this.user.dateOfBirth = null;
        this.user.firstName = null;
        this.user.lastName = null;
        this.user.password = null;
        this.user.streetAndNumber = null;
        this.errorMessage = null;
        this.user.userName = null;
    };
    return UserComponentComponent;
}());
UserComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(218),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], UserComponentComponent);

var _a, _b;
//# sourceMappingURL=user-component.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_packages_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_users_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpackagesComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserpackagesComponentComponent = (function () {
    function UserpackagesComponentComponent(packageService, userService, route) {
        this.packageService = packageService;
        this.userService = userService;
        this.route = route;
    }
    UserpackagesComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userId = +params['userId'];
        });
        this.fetchPackages(this.userId);
    };
    UserpackagesComponentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserpackagesComponentComponent.prototype.fetchPackages = function (userId) {
        var _this = this;
        this.packageService.getUserPackagesWithPromise(userId)
            .then(function (packages) { return _this.packages = packages; }, function (error) { return _this.errorMessage = error; });
    };
    UserpackagesComponentComponent.prototype.update = function () {
        var _this = this;
        this.message = "";
        this.userService.updateUserPackageWithPromise(this.userId, this.packages)
            .then(function (res) {
            _this.fetchPackages(_this.userId);
            _this.message = "User package updated successfully !";
        }, function (error) { return _this.errorMessage = error; });
    };
    UserpackagesComponentComponent.prototype.selectAll = function () {
        for (var i = 0; i < this.packages.length; i++) {
            this.packages[i].linked = true;
        }
    };
    UserpackagesComponentComponent.prototype.deselectAll = function () {
        for (var i = 0; i < this.packages.length; i++) {
            this.packages[i].linked = false;
        }
    };
    return UserpackagesComponentComponent;
}());
UserpackagesComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userpackages-component',
        template: __webpack_require__(219),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_packages_service__["a" /* PackagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_packages_service__["a" /* PackagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], UserpackagesComponentComponent);

var _a, _b, _c;
//# sourceMappingURL=userpackages-component.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #0a264e;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n  .sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    display: block;\r\n    transition: 0.3s;\r\n    font-family:  Roboto, sans-serif;\r\n\r\n  }\r\n\r\n    .sidenav a:hover, .offcanvas a:focus {\r\n      color: #f1f1f1;\r\n    }\r\n\r\n  .sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n\r\n#mainDiv {\r\n  transition: margin-left .5s;\r\n  padding: 16px;\r\n}\r\n\r\n\r\n.navbar {\r\n  overflow: hidden;\r\n  background-color: #0a264e;\r\n  font-family: Roboto, sans-serif;\r\n  top: 0;\r\n  width: 88%;\r\n  margin-left: 250px;\r\n  height: 75px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.altai-admin-section {\r\n  padding: 10px 20px;\r\n}\r\n\r\n  .altai-admin-section .header {\r\n    padding: 0 10px;\r\n  }\r\n\r\n    .altai-admin-section .header h1 {\r\n      font-size: 20px;\r\n    }\r\n\r\n  .altai-admin-section .actions {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .altai-admin-section table {\r\n    margin: 20px 0 20px 0;\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    border-top: 4px solid #eee;\r\n    width: 100%;\r\n    background-color: #f3f3f3;\r\n  }\r\n\r\n    .altai-admin-section table select,\r\n    .altai-admin-section table textarea,\r\n    .altai-admin-section table input {\r\n      font-size: 100%;\r\n      border: 1px solid #f1f1f1;\r\n    }\r\n\r\n    .altai-admin-section table input {\r\n      padding: 5px;\r\n    }\r\n\r\n    .altai-admin-section table thead {\r\n      font-weight: bold;\r\n    }\r\n\r\n      .altai-admin-section table thead .checkbox {\r\n        width: 1%;\r\n      }\r\n\r\n  .altai-admin-section table td {\r\n    padding: 4px 10px 4px 10px;\r\n    text-align: left;\r\n    font-weight: 100;\r\n    font-size: small;\r\n  }\r\n\r\n    .altai-admin-section table th {\r\n      padding: 10px;\r\n      text-align: left;\r\n      font-weight: 100;\r\n      font-size: small;\r\n      font-style: italic;\r\n    }\r\n\r\n    .altai-admin-section table tr:nth-child(odd) {\r\n      background-color: #f3f3f3;\r\n    }\r\n\r\n    .altai-admin-section table tr.accompanyingperson {\r\n      font-style: italic;\r\n      color: #404040;\r\n    }\r\n\r\n      .altai-admin-section table tr.accompanyingperson:hover {\r\n        background-color: initial;\r\n      }\r\n\r\n    .altai-admin-section table tbody tr:hover {\r\n      background-color: #dbdbdb;\r\n    }\r\n\r\n    .altai-admin-section table .actioncell {\r\n      min-width: 80px;\r\n    }\r\n\r\n  .altai-admin-section form {\r\n    border: 0px solid #eee;\r\n    width: 100%;\r\n  }\r\n\r\n    .altai-admin-section form .form-row {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      padding: 10px;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n    }\r\n\r\n      .altai-admin-section form .form-row .label {\r\n        width: 200px;\r\n      }\r\n\r\n      .altai-admin-section form .form-row input {\r\n        padding: 5px;\r\n        min-width: 250px;\r\n      }\r\n\r\n      .altai-admin-section form .form-row:nth-child(even) {\r\n        background-color: #efefef;\r\n      }\r\n\r\n\r\n\r\nform {\r\n  padding: 10px 10px 10px 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.altai-form-no-padding {\r\n  padding: 0;\r\n}\r\n\r\n.altai-form .altai-simple-form {\r\n  background-color: #f3f3f3;\r\n  padding: 5px;\r\n  border-top: 4px solid #eee;\r\n}\r\n\r\n.altai-form .form-group,\r\n.altai-form .form-buttons,\r\n.altai-form h2 {\r\n  margin: 10px 5px 5px 5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n  .altai-form .form-buttons.mainbuttonrow {\r\n    margin-top: 10px;\r\n  }\r\n\r\n.altai-form h2 {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  padding: 10px 5px 10px 5px;\r\n}\r\n\r\n.altai-form .form-group .add-item,\r\n.altai-form .form-group .remove-item {\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  width: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border: 0;\r\n}\r\n\r\n.altai-form .form-group altai-content-item-update-inner {\r\n  width: 100%;\r\n}\r\n\r\n.altai-form .form-group .add-item {\r\n  background-color: #0068ff;\r\n}\r\n\r\n.altai-form .form-group .remove-item {\r\n  background-color: red;\r\n}\r\n\r\n.altai-form .form-group label {\r\n  display: block;\r\n  padding-top: 0;\r\n  color: #525252;\r\n  font-size: 12px;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 125px;\r\n          flex: 0 0 125px;\r\n}\r\n\r\n.altai-form .form-group input[type=text],\r\n.altai-form .form-group input[type=number],\r\n.altai-form .form-group .altai-date-input,\r\n.altai-form .form-group select {\r\n  padding: 7px;\r\n  width: 50%;\r\n  background-color: #fEFEFE;\r\n  border: 1px solid #e3e3e3;\r\n  border-left: 4px solid #e3e3e3;\r\n}\r\n\r\n.altai-form .form-group input[disabled] {\r\n  background-color: #F5f5f5;\r\n}\r\n\r\n.altai-form .form-group .altai-content-attribute-update-item.Text {\r\n  max-width: 100%;\r\n}\r\n\r\n.altai-form .form-group .altai-content-attribute-update-item {\r\n  margin-bottom: 10px;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-left: 10px;\r\n}\r\n\r\n  .altai-form .form-group .altai-content-attribute-update-item .altai-content-attribute-update-lang {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n    border-radius: 15px;\r\n    background-color: #e4e4e4;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .altai-form .form-group .altai-content-attribute-update-item .altai-content-attribute-update-tpl {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n\r\n.altai-form .altai-content-relation-update-item-wrapper {\r\n  background-color: #F9F9F9;\r\n}\r\n\r\n  .altai-form .altai-content-relation-update-item-wrapper .form-buttons {\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .altai-form .altai-content-relation-update-item-wrapper .remove-item {\r\n    margin-top: 10px;\r\n  }\r\n\r\n.altai-form .form-buttons {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.addText {\r\n  width: 684px;\r\n  padding: 5px;\r\n}\r\n\r\n.formPosition {\r\n  width: 80%;\r\n  margin-left: 10%;\r\n}\r\n\r\n.button {\r\n   background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  padding: 5px 15px;\r\n  display: inline-block;\r\n  margin: 5px 5px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.deleteButton {\r\n  background-color: red;\r\n  border: none;\r\n  color: white;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.manageButton {\r\n  background-color: darkslateblue;\r\n  border: none;\r\n  color: white;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 10px;\r\n}\r\n\r\n\r\n.authbox {\r\n  font-family: 'Roboto', sans-serif;\r\n  position: absolute;\r\n  width: 80%;\r\n  left: 260px;\r\n  margin-top: -60px;\r\n  background-color: #efefef;\r\n  padding: 20px;\r\n}\r\n\r\n  .authbox input,\r\n  .authbox select {\r\n    border-radius: 0px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .authbox img {\r\n    vertical-align: initial;\r\n  }\r\n\r\n  .authbox .btn-success {\r\n    background-color: #1DBFF0;\r\n    border-color: #1DBFF0;\r\n  }\r\n\r\n  .authbox .authbox-title {\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .authbox .authbox-subtitle {\r\n    font-size: 20px;\r\n    border-bottom: 1px solid #ccc;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.authbox-small {\r\n}\r\n\r\n.authbox-large {\r\n  margin-top: -250px;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  letter-spacing: 0.1em;\r\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n\n\n.altai-admin-section {\n  padding: 10px 20px;\n}\n\n  .altai-admin-section .header {\n    padding: 0 10px;\n  }\n\n    .altai-admin-section .header h1 {\n      font-size: 20px;\n    }\n\n  .altai-admin-section .actions {\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n\n  .altai-admin-section table {\n    margin: 20px 0 20px 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n    border-top: 4px solid #eee;\n    width: 100%;\n    background-color: #f3f3f3;\n  }\n\n    .altai-admin-section table select,\n    .altai-admin-section table textarea,\n    .altai-admin-section table input {\n      font-size: 100%;\n      border: 1px solid #f1f1f1;\n    }\n\n    .altai-admin-section table input {\n      padding: 5px;\n    }\n\n    .altai-admin-section table thead {\n      font-weight: bold;\n    }\n\n      .altai-admin-section table thead .checkbox {\n        width: 1%;\n      }\n\n  .altai-admin-section table td {\n    padding: 4px 10px 4px 10px;\n    text-align: left;\n    font-weight: 100;\n    font-size: small;\n  }\n\n  .altai-admin-section table th {\n    padding: 10px;\n    text-align: left;\n    font-weight: 100;\n    font-size: small;\n    font-style: italic;\n  }\n\n    .altai-admin-section table tr:nth-child(odd) {\n      background-color: #f3f3f3;\n    }\n\n    .altai-admin-section table tr.accompanyingperson {\n      font-style: italic;\n      color: #404040;\n    }\n\n      .altai-admin-section table tr.accompanyingperson:hover {\n        background-color: initial;\n      }\n\n    .altai-admin-section table tbody tr:hover {\n      background-color: #dbdbdb;\n    }\n\n    .altai-admin-section table .actioncell {\n      min-width: 80px;\n    }\n\n  .altai-admin-section form {\n    border: 0px solid #eee;\n    width: 100%;\n  }\n\n    .altai-admin-section form .form-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 10px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n    }\n\n      .altai-admin-section form .form-row .label {\n        width: 200px;\n      }\n\n      .altai-admin-section form .form-row input {\n        padding: 5px;\n        min-width: 250px;\n      }\n\n      .altai-admin-section form .form-row:nth-child(even) {\n        background-color: #efefef;\n      }\n\n\n\n form { \n  padding: 10px 10px 10px 10px;\n  font-size: 14px;\n}\n\n .altai-form-no-padding {\n  padding: 0;\n}\n\n .altai-form .altai-simple-form {\n  background-color: #f3f3f3;\n  padding: 5px;\n  border-top: 4px solid #eee;\n}\n\n .altai-form .form-group,\n .altai-form .form-buttons,\n .altai-form h2 {\n  margin: 10px 5px 5px 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n   .altai-form .form-buttons.mainbuttonrow {\n    margin-top: 10px;\n  }\n\n .altai-form h2 {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n  padding: 10px 5px 10px 5px;\n}\n\n .altai-form .form-group .add-item,\n .altai-form .form-group .remove-item {\n  color: #fff;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0;\n}\n\n .altai-form .form-group altai-content-item-update-inner {\n  width: 100%;\n}\n\n .altai-form .form-group .add-item {\n  background-color: #0068ff;\n}\n\n .altai-form .form-group .remove-item {\n  background-color: red;\n}\n\n.altai-form .form-group label {\n  display: block;  \n  padding-top: 0;\n  color: #525252;\n  font-size: 12px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 125px;\n          flex: 0 0 125px;\n}\n\n .altai-form .form-group input[type=text],\n .altai-form .form-group input[type=number],\n .altai-form .form-group .altai-date-input,\n .altai-form .form-group select {\n  padding: 7px; \n  width: 50%;\n  background-color: #fEFEFE;\n  border: 1px solid #e3e3e3;\n  border-left: 4px solid #e3e3e3;\n}\n\n .altai-form .form-group input[disabled] {\n  background-color: #F5f5f5;\n}\n\n .altai-form .form-group .altai-content-attribute-update-item.Text {\n  max-width: 100%;\n}\n\n .altai-form .form-group .altai-content-attribute-update-item {\n  margin-bottom: 10px;  \n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n}\n\n   .altai-form .form-group .altai-content-attribute-update-item .altai-content-attribute-update-lang {\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    border-radius: 15px;\n    background-color: #e4e4e4;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    text-transform: uppercase;\n    font-size: 12px;\n  }\n\n   .altai-form .form-group .altai-content-attribute-update-item .altai-content-attribute-update-tpl {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n\n .altai-form .altai-content-relation-update-item-wrapper {\n  background-color: #F9F9F9;\n}\n\n   .altai-form .altai-content-relation-update-item-wrapper .form-buttons {\n    margin: 0;\n    margin-bottom: 10px;\n  }\n\n   .altai-form .altai-content-relation-update-item-wrapper .remove-item {\n    margin-top: 10px;\n  }\n\n .altai-form .form-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n \n}\n\n.addText {\n  width: 684px;\n  padding: 5px;\n}\n\n.formPosition {\n  width: 80%;\n  margin-left: 10%;\n}\n\n.button {\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 5px 15px;\n  display: inline-block;\n  margin: 5px 5px;\n  letter-spacing: 1px;\n}\n\n.deleteButton {\n  background-color: red;\n  border: none;\n  color: white;\n  padding: 5px 16px;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 10px;\n}\n\n.manageButton {\n  background-color: darkslateblue;\n  border: none;\n  color: white;\n  padding: 5px 16px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  font-size: 10px;\n}\n\n\n.authbox {\n  font-family: 'Roboto', sans-serif;\n  position: absolute;\n  width: 80%;\n  left: 260px;\n  margin-top: -60px;\n  background-color: #efefef;\n  padding: 20px;\n}\n\n  .authbox input,\n  .authbox select {\n    border-radius: 0px;\n    font-size: 14px;\n  }\n\n  .authbox img {\n    vertical-align: initial;\n  }\n\n  .authbox .btn-success {\n    background-color: #1DBFF0;\n    border-color: #1DBFF0;\n  }\n\n  .authbox .authbox-title {\n    font-size: 20px;\n    margin-bottom: 20px;\n  }\n\n  .authbox .authbox-subtitle {\n    font-size: 20px;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 20px;\n  }\n\n.authbox-small {\n  \n}\n\n.authbox-large {\n  margin-top: -250px;\n}\n\n.page-header h2 {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".main {\r\n  width: 500px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  border: 2px solid #d7d7d7;\r\n  border-bottom: 0px;\r\n  margin-top: 20px;\r\n  font-family: sans-serif;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  background-color: #5c8297;\r\n  padding: 30px 0px;\r\n  margin-top: 0px;\r\n  color: white;\r\n}\r\n\r\n.addItem {\r\n  position: relative;\r\n  padding-bottom: 0px;\r\n  height: 30px;\r\n}\r\n\r\n\r\n\r\n  .addItem button {\r\n    width: 50px;\r\n    height: 45px;\r\n    padding: 5px;\r\n  }\r\n\r\nul {\r\n  list-style: none;\r\n  font-size: 20px;\r\n  color: #686868;\r\n  margin-left: -40px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\nli {\r\n  border-bottom: 1px solid #bfbfbf;\r\n  background-color: #d7d7d7;\r\n  padding: 10px 0px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nspan {\r\n  cursor: pointer;\r\n  position: relative;\r\n  float: right;\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.altai-admin-section {\r\n  padding: 10px 20px;\r\n}\r\n\r\n  .altai-admin-section .header {\r\n    padding: 0 10px;\r\n  }\r\n\r\n    .altai-admin-section .header h1 {\r\n      font-size: 20px;\r\n    }\r\n\r\n  .altai-admin-section .actions {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .altai-admin-section table {\r\n    margin: 20px 0 20px 0;\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    border-top: 4px solid #eee;\r\n    width: 100%;\r\n    background-color: #f3f3f3;\r\n  }\r\n\r\n    .altai-admin-section table select,\r\n    .altai-admin-section table textarea,\r\n    .altai-admin-section table input {\r\n      font-size: 100%;\r\n      border: 1px solid #f1f1f1;\r\n    }\r\n\r\n    .altai-admin-section table input {\r\n      padding: 5px;\r\n    }\r\n\r\n    .altai-admin-section table thead {\r\n      font-weight: bold;\r\n    }\r\n\r\n      .altai-admin-section table thead .checkbox {\r\n        width: 1%;\r\n      }\r\n\r\n  .altai-admin-section table td {\r\n    padding: 4px 10px 4px 10px;\r\n    text-align: left;\r\n    font-weight: 100;\r\n    font-size: small;\r\n  }\r\n\r\n  .altai-admin-section table th {\r\n    padding: 10px;\r\n    text-align: left;\r\n    font-weight: 100;\r\n    font-size: small;\r\n    font-style: italic;\r\n  }\r\n\r\n    .altai-admin-section table tr:nth-child(odd) {\r\n      background-color: #f3f3f3;\r\n    }\r\n\r\n    .altai-admin-section table tr.accompanyingperson {\r\n      font-style: italic;\r\n      color: #404040;\r\n    }\r\n\r\n      .altai-admin-section table tr.accompanyingperson:hover {\r\n        background-color: initial;\r\n      }\r\n\r\n    .altai-admin-section table tbody tr:hover {\r\n      background-color: #dbdbdb;\r\n    }\r\n\r\n    .altai-admin-section table .actioncell {\r\n      min-width: 80px;\r\n    }\r\n\r\n  .altai-admin-section form {\r\n    border: 0px solid #eee;\r\n    width: 100%;\r\n  }\r\n\r\n    .altai-admin-section form .form-row {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      padding: 10px;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n    }\r\n\r\n      .altai-admin-section form .form-row .label {\r\n        width: 200px;\r\n      }\r\n\r\n      .altai-admin-section form .form-row input {\r\n        padding: 5px;\r\n        min-width: 250px;\r\n      }\r\n\r\n      .altai-admin-section form .form-row:nth-child(even) {\r\n        background-color: #efefef;\r\n      }\r\n\r\n\r\n\r\nform {\r\n  padding: 10px 10px 10px 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.altai-form-no-padding {\r\n  padding: 0;\r\n}\r\n\r\n.altai-form .altai-simple-form {\r\n  background-color: #f3f3f3;\r\n  padding: 5px;\r\n  border-top: 4px solid #eee;\r\n}\r\n\r\n.altai-form .form-group,\r\n.altai-form .form-buttons,\r\n.altai-form h2 {\r\n  margin: 10px 5px 5px 5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n  .altai-form .form-buttons.mainbuttonrow {\r\n    margin-top: 10px;\r\n  }\r\n\r\n.altai-form h2 {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  padding: 10px 5px 10px 5px;\r\n}\r\n\r\n.altai-form .form-group .add-item,\r\n.altai-form .form-group .remove-item {\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  width: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border: 0;\r\n}\r\n\r\n.altai-form .form-group altai-content-item-update-inner {\r\n  width: 100%;\r\n}\r\n\r\n.altai-form .form-group .add-item {\r\n  background-color: #0068ff;\r\n}\r\n\r\n.altai-form .form-group .remove-item {\r\n  background-color: red;\r\n}\r\n\r\n.altai-form .form-group label {\r\n  display: block;\r\n  padding-top: 0;\r\n  color: #525252;\r\n  font-size: 12px;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 125px;\r\n          flex: 0 0 125px;\r\n}\r\n\r\n.altai-form .form-group input[type=text],\r\n.altai-form .form-group input[type=number],\r\n.altai-form .form-group .altai-date-input,\r\n.altai-form .form-group select {\r\n  padding: 7px;\r\n  width: 50%;\r\n  background-color: #fEFEFE;\r\n  border: 1px solid #e3e3e3;\r\n  border-left: 4px solid #e3e3e3;\r\n}\r\n\r\n.altai-form .form-group input[disabled] {\r\n  background-color: #F5f5f5;\r\n}\r\n\r\n.altai-form .form-group .altai-content-attribute-update-item.Text {\r\n  max-width: 100%;\r\n}\r\n\r\n.altai-form .form-group .altai-content-attribute-update-item {\r\n  margin-bottom: 10px;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-left: 10px;\r\n}\r\n\r\n  .altai-form .form-group .altai-content-attribute-update-item .altai-content-attribute-update-lang {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n    border-radius: 15px;\r\n    background-color: #e4e4e4;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .altai-form .form-group .altai-content-attribute-update-item .altai-content-attribute-update-tpl {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n\r\n.altai-form .altai-content-relation-update-item-wrapper {\r\n  background-color: #F9F9F9;\r\n}\r\n\r\n  .altai-form .altai-content-relation-update-item-wrapper .form-buttons {\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .altai-form .altai-content-relation-update-item-wrapper .remove-item {\r\n    margin-top: 10px;\r\n  }\r\n\r\n.altai-form .form-buttons {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.addText {\r\n  width: 684px;\r\n  padding: 5px;\r\n}\r\n\r\n.formPosition {\r\n  width: 80%;\r\n  margin-left: 10%;\r\n}\r\n\r\n.button {\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  padding: 5px 15px;\r\n  display: inline-block;\r\n  margin: 5px 5px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.deleteButton {\r\n  background-color: red;\r\n  border: none;\r\n  color: white;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.manageButton {\r\n  background-color: darkslateblue;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 10px;\r\n}\r\n\r\n\r\n.authbox {\r\n  font-family: 'Roboto', sans-serif;\r\n  position: absolute;\r\n  width: 80%;\r\n  left: 260px;\r\n  margin-top: -60px;\r\n  background-color: #efefef;\r\n  padding: 20px;\r\n}\r\n\r\n  .authbox input,\r\n  .authbox select {\r\n    border-radius: 0px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .authbox img {\r\n    vertical-align: initial;\r\n  }\r\n\r\n  .authbox .btn-success {\r\n    background-color: #1DBFF0;\r\n    border-color: #1DBFF0;\r\n  }\r\n\r\n  .authbox .authbox-title {\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .authbox .authbox-subtitle {\r\n    font-size: 20px;\r\n    border-bottom: 1px solid #ccc;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.authbox-small {\r\n}\r\n\r\n.authbox-large {\r\n  margin-top: -250px;\r\n}\r\n\r\n.successMsg {\r\n \r\n  text-align: right;\r\n\r\n  color: green;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <a routerLink=\"/\">Home</a>\r\n  <a routerLink=\"/user\">Users</a>\r\n  <a routerLink=\"/package\">Packages</a>\r\n</div>\r\n\r\n<div id=\"navDiv\" class=\"navbar\">\r\n  <div style=\"text-align: center;color:white\"><h1>Nuget Package Manager</h1></div>a>\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n<div id=\"mainDiv\">\r\n \r\n  <span style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\" >&#9776; Menu</span>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"authbox authbox-small\">\r\n\r\n  <form role=\"form\" class=\"altai-form\" name=\"userForm\" novalidate>\r\n    <div class=\"page-header\">\r\n      <h2>Add New Package</h2>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input [(ngModel)]=\"package.name\" name=\"name\" class=\"addText\" type=\"text\" placeholder=\"Name\" />\r\n    </div>\r\n    \r\n    <button (click)=\"addPackage()\" class=\"button\">Add</button>\r\n  </form>\r\n\r\n  <div class=\"altai-admin-section\">\r\n    <div class=\"page-header\">\r\n      <h2>Packages</h2>\r\n    </div>\r\n\r\n    <table>\r\n\r\n      <thead>\r\n        <tr>\r\n          <th>Package name</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let package of packages; let ind = index\">\r\n          <td style=\"width:20%;\">{{package.name}}</td>\r\n          <td>\r\n            <button (click)=\"removePackage(ind)\" class=\"deleteButton\">Delete</button>\r\n           \r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"authbox authbox-small\">\r\n\r\n  <form role=\"form\" class=\"altai-form\" name=\"userForm\" novalidate>\r\n    <div class=\"page-header\">\r\n      <h2>Add New User</h2>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>User name</label>\r\n      <input [(ngModel)]=\"user.userName\" name=\"userName\" class=\"addText\" type=\"text\" placeholder=\"User name\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input [(ngModel)]=\"user.password\" name=\"password\" class=\"addText\" type=\"password\" placeholder=\"Password\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>First name</label>\r\n      <input [(ngModel)]=\"user.firstName\" name=\"firstName\" class=\"addText\" type=\"text\" placeholder=\"First name\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Last name</label>\r\n      <input [(ngModel)]=\"user.lastName\" name=\"lastName\" class=\"addText\" type=\"text\" placeholder=\"Last name\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>DOB</label>\r\n      <input [(ngModel)]=\"user.dateOfBirth\" name=\"dateOfBirth\" class=\"addText\" type=\"date\" placeholder=\"DOB\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Address</label>\r\n      <input [(ngModel)]=\"user.streetAndNumber\" name=\"streetAndNumber\" class=\"addText\" type=\"text\" placeholder=\"Address\" />\r\n    </div>\r\n    <button (click)=\"addUser()\" class=\"button\">Add</button>\r\n  </form>\r\n\r\n  <div class=\"altai-admin-section\">\r\n    <div class=\"page-header\">\r\n      <h2>Users</h2>\r\n    </div>\r\n\r\n    <table>\r\n\r\n      <thead>\r\n        <tr>\r\n          <th>User name</th>\r\n          <th>First name</th>\r\n          <th>Last name</th>\r\n          <th>DOB</th>\r\n          <th>Address</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let user of users; let ind = index\">\r\n          <td>{{user.userName}}</td>\r\n\r\n          <td>{{user.firstName}}</td>\r\n\r\n          <td>{{user.lastName}}</td>\r\n\r\n          <td>{{user.dateOfBirth}}</td>\r\n\r\n          <td>{{user.streetAndNumber}}</td>\r\n\r\n          <td>\r\n            <button (click)=\"removeUser(ind)\" class=\"deleteButton\">Delete</button>           \r\n            <button type=\"button\" class=\"manageButton\" (click)=\"managePackages(user);\">Manage Packages</button>\r\n\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n\r\n\r\n\r\n  </div>\r\n\n  </div>\n<!--<a routerLink=\"/package\">Packages</a>-->\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"authbox authbox-small\">\r\n\r\n\r\n\r\n  <div class=\"altai-admin-section\">\r\n    <div class=\"page-header\">\r\n      <h2>Packages</h2>\r\n    </div>\r\n\r\n    <button (click)=\"update()\" class=\"button\">Update</button>\r\n\r\n    <div *ngIf=\"message\" class=\"successMsg\" >{{message}}</div>\r\n\r\n    <table>\r\n\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width:2%\">Linked</th>\r\n          <th >Package name</th>\r\n          \r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let package of packages; let ind = index\">\r\n          <td style=\"width:2%\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"package.linked\" name=\"linked\">\r\n\r\n          </td>\r\n          <td>{{package.name}}</td>\r\n          \r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n\r\n  \r\n    <button (click)=\"selectAll()\" class=\"manageButton\">Select All</button>\r\n    <button (click)=\"deselectAll()\" class=\"deleteButton\">Deselect All</button>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PackagesService = (function () {
    function PackagesService(http) {
        this.http = http;
        this.url = "api/package";
    }
    PackagesService.prototype.getUserPackagesWithPromise = function (userId) {
        return this.http.get(this.url + '/' + userId).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    PackagesService.prototype.getPackagesWithPromise = function () {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    PackagesService.prototype.addPackageWithPromise = function (newpackage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, newpackage, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    PackagesService.prototype.deletePackageWithPromise = function (id) {
        return this.http.delete(this.url + '/' + id).toPromise()
            .then(function () { })
            .catch(this.handleErrorPromise);
    };
    PackagesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    PackagesService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return PackagesService;
}());
PackagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PackagesService);

var _a;
//# sourceMappingURL=packages.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.url = "api/user";
    }
    UsersService.prototype.getUsersWithPromise = function () {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    UsersService.prototype.updateUserPackageWithPromise = function (userId, packages) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "?userId=" + userId, packages).toPromise()
            .then(function () { })
            .catch(this.handleErrorPromise);
    };
    UsersService.prototype.addUserWithPromise = function (newuser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, newuser, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    UsersService.prototype.deleteUserWithPromise = function (id) {
        return this.http.delete(this.url + '/' + id).toPromise()
            .then(function () { })
            .catch(this.handleErrorPromise);
    };
    UsersService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UsersService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ })

},[486]);
//# sourceMappingURL=main.bundle.js.map