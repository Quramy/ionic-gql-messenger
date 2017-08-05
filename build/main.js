webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GqlClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var users = (_a = ["\n  fragment UserSummary on User {\n    id, name, avatar,\n  }\n\n  query Users {\n    allUsers(last: 150) {\n      ...UserSummary,\n    }\n  }\n"], _a.raw = ["\n  fragment UserSummary on User {\n    id, name, avatar,\n  }\n\n  query Users {\n    allUsers(last: 150) {\n      ...UserSummary,\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_a));
// 直近40件のメッセージを取得するクエリ
var latestMessages = (_b = ["\nfragment MsgDetail on Message {\n  id, createdAt, body, updatedAt, createdAt,\n  author {\n    id, name, avatar\n  }\n}\n\nquery LatestMessages {\n  allMessages(last: 40, orderBy: createdAt_DESC) {\n    ...MsgDetail,\n  }\n}"], _b.raw = ["\nfragment MsgDetail on Message {\n  id, createdAt, body, updatedAt, createdAt,\n  author {\n    id, name, avatar\n  }\n}\n\nquery LatestMessages {\n  allMessages(last: 40, orderBy: createdAt_DESC) {\n    ...MsgDetail,\n  }\n}"], __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_b));
// メッセージを書き込むmutation
var postMessage = (_c = ["\nmutation PostMessage($body: String!, $authorId: ID) {\n  createMessage(body: $body, authorId: $authorId) {\n    id,\n  }\n}"], _c.raw = ["\nmutation PostMessage($body: String!, $authorId: ID) {\n  createMessage(body: $body, authorId: $authorId) {\n    id,\n  }\n}"], __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_c));
// メッセージの追加を監視するGraphQL Suscription
var onAddMessage = (_d = ["\nsubscription AddMessage {\n  Message(\n    filter: {}\n  ) {\n    mutation,\n    node {\n      id, createdAt, body, updatedAt, createdAt,\n      author {\n        id, name, avatar\n      }\n    }\n  }\n}"], _d.raw = ["\nsubscription AddMessage {\n  Message(\n    filter: {}\n  ) {\n    mutation,\n    node {\n      id, createdAt, body, updatedAt, createdAt,\n      author {\n        id, name, avatar\n      }\n    }\n  }\n}"], __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_d));
var GqlClient = (function () {
    function GqlClient(apollo) {
        this.apollo = apollo;
    }
    GqlClient.prototype.queryUsers = function () {
        return this.apollo.query({
            query: users,
            fetchPolicy: 'network-only',
        });
    };
    GqlClient.prototype.queryLatestMessages = function () {
        return this.apollo.query({
            query: latestMessages,
            fetchPolicy: 'network-only'
        });
    };
    GqlClient.prototype.postNewMessage = function (variables) {
        return this.apollo.mutate({
            mutation: postMessage,
            variables: variables,
        });
    };
    GqlClient.prototype.subscribeNewMessage = function () {
        return this.apollo.subscribe({
            query: onAddMessage,
        });
    };
    return GqlClient;
}());
GqlClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */]])
], GqlClient);

var _a, _b, _c, _d;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 255;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootNavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RootNavPage = (function () {
    function RootNavPage() {
    }
    Object.defineProperty(RootNavPage.prototype, "rootPage", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        },
        enumerable: true,
        configurable: true
    });
    return RootNavPage;
}());
RootNavPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-nav [root]=\"rootPage\"></ion-nav>\n  ",
    })
], RootNavPage);

//# sourceMappingURL=root-nav.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_timeline__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, gqlClient, splash) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.gqlClient = gqlClient;
        this.splash = splash;
        this.splash.show();
        this.users$ = this.gqlClient.queryUsers().map(function (_a) {
            var data = _a.data;
            return data.allUsers;
        }).do(function () { return _this.splash.hide(); });
    }
    HomePage.prototype.selectUser = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__timeline_timeline__["a" /* TimelinePage */], { user: user });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>\u3060\u308C\uFF1F</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item *ngFor=\"let user of users$ | async\" (click)=\"selectUser(user)\">\n          <ion-avatar>\n            <img [src]=\"user.avatar\" *ngIf=\"user.avatar\">\n            <ion-icon name=\"contact\" [style.color]=\"'#F0F0F0'\" [style.fontSize.px]=\"38\" *ngIf=\"!user.avatar\"></ion-icon>\n            <span class=\"name\">{{user.name}}</span>\n          </ion-avatar>\n        </button>\n      </ion-list>\n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__graphql__["a" /* GqlClient */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_new_message_new_message__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphql__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimelinePage = (function () {
    function TimelinePage(navCtrl, navParams, modalCtrl, gqlClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.gqlClient = gqlClient;
        this.subscription = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
        this.addedMessage$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    TimelinePage.prototype.ngOnInit = function () {
        var _this = this;
        this.me = this.navParams.get('user');
        var latestMessages$ = this.gqlClient.queryLatestMessages();
        var addMessage$ = this.gqlClient.subscribeNewMessage();
        latestMessages$
            .map(function (msgs) { return msgs.data.allMessages; })
            .take(1).toPromise().then(function (messages) {
            _this.messages$ = _this.addedMessage$.asObservable()
                .distinct(function (x) { return x && x.id; })
                .scan(function (acc, message) { return message ? [message].concat(acc) : acc; }, messages);
        });
        this.subscription.add(addMessage$.subscribe(function (_a) {
            var Message = _a.Message;
            return _this.addedMessage$.next(Message.node);
        }));
    };
    TimelinePage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TimelinePage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_new_message_new_message__["a" /* NewMessageModal */], { author: this.me });
        modal.onDidDismiss(function (message) { return _this.addedMessage$.next(message); });
        modal.present();
    };
    return TimelinePage;
}());
TimelinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Timeline</ion-title>\n        <ion-buttons end>\n          <button ion-button (click)=\"openModal()\">\n            <span ion-text color=\"primary\">Add</span>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n      <ng-container *ngIf=\"messages$\">\n        <ion-card *ngFor=\"let message of messages$ | async\">\n          <ion-item *ngIf=\"message.author\">\n            <ion-avatar item-start>\n              <img [src]=\"message.author.avatar\" *ngIf=\"message.author?.avatar\">\n              <ion-icon name=\"contact\" [style.color]=\"'#F0F0F0'\" [style.fontSize.px]=\"38\" *ngIf=\"!message.author.avatar\"></ion-icon>\n            </ion-avatar>\n            <h3>{{message.author.name}}</h3>\n          </ion-item>\n          <ion-item *ngIf=\"!message.author\">\n            <ion-avatar item-start>\n              <ion-icon name=\"ionitron\" [style.color]=\"'#488aff'\" [style.fontSize.px]=\"38\"></ion-icon>\n            </ion-avatar>\n            <h3>(anonymous user)</h3>\n          </ion-item>\n          <ion-card-content>\n            <p>{{message.body}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ng-container>\n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__graphql__["a" /* GqlClient */]])
], TimelinePage);

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graphql__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewMessageModal = (function () {
    function NewMessageModal(gqlClient, platform, navParams, viewCtrl) {
        this.gqlClient = gqlClient;
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.text = "";
    }
    NewMessageModal.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () { return _this.textArea.setFocus(); }, 150);
    };
    NewMessageModal.prototype.submit = function () {
        var _this = this;
        if (!this.text.length)
            return;
        this.gqlClient.postNewMessage({
            authorId: this.navParams.get('author').id || null,
            body: this.text,
        }).first().subscribe(function (x) {
            var id = x.data.createMessage.id;
            _this.viewCtrl.dismiss({
                id: id,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                body: _this.text,
                author: _this.navParams.get('author'),
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* TextInput */])
], NewMessageModal.prototype, "textArea", void 0);
NewMessageModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'new-message-modal',
        template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button (click)=\"dismiss()\">\n          <span ion-text color=\"primary\">Cancel</span>\n        </button>\n      </ion-buttons>\n      <ion-title>New Message</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)=\"submit()\">\n          <span ion-text color=\"primary\">Submit</span>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-textarea #message [(ngModel)]=\"text\" placeholder=\"\u4F55\u304B\u66F8\u304F\u3079\u3057\"></ion-textarea>\n  </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__graphql__["a" /* GqlClient */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], NewMessageModal);

//# sourceMappingURL=new-message.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_withLatestFrom__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinct__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinct___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinct__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_scan__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_dynamic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_module__ = __webpack_require__(549);









Object(__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_8__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export networkInterface */
/* unused harmony export wsClient */
/* unused harmony export client */
/* unused harmony export provideClient */
/* unused harmony export cloudSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_client__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_subscriptions_transport_ws__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_subscriptions_transport_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_subscriptions_transport_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_angular__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_index__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_root_nav_root_nav__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_timeline_timeline__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_new_message_new_message__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var networkInterface = Object(__WEBPACK_IMPORTED_MODULE_7_apollo_client__["b" /* createNetworkInterface */])({
    uri: 'https://api.graph.cool/simple/v1/cj5w8vqez05b50105pzg1erpt',
});
var wsClient = new __WEBPACK_IMPORTED_MODULE_8_subscriptions_transport_ws__["SubscriptionClient"]('wss://subscriptions.ap-northeast-1.graph.cool/v1/cj5w8vqez05b50105pzg1erpt', {
    reconnect: true,
});
var client = new __WEBPACK_IMPORTED_MODULE_7_apollo_client__["a" /* ApolloClient */]({
    dataIdFromObject: function (x) { return x.id; },
    networkInterface: Object(__WEBPACK_IMPORTED_MODULE_8_subscriptions_transport_ws__["addGraphQLSubscriptions"])(networkInterface, wsClient),
});
function provideClient() {
    return client;
}
var cloudSettings = {
    core: {
        app_id: '59554521',
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
            __WEBPACK_IMPORTED_MODULE_11__pages_root_nav_root_nav__["a" /* RootNavPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_timeline_timeline__["a" /* TimelinePage */],
            __WEBPACK_IMPORTED_MODULE_14__modals_new_message_new_message__["a" /* NewMessageModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_9_apollo_angular__["b" /* ApolloModule */].forRoot(provideClient),
            __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_root_nav_root_nav__["a" /* RootNavPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_timeline_timeline__["a" /* TimelinePage */],
            __WEBPACK_IMPORTED_MODULE_14__modals_new_message_new_message__["a" /* NewMessageModal */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__graphql_index__["a" /* GqlClient */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_root_nav_root_nav__ = __webpack_require__(299);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_root_nav_root_nav__["a" /* RootNavPage */];
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[539]);
//# sourceMappingURL=main.js.map