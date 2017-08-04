webpackJsonp([1],{

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		952,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 254;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage() {
    }
    Object.defineProperty(TabsPage.prototype, "rootPage", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        },
        enumerable: true,
        configurable: true
    });
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-nav [root]=\"rootPage\"></ion-nav>\n  ",
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var query = (_a = ["\n  fragment UserSummary on User {\n    id, name, avatar,\n  }\n\n  query Users {\n    allUsers(last: 100) {\n      ...UserSummary,\n    }\n  }\n"], _a.raw = ["\n  fragment UserSummary on User {\n    id, name, avatar,\n  }\n\n  query Users {\n    allUsers(last: 100) {\n      ...UserSummary,\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_a));
var HomePage = (function () {
    function HomePage(navCtrl, apollo) {
        this.navCtrl = navCtrl;
        this.apollo = apollo;
        this.users$ = this.apollo.query({ query: query })
            .map(function (_a) {
            var data = _a.data;
            return data.allUsers;
        });
    }
    HomePage.prototype.selectUser = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */], { user: user });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>\u3060\u308C\uFF1F</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item *ngFor=\"let user of users$ | async\" (click)=\"selectUser(user)\">\n          <ion-avatar>\n            <img [src]=\"user.avatar\" *ngIf=\"user.avatar\">\n            <ion-icon name=\"contact\" [style.color]=\"'#F0F0F0'\" [style.fontSize.px]=\"38\" *ngIf=\"!user.avatar\"></ion-icon>\n            <span class=\"name\">{{user.name}}</span>\n          </ion-avatar>\n        </button>\n      </ion-list>\n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_apollo_angular__["a" /* Apollo */]])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewMessageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var latestMessages = (_a = ["\nfragment MsgDetail on Message {\n  id, createdAt, body, updatedAt, createdAt,\n  author {\n    id, name, avatar\n  }\n}\nquery LatestMessages {\n  allMessages(last: 20, orderBy: createdAt_DESC) {\n    ...MsgDetail,\n  }\n}"], _a.raw = ["\nfragment MsgDetail on Message {\n  id, createdAt, body, updatedAt, createdAt,\n  author {\n    id, name, avatar\n  }\n}\nquery LatestMessages {\n  allMessages(last: 20, orderBy: createdAt_DESC) {\n    ...MsgDetail,\n  }\n}"], __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_a));
var onAddMessage = (_b = ["\nsubscription AddMessage {\n  Message(\n    filter: {}\n  ) {\n    mutation,\n    node {\n      id, createdAt, body, updatedAt, createdAt,\n      author {\n        id, name, avatar\n      }\n    }\n  }\n}"], _b.raw = ["\nsubscription AddMessage {\n  Message(\n    filter: {}\n  ) {\n    mutation,\n    node {\n      id, createdAt, body, updatedAt, createdAt,\n      author {\n        id, name, avatar\n      }\n    }\n  }\n}"], __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_b));
var postMessage = (_c = ["\nmutation PostMessage($body: String!, $authorId: ID) {\n  createMessage(body: $body, authorId: $authorId) {\n    id,\n  }\n}"], _c.raw = ["\nmutation PostMessage($body: String!, $authorId: ID) {\n  createMessage(body: $body, authorId: $authorId) {\n    id,\n  }\n}"], __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_c));
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, modalCtrl, apollo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apollo = apollo;
        this.subscription = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
    }
    ContactPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(NewMessageModal, { author: this.me });
        modal.onDidDismiss(function (x) { return console.log(x); });
        modal.present();
    };
    ContactPage.prototype.ngOnInit = function () {
        var _this = this;
        this.me = this.navParams.get('user');
        var latestMessages$ = this.apollo.query({ query: latestMessages, fetchPolicy: 'network-only' });
        var subject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        var addMessage$ = this.apollo.subscribe({ query: onAddMessage });
        latestMessages$.map(function (msgs) { return msgs.data.allMessages; }).take(1).toPromise().then(function (messages) {
            _this.message$ = subject.map(function (x) { return x && x.Message.node; }).scan(function (acc, message) {
                return message ? [message].concat(acc) : acc;
            }, messages);
        });
        this.subscription.add(addMessage$.subscribe(function (x) { return subject.next(x); }));
    };
    ContactPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Timeline</ion-title>\n        <ion-buttons end>\n          <button ion-button (click)=\"openModal()\">\n            <span ion-text color=\"primary\">Add</span>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n      <ng-container *ngIf=\"message$\">\n        <ion-card *ngFor=\"let message of message$ | async\">\n          <ion-item *ngIf=\"message.author\">\n            <ion-avatar item-start>\n              <img [src]=\"message.author.avatar\" *ngIf=\"message.author?.avatar\">\n              <ion-icon name=\"contact\" [style.color]=\"'#F0F0F0'\" [style.fontSize.px]=\"38\" *ngIf=\"!message.author.avatar\"></ion-icon>\n            </ion-avatar>\n            <h3>{{message.author.name}}</h3>\n          </ion-item>\n          <ion-item *ngIf=\"!message.author\">\n            <ion-avatar item-start>\n              <ion-icon name=\"ionitron\" [style.color]=\"'#488aff'\" [style.fontSize.px]=\"38\"></ion-icon>\n            </ion-avatar>\n            <h3>(anonymous user)</h3>\n          </ion-item>\n          <ion-card-content>\n            <p>{{message.body}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ng-container>\n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */]])
], ContactPage);

var NewMessageModal = (function () {
    function NewMessageModal(apollo, platform, navParams, viewCtrl) {
        this.apollo = apollo;
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.text = "";
    }
    NewMessageModal.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.textArea.setFocus(); }, 200);
    };
    NewMessageModal.prototype.submit = function () {
        var _this = this;
        if (!this.text.length)
            return;
        this.apollo.mutate({
            mutation: postMessage,
            variables: {
                authorId: this.navParams.get('author').id || null,
                body: this.text,
            }
        }).first().subscribe(function (x) {
            var createdId = x.data.createMessage.id;
            _this.viewCtrl.dismiss({
                author: _this.navParams.get('author'),
                body: _this.text,
            });
        });
    };
    NewMessageModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return NewMessageModal;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('message'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* TextInput */])
], NewMessageModal.prototype, "textArea", void 0);
NewMessageModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'new-message-modal',
        template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button (click)=\"dismiss()\">\n          <span ion-text color=\"primary\">Cancel</span>\n        </button>\n      </ion-buttons>\n      <ion-title>New Message</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)=\"submit()\">\n          <span ion-text color=\"primary\">Submit</span>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-textarea #message [(ngModel)]=\"text\"></ion-textarea>\n  </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], NewMessageModal);

var _a, _b, _c;
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/yosuke/workspaces/javascript/ionic-gql-messenger/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yosuke/workspaces/javascript/ionic-gql-messenger/src/pages/login/login.html"*/,
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>login</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <button (click)=\"login()\">aaaaaaaaaaaa</button>\n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_withLatestFrom__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_scan__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_dynamic__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_module__ = __webpack_require__(545);








Object(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_7__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wsClient */
/* unused harmony export networkInterface */
/* unused harmony export client */
/* unused harmony export provideClient */
/* unused harmony export cloudSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_apollo_client__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_subscriptions_transport_ws__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_subscriptions_transport_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_subscriptions_transport_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_angular__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_cloud_angular__ = __webpack_require__(658);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var wsClient = new __WEBPACK_IMPORTED_MODULE_12_subscriptions_transport_ws__["SubscriptionClient"]('wss://subscriptions.ap-northeast-1.graph.cool/v1/cj5w8vqez05b50105pzg1erpt', {
    reconnect: true,
});
var networkInterface = Object(__WEBPACK_IMPORTED_MODULE_11_apollo_client__["b" /* createNetworkInterface */])({
    uri: 'https://api.graph.cool/simple/v1/cj5w8vqez05b50105pzg1erpt',
});
var client = new __WEBPACK_IMPORTED_MODULE_11_apollo_client__["a" /* ApolloClient */]({
    dataIdFromObject: function (x) { return x.id; },
    networkInterface: Object(__WEBPACK_IMPORTED_MODULE_12_subscriptions_transport_ws__["addGraphQLSubscriptions"])(networkInterface, wsClient),
});
function provideClient() {
    return client;
}
var cloudSettings = {
    core: {
        app_id: '11b73261',
    },
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["b" /* NewMessageModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13_apollo_angular__["b" /* ApolloModule */].forRoot(provideClient),
            __WEBPACK_IMPORTED_MODULE_14__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["b" /* NewMessageModal */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yosuke/workspaces/javascript/ionic-gql-messenger/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/yosuke/workspaces/javascript/ionic-gql-messenger/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/yosuke/workspaces/javascript/ionic-gql-messenger/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yosuke/workspaces/javascript/ionic-gql-messenger/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

},[537]);
//# sourceMappingURL=main.js.map