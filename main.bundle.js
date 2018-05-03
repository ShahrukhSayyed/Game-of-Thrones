webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    -webkit-box-shadow: 0 4px 8px 0 lightblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 lightblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark sticky-top\">\n  <a class=\"navbar-brand\" href=\"#\">Game of Thrones</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"http://bronlea.com/wp-content/uploads/2017/10/2742670-game.jpg\" alt=\"First slide\" style=\"max-height: 90vh;\">\n    </div>\n    <div class=\"carousel-item\" >\n      <img class=\"d-block w-100\" src=\"https://static1.squarespace.com/static/52fc05c9e4b08fc45bd99090/t/59ea499c29f187aadd0d2847/1508526501384/102017-conquest-fightforbanner-1024x576.jpg\"\n        alt=\"Second slide\" style=\"max-height: 90vh;\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"http://wikiofthrones.com/static/uploads/2016/12/Game-of-Thrones-season-7-fan-posters-16.jpg\"\n        alt=\"Third slide\" style=\"max-height: 90vh;\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<br>\n\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <ng4-loading-spinner ></ng4-loading-spinner>\n\n</div>\n\n\n\n<!--Footer-->\n<footer class=\"page-footer font-small blue pt-4 mt-4\">\n\n  <!--Copyright-->\n  <div class=\"footer py-3 text-center\">\n      © 2018 Copyright <span style=\"font-weight: bold;\"> Shahrukh Sayyed </span>\n  </div>\n  \n\n</footer>\n<!--/.Footer-->\n                    "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Game of Thrones';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_view_single_view_component__ = __webpack_require__("./src/app/single-view/single-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__retrive_data_service__ = __webpack_require__("./src/app/retrive-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_data_pipe__ = __webpack_require__("./src/app/filter-data.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_data_pipe__ = __webpack_require__("./src/app/order-data.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Added for Router










//Add in facilities


//Added for toast message



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__single_view_single_view_component__["a" /* SingleViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__filter_data_pipe__["a" /* FilterDataPipe */],
                __WEBPACK_IMPORTED_MODULE_10__order_data_pipe__["a" /* OrderDataPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng4_loading_spinner__["Ng4LoadingSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'got/:entityName/:compId', component: __WEBPACK_IMPORTED_MODULE_5__single_view_single_view_component__["a" /* SingleViewComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__retrive_data_service__["a" /* RetriveDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter-data.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDataPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterDataPipe = /** @class */ (function () {
    function FilterDataPipe() {
    }
    FilterDataPipe.prototype.transform = function (array, args) {
        console.log("In FilterDataPipe");
        if (!array || !args) {
            return array;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        this.newArray = array.filter(function (val) {
            var nameInArray = val['name'].toLowerCase();
            var argsPassed = args.toLowerCase();
            return nameInArray.search(argsPassed) > -1;
        });
        return this.newArray;
    };
    FilterDataPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterData',
            pure: false
        })
    ], FilterDataPipe);
    return FilterDataPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".icons {\r\n    color:#4ABDAC;\r\n}\r\n\r\n.house{\r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.book{    \r\n    -webkit-box-shadow: 0 4px 8px 0 darkred, 0 6px 20px 0 rgba(0, 0, 0, 0.19);    \r\n            box-shadow: 0 4px 8px 0 darkred, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.character{\r\n    -webkit-box-shadow: 0 4px 8px 0 darkgreen, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 darkgreen, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.cardBorder{\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.padding{\r\n    padding: 1.5em;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container cardBorder padding\">\n\n  <div class=\"row\">\n    <h5>Filters...</h5>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-group col-sm-12 col-md-4 \">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon2\">\n          <i class=\"fas fa-search\"></i>\n        </span>\n      </div>\n      <input type=\"text\" name=\"nameValue\" [(ngModel)]=\"nameValue\" class=\"form-control\" placeholder=\"Name\" aria-label=\"Name\" aria-describedby=\"basic-addon2\">\n    </div>\n    <br>\n    <div class=\"input-group col-sm-12 col-md-4\">\n      <div class=\"input-group-prepend\" style=\"margin-right: 0.2vw;\">\n        <label class=\"input-group-text\" for=\"sort\">Sort By</label>\n      </div>\n      <button class=\"btn btn-md btn-info active\" (click)=\"setOrder('name')\">\n        <i class=\"fas fa-sort-alpha-down\" [hidden]=\"!reverse\"> Ascending</i>\n        <i class=\"fas fa-sort-alpha-up\" [hidden]=\"reverse\"> Descending</i>\n      </button>\n    </div>\n    <br>\n    <div class=\"input-group col-sm-12 col-md-4\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\" for=\"category\">Category</label>\n      </div>\n      <select class=\"custom-select\" id=\"category\" [(ngModel)]=\"categoryValue\" name=\"categoryValue\">\n        <option value=\"All\" ng-selected=\"All\">All</option>\n        <option value=\"books\">Books</option>\n        <option value=\"houses\">Houses</option>\n        <option value=\"characters\">Characters</option>\n      </select>\n    </div>\n  </div>\n</div>\n<br>\n\n<div class=\"alert alert-warning\">\n  <strong>Warning!</strong> In character card if name is not found then Aliases are displayed. Data is sorted according to name.\n</div>\n\n<div class=\"row\">\n  <div *ngFor=\"let item of final | orderBy: order:reverse:'case-sensitive' | orderData: categoryValue | filterData:nameValue\"\n    class=\"col-sm-12 col-md-4\">\n\n    <div *ngIf=\"item.url\">\n      <div *ngIf=\"item.url.search('books')>-1\" class=\"card book\" id=\"bookDetails\">\n        <div class=\"card-header text-center\">\n          <img src=\"assets/book.jpg\" alt=\"Norway\" style=\"width:100%; max-height:29vh\" class=\"fluid-image\"> Book\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{item.name }}</h5>\n          <p class=\"card-text text-muted\">{{item.authors}}\n            <br> {{item.mediaType}}\n          </p>\n          <a [routerLink]=\"['/got','books',getId(item.url)]\" class=\"btn btn-info\">Quick Look</a>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"item.url.search('characters')>-1\" class=\"card character\" id=\"charDetails\">\n\n        <div class=\"card-header text-center\">\n          <img src=\"assets/{{item.gender}}.png\" alt=\"Norway\" style=\"width:100%; max-height:29vh\" class=\"fluid-image\"> Character\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{item.name || item.aliases}}</h5>\n          <p class=\"card-text text-muted\">{{item.gender}}\n            <br>\n            <span>{{item.culture || 'No Culture'}}</span>\n          </p>\n          <a [routerLink]=\"['/got','characters',getId(item.url)]\" class=\"btn btn-info\">Quick Look</a>\n        </div>\n      </div>\n\n      <div *ngIf=\"item.url.search('houses')>-1\" class=\"card house\" id=\"houseDetails\">\n        <div class=\"card-header text-center\">\n          <img src=\"assets/house.jpg\" alt=\"Norway\" style=\"width:100%; max-height:40vh\" class=\"fluid-image\"> House\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{item.name}}</h5>\n          <p class=\"card-text text-muted\">{{item.region}}</p>\n          <blockquote class=\"blockquote text-muted\" style=\"border-left: solid 5px #4ABDAC\">\n            <p class=\"mb-0\">{{item.words || 'No qoute'}}</p>\n          </blockquote>\n\n          <a [routerLink]=\"['/got','houses',getId(item.url)]\" class=\"btn btn-info\">Quick Look</a>\n        </div>\n      </div>\n      <br>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__retrive_data_service__ = __webpack_require__("./src/app/retrive-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Own pipe to order the data by [Books/characters/houses]

//From NPM modules

//Added for Toast message

//imported the Http component to retrive the data
var HomeComponent = /** @class */ (function () {
    function HomeComponent(RetriveDataService, orderPipe, spinnerService, toastr) {
        this.RetriveDataService = RetriveDataService;
        this.orderPipe = orderPipe;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.allData = [];
        this.order = 'item.name';
        this.reverse = false;
        //for getting id of categories like character,house,books
        this.getId = function (a) {
            var pos = a.lastIndexOf('/');
            var id = a.substr(pos + 1);
            return id;
        }; //end
        console.log("Home Component Constructor called...");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home Component ngOnInit called...");
        this.spinnerService.show();
        this.books = this.RetriveDataService.getBooks().subscribe(//this is getting book data
        function (//this is getting book data
            data) {
            setTimeout(function () {
                _this.books = data;
                //console.log('books');
                //console.log(this.books);
                _this.allData.push(_this.books);
                _this.final = [].concat.apply([], _this.allData);
                console.log('Final after adding Books');
                console.log(_this.final);
                _this.spinnerService.hide();
            }, 2000);
        }, function (error) {
            console.log(error.errorMessage);
        });
        this.houses = this.RetriveDataService.getHouses().subscribe(//this is getting book data
        function (//this is getting book data
            data) {
            setTimeout(function () {
                _this.houses = data;
                //console.log('Houses');
                //console.log(this.houses);
                _this.allData.push(_this.houses);
                _this.final = [].concat.apply([], _this.allData);
                console.log('Final after adding Houses');
                console.log(_this.final);
                _this.spinnerService.hide();
            }, 2000);
        }, function (error) {
            console.log(error.errorMessage);
        });
        this.characters = this.RetriveDataService.getCharacters().subscribe(//this is getting book data
        function (//this is getting book data
            data) {
            setTimeout(function () {
                _this.characters = data;
                //console.log('Characters');
                //console.log(this.characters);
                _this.allData.push(_this.characters);
                _this.final = [].concat.apply([], _this.allData);
                console.log('Final after adding Characters');
                console.log(_this.final);
                _this.spinnerService.hide();
            }, 2000);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    HomeComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
            this.showSuccess(this.reverse);
        }
        this.order = value;
    };
    HomeComponent.prototype.showSuccess = function (value) {
        if (value == true) {
            this.toastr.success('In a descending way !', 'Data Sorted !');
        }
        else {
            this.toastr.success('In a Ascending way!', 'Data Sorted !');
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__retrive_data_service__["a" /* RetriveDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__retrive_data_service__["a" /* RetriveDataService */], __WEBPACK_IMPORTED_MODULE_2_ngx_order_pipe__["b" /* OrderPipe */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Page Not Found !</h2>\n<a [routerLink]=\"['/home']\">Go Back to Home Page</a>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Added for Toast message

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(toastr) {
        this.toastr = toastr;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.showError();
    };
    NotFoundComponent.prototype.showError = function () {
        this.toastr.error('Go back to home page !', 'Page Not Found !');
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/order-data.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDataPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderDataPipe = /** @class */ (function () {
    function OrderDataPipe() {
    }
    /**
   * Perform the Ordering based on input.
   *
   * @param {Array<Object>} array The array of objects to compare to the filter.
   * @param {string[books/houses/characters]} args The filter to apply.
   * @return {Array<object>} newArray if array of objects satisfies filters, null if not.
   */
    OrderDataPipe.prototype.transform = function (array, args) {
        console.log("In orderDataPipe");
        if (!array || !args) {
            return array;
        }
        //console.log(args)
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (args == undefined) {
            return array;
        }
        else if (args == "All") {
            return array;
        }
        else {
            this.newArray = array.filter(function (val) {
                var urlInArray = val['url'].toLowerCase();
                var argsPassed = args.toLowerCase();
                return urlInArray.search(argsPassed) > -1;
            });
        }
        //console.log(this.newArray);
        return this.newArray;
    };
    OrderDataPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderData'
        })
    ], OrderDataPipe);
    return OrderDataPipe;
}());



/***/ }),

/***/ "./src/app/retrive-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetriveDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Added for Http and Observables




var RetriveDataService = /** @class */ (function () {
    function RetriveDataService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = "https://anapioficeandfire.com/api/";
        //method to get all books
        this.getBooks = function () {
            var response = _this._http.get(_this.baseUrl + "/books/");
            return response;
        };
        //method to get all houses
        this.getHouses = function () {
            var response = _this._http.get(_this.baseUrl + "/houses/");
            return response;
        };
        //method to get all characters
        this.getCharacters = function () {
            var response = _this._http.get(_this.baseUrl + "/characters/");
            return response;
        };
        //method to get specific category for single page view
        this.getSingleItem = function (entityName, id) {
            var response = _this._http.get(_this.baseUrl + "/" + entityName + "/" + id);
            return response;
        };
        console.log("RetriveDataService is called");
    }
    //method to handle http calls
    RetriveDataService.prototype.handleError = function (err) {
        console.log("Handle error HTTP calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    RetriveDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RetriveDataService);
    return RetriveDataService;
}());



/***/ }),

/***/ "./src/app/single-view/single-view.component.css":
/***/ (function(module, exports) {

module.exports = ".icons {\r\n    color:#4ABDAC;\r\n}\r\n\r\n.house{\r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.book{    \r\n    -webkit-box-shadow: 0 4px 8px 0 darkred, 0 6px 20px 0 rgba(0, 0, 0, 0.19);    \r\n            box-shadow: 0 4px 8px 0 darkred, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.character{\r\n    -webkit-box-shadow: 0 4px 8px 0 darkgreen, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 darkgreen, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.cardBorder{\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\np{\r\n    color:darkviolet;    \r\n    font-weight: bold;\r\n}\r\n\r\nspan{\r\n    color: dodgerblue;\r\n    font-style: italic;\r\n}\r\n\r\nh5{\r\n    color:#4ABDAC;    \r\n}"

/***/ }),

/***/ "./src/app/single-view/single-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"goBack()\"><i class=\"fas fa-arrow-circle-left\"></i></button>\n</div>\n<br>\n\n<div class=\"row\" *ngIf=\"singleItem.url\">\n  <div *ngIf=\"singleItem.url.search('books')>-1\" class=\"card col-md-12 cardBorder\">\n    <div class=\"card-header book \">\n      Book\n    </div>\n    <br>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-2 text-center\">\n        <img src=\"assets/book.jpg\" alt=\"Norway\" style=\"width:100%; height:auto\" class=\"fluid-image\"> Book\n      </div>\n\n      <div class=\"col-sm-12 col-md-10\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleItem.name}}\n            <span class=\"text-muted\">{{singleItem.mediaType}} </span>\n            <span class=\"text-muted\"> {{singleItem.released | date}} </span>\n          </h5>\n          <p class=\"card-text\"> by\n            <span class=\"text-primary\"> {{singleItem.authors}} </span>\n          </p>\n\n          <div id=\"accordion\">\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  See Information\n                </button>\n              </div>\n\n              <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                  <h5> All Book Information</h5>\n                  <p>{{singleItem.mediaType}} :\n                    <span>{{singleItem.numberOfPages}} pages </span>\n                  </p>\n                  <p> Publisher :\n                    <span>{{singleItem.publisher}}; {{singleItem.released | date}}</span>\n                  </p>\n                  <p>Language :\n                    <span>English</span>\n                  </p>\n                  <p>Country :\n                    <span>{{singleItem.country}}</span>\n                  </p>\n                  <p>ISBN-13 :\n                    <span>{{singleItem.isbn}}</span>\n                  </p>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\" id=\"headingTwo\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  See Characters\n                </button>\n              </div>\n              <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                <div class=\"card-body\" style=\"overflow-y:scroll;height: 80px;\">\n                  <h5>All Characters in the book</h5>\n\n                  <div *ngFor=\"let character of singleItem.characters\">\n                    <a [routerLink]=\"['/got','characters',getId(character)]\" class=\"btn btn-link\">{{character}}</a>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\" id=\"headingThree\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                  See POV Characters\n                </button>\n              </div>\n              <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                <div class=\"card-body\" style=\"overflow-y:scroll;height: 80px;\">\n                  <h5> All POV Characters in the book</h5>\n\n                  <p *ngIf=\"singleItem.povCharacters.length < 0\">No POV Characters</p>\n                  <div *ngFor=\"let character of singleItem.povCharacters\">\n                    <a [routerLink]=\"['/got','characters',getId(character)]\" class=\"btn btn-link\">{{character}}</a>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"singleItem.url.search('houses')>-1\" class=\"card col-md-12 cardBorder\">\n    <div class=\"card-header house\">\n      House\n    </div>\n    <br>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-2 text-center\">\n        <img src=\"assets/house.jpg\" alt=\"Norway\" style=\"width:100%; height:auto\" class=\"fluid-image\"> House\n      </div>\n\n      <div class=\"col-sm-12 col-md-10\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleItem.name}} -\n            <span class=\"text-muted\"> {{singleItem.region}} </span>\n          </h5>\n          <blockquote class=\"blockquote\" style=\"border-left: solid 5px #4ABDAC\">\n            <p class=\"mb-0\">{{singleItem.words}}</p>\n          </blockquote>\n\n          <div id=\"accordion\">\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  See Information\n                </button>\n              </div>\n\n              <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                  <h5> All House Information</h5>\n                  <p *ngIf=\"singleItem.coatOfArms != ''\"> Coat Of Arms :\n                    <span>{{singleItem.coatOfArms}}</span>\n                  </p>\n                  <p *ngIf=\"singleItem.currentLord != ''\"> Current Lord :\n                    <span>\n                      <a [routerLink]=\"['/got','characters',getId(singleItem.currentLord)]\" class=\"btn btn-link\">Character : {{getId(singleItem.currentLord)}}</a>\n                    </span>\n                  </p>\n                  <p *ngIf=\"singleItem.heir != ''\"> Heir :\n                    <span>\n                      <a [routerLink]=\"['/got','characters',getId(singleItem.heir)]\" class=\"btn btn-link\">Character : {{getId(singleItem.heir)}}</a>\n                    </span>\n                  </p>\n                  <p *ngIf=\"singleItem.overlord != ''\"> Overlord :\n                    <span>\n                      <a [routerLink]=\"['/got','houses',getId(singleItem.overlord)]\" class=\"btn btn-link\">House : {{getId(singleItem.overlord)}}</a>\n                    </span>\n                  </p>\n                  <p *ngIf=\"singleItem.founder != ''\"> Founder :\n                    <span>\n                      <a [routerLink]=\"['/got','characters',getId(singleItem.founder)]\" class=\"btn btn-link\">Character : {{getId(singleItem.founder)}}</a>\n                    </span>\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\" id=\"headingTwo\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  See Sworn Members\n                </button>\n              </div>\n              <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                <div class=\"card-body\" style=\"overflow-y:scroll;height: 80px;\">\n                  <h5>All Sworn Members </h5>\n                  <div *ngFor=\"let member of singleItem.swornMembers\">\n                    <a [routerLink]=\"['/got','characters',getId(member)]\" class=\"btn btn-link\">{{member}}</a>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\" id=\"headingThree\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                  See Titles and Seats\n                </button>\n              </div>\n              <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                <div class=\"card-body\" style=\"overflow-y:scroll;height: 80px;\">\n                  <h5> All Titles </h5>\n\n                  <div *ngFor=\"let title of singleItem.titles\">\n                    {{title}}\n                  </div>\n                  <br>\n                  <h5> All Seats</h5>\n                  <div *ngFor=\"let seat of singleItem.seats\">\n                    {{seat}}\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"singleItem.url.search('characters')>-1\" class=\"card col-md-12 cardBorder\">\n    <div class=\"card-header house\">\n      Character\n    </div>\n    <br>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-2 text-center\">\n        <img src=\"assets/{{singleItem.gender}}.png\" alt=\"Norway\" style=\"width:100%; height:auto\" class=\"fluid-image\"> Character\n      </div>\n\n      <div class=\"col-sm-12 col-md-10\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleItem.name || singleItem.aliases}} -\n            <span class=\"text-muted\"> {{singleItem.gender}} </span>\n          </h5>\n          <blockquote class=\"blockquote\" style=\"border-left: solid 5px #4ABDAC\">\n            <p class=\"mb-0\">{{singleItem.culture}}</p>\n          </blockquote>\n\n          <div id=\"accordion\">\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  See Information\n                </button>\n              </div>\n\n              <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                  <h5> All Character Information</h5>\n                  <p *ngIf=\"singleItem.born != ''\"> Born :\n                    <span>{{singleItem.born}} </span>\n                  </p>\n                  <p *ngIf=\"singleItem.died != ''\"> Died :\n                    <span>{{singleItem.died}} </span>\n                  </p>\n                  <p *ngIf=\"singleItem.father != ''\"> Father :\n                    <span>\n                      <a [routerLink]=\"['/got','characters',getId(singleItem.father)]\" class=\"btn btn-link\">Character No : {{getId(singleItem.father)}}</a>\n                    </span>\n                  </p>\n                  <p *ngIf=\"singleItem.mother != ''\"> Mother :\n                    <span>\n                      <a [routerLink]=\"['/got','characters',getId(singleItem.mother)]\" class=\"btn btn-link\">Character No : {{getId(singleItem.mother)}}</a>\n                    </span>\n                  </p>\n                  <p *ngIf=\"singleItem.spouse != ''\"> Spouse :\n                    <span>\n                      <a [routerLink]=\"['/got','characters',getId(singleItem.spouse)]\" class=\"btn btn-link\">Character No : {{getId(singleItem.spouse)}}</a>\n                    </span>\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\" id=\"headingTwo\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  See Aliases\n                </button>\n              </div>\n              <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                <div class=\"card-body\" style=\"overflow-y:scroll;height: 80px;\">\n                  <h5>All Aliases </h5>\n                  <div *ngFor=\"let alias of singleItem.aliases\">\n                    {{alias}}\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <div class=\"card col-sm-12 col-md-10\">\n              <div class=\"card-header\" id=\"headingThree\">\n                <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                  See Books and TV Series\n                </button>\n              </div>\n              <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                <div class=\"card-body\" style=\"overflow-y:scroll;height: 80px;\">\n                  <h5> All Books </h5>\n\n                  <div *ngFor=\"let book of singleItem.books\">\n                    <a [routerLink]=\"['/got','books',getId(book)]\" class=\"btn btn-link\">Book No : {{getId(book)}}</a>\n                  </div>\n                  <br>\n\n                  <h5> All TV Series</h5>\n                  <div *ngFor=\"let series of singleItem.tvSeries\">\n                    {{series}}\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/single-view/single-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__retrive_data_service__ = __webpack_require__("./src/app/retrive-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Own service to retrieve the data

//From NPM modules

//Location services

//Added for Toast message

var SingleViewComponent = /** @class */ (function () {
    function SingleViewComponent(_route, router, RetriveDataService, spinnerService, location, toastr) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.RetriveDataService = RetriveDataService;
        this.spinnerService = spinnerService;
        this.location = location;
        this.toastr = toastr;
        //for getting id of categories like character,house,books
        this.getId = function (a) {
            var pos = a.lastIndexOf('/');
            var id = a.substr(pos + 1);
            return id;
        }; //end
        this.goBack = function () {
            _this.location.back();
        };
        console.log("Single View Router Calling");
        this.spinnerService.show();
    }
    SingleViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Single View NgOnInit called");
        //this.spinnerService.show();
        this._route.params.subscribe(function (param) {
            _this.spinnerService.show();
            var myEntityName = _this._route.snapshot.paramMap.get('entityName');
            var myCompId = _this._route.snapshot.paramMap.get('compId');
            console.log("This is " + myEntityName + " and " + myCompId);
            // Do your stuff with id change.
            _this.singleItem = _this.RetriveDataService.getSingleItem(myEntityName, myCompId).subscribe(//this is getting book data
            function (//this is getting book data
                data) {
                setTimeout(function () {
                    _this.singleItem = data;
                    console.log('single Item');
                    console.log(_this.singleItem);
                    _this.spinnerService.hide();
                }, 2000); //passsing to get detail function
            }, function (error) {
                console.log(error.errorMessage);
                _this.spinnerService.hide();
                _this.showError();
            });
        });
    };
    SingleViewComponent.prototype.showError = function () {
        this.toastr.error('Go back to home page !', 'Not Found !');
    };
    SingleViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single-view',
            template: __webpack_require__("./src/app/single-view/single-view.component.html"),
            styles: [__webpack_require__("./src/app/single-view/single-view.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__retrive_data_service__["a" /* RetriveDataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__retrive_data_service__["a" /* RetriveDataService */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], SingleViewComponent);
    return SingleViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map