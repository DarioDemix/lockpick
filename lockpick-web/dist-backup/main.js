(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _registrazione_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registrazione/registrazione/registrazione.component */ "./src/app/registrazione/registrazione/registrazione.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrello/carrello.component */ "./src/app/carrello/carrello.component.ts");
/* harmony import */ var _profilo_profilo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profilo/profilo.component */ "./src/app/profilo/profilo.component.ts");
/* harmony import */ var _modifica_profilo_modifica_profilo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifica-profilo/modifica-profilo.component */ "./src/app/modifica-profilo/modifica-profilo.component.ts");
/* harmony import */ var _storico_storico_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storico/storico.component */ "./src/app/storico/storico.component.ts");
/* harmony import */ var _inserisci_prodotto_inserisci_prodotto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inserisci-prodotto/inserisci-prodotto.component */ "./src/app/inserisci-prodotto/inserisci-prodotto.component.ts");
/* harmony import */ var _dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dettaglio-prodotto/dettaglio-prodotto.component */ "./src/app/dettaglio-prodotto/dettaglio-prodotto.component.ts");
/* harmony import */ var _recupero_psw_recupero_psw_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recupero-psw/recupero-psw.component */ "./src/app/recupero-psw/recupero-psw.component.ts");
/* harmony import */ var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./redirect/redirect.component */ "./src/app/redirect/redirect.component.ts");
/* harmony import */ var _prodotti_trovati_prodotti_trovati_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./prodotti-trovati/prodotti-trovati.component */ "./src/app/prodotti-trovati/prodotti-trovati.component.ts");















var routes = [
    {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'recuperoPsw',
        component: _recupero_psw_recupero_psw_component__WEBPACK_IMPORTED_MODULE_12__["RecuperoPswComponent"]
    },
    {
        path: 'registrazione',
        component: _registrazione_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_4__["RegistrazioneComponent"]
    },
    {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]
    },
    {
        path: 'carrello',
        component: _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_6__["CarrelloComponent"]
    },
    {
        path: 'profilo',
        component: _profilo_profilo_component__WEBPACK_IMPORTED_MODULE_7__["ProfiloComponent"]
    },
    {
        path: 'modificaProfilo',
        component: _modifica_profilo_modifica_profilo_component__WEBPACK_IMPORTED_MODULE_8__["ModificaProfiloComponent"]
    },
    {
        path: 'storico',
        component: _storico_storico_component__WEBPACK_IMPORTED_MODULE_9__["StoricoComponent"]
    },
    {
        path: 'inserisciProd',
        component: _inserisci_prodotto_inserisci_prodotto_component__WEBPACK_IMPORTED_MODULE_10__["InserisciProdottoComponent"]
    },
    {
        path: 'dettaglio/:id',
        component: _dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_11__["DettaglioProdottoComponent"],
        runGuardsAndResolvers: 'always',
    },
    {
        path: 'prodottiTrovati',
        component: _prodotti_trovati_prodotti_trovati_component__WEBPACK_IMPORTED_MODULE_14__["ProdottiTrovatiComponent"]
    },
    {
        path: 'redirect',
        component: _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_13__["RedirectComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titolo{\r\n    text-align: center;\r\n    background-color: unset;\r\n}\r\n.icone{\r\n    color:black;\r\n}\r\n.menu{\r\n    top: 0;\r\n    height: 50px;\r\n}\r\n.loader{\r\n    text-align: center;\r\n}\r\n.contenitorePagina{\r\n    width: 100%;\r\n}\r\n.contenitorePaginaCaricata{\r\n    text-align: center;\r\n    margin-bottom: 35px;\r\n}\r\n.contenitoreComponenti{\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    width: 100%;\r\n}\r\n.lenteIngrandimento :hover {\r\n    border-radius: 4px;\r\n    background-color: #ccac33;\r\n}\r\n.titoloLockpick{\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLE1BQU07SUFDTixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0b2xve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbn1cclxuLmljb25le1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLm1lbnV7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmxvYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGVuaXRvcmVQYWdpbmF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGVuaXRvcmVQYWdpbmFDYXJpY2F0YXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLmNvbnRlbml0b3JlQ29tcG9uZW50aXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGVudGVJbmdyYW5kaW1lbnRvIDpob3ZlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NhYzMzO1xyXG59XHJcbi50aXRvbG9Mb2NrcGlja3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitorePagina\">\r\n  <div class=\"contenitorePaginaCaricata\">\r\n    \r\n  <!-- toolbar contente la scelta ad icone per AreaUtente e Carrello -->\r\n    <div class=\"menu\">\r\n      <mat-toolbar color=\"accent\" >\r\n        <mat-toolbar-row>\r\n\r\n\t\t\t<span style=\"width: 100px; text-align: left\">\r\n\t\t\t\t<!-- titolo/logo sito ,unico punto di accesso alla homepage tramite link -->\r\n\t\t\t\t<h1 class=\"titolo\">\r\n\t\t\t\t\t<mat-label (click)=\"goToHomepage()\" class=\"titoloLockpick\" color=\"accent\">{{title}}</mat-label>\r\n\t\t\t\t</h1>\r\n\t\t\t</span>\r\n\r\n\t\t\t<!-- barra di ricerca -->\r\n\t\t\t<span style=\"flex: 1\">\r\n\t\t\t\t<mat-form-field floatLabel=\"never\" style=\"text-align: center\">\r\n\t\t\t\t\t<input matInput #ricerca (input)=\"ricercaProdotto(ricerca.value)\"\r\n\t\t\t\t\t\t\ttype=\"text\" placeholder=\"cerca...\"\r\n\t\t\t\t\t\t\t[matAutocomplete]=\"auto\"\r\n\t\t\t\t\t\t\t(keyup.enter)=\"cercaProdotti(ricerca.value)\">\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t\t<label class=\"lenteIngrandimento\" style=\"vertical-align: auto\">\r\n\t\t\t\t\t<a style=\"cursor:pointer;\" (click)=\"cercaProdotti(ricerca.value)\">\r\n\t\t\t\t\t\t<mat-icon style=\"vertical-align: middle\">search</mat-icon>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</label>\r\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\t\t\t\t\r\n\t\t\t\t\t<mat-option *ngFor=\"let prodotto of risultati\" \r\n\t\t\t\t\t\t\t\tstyle=\"cursor: pointer\"\r\n\t\t\t\t\t\t\t\t(onSelectionChange)=\"navigaDettaglio(prodotto.idCatalogo)\"\r\n\t\t\t\t\t\t\t\t(click)=\"navigaDettaglio(prodotto.idCatalogo)\" \r\n\t\t\t\t\t\t\t\tmatTooltipPosition=\"right\" \r\n\t\t\t\t\t\t\t\tmatTooltip=\"{{prodotto.nomeProdotto}}\">\r\n\t\t\t\t\t\t<b>{{prodotto.nomeProdotto}}</b>\r\n\t\t\t\t\t</mat-option>\r\n\t\t\t\t</mat-autocomplete>\r\n\t\t\t</span>\r\n\r\n\t\t\t<span style=\"width: 100px; text-align: right\">\r\n\r\n\t\t\t\t<button mat-icon-button\r\n\t\t\t\t\t\t[matMenuTriggerFor]=\"areautente\"\r\n\t\t\t\t\t\tid =\"areaUtente\">\r\n\t\t\t\t\t<mat-icon class=\"esterne\">account_circle</mat-icon>\r\n\t\t\t\t</button>    \r\n\r\n\t\t\t\t<mat-menu #areautente=\"matMenu\">\r\n\t\t\t\t\t<a routerLink=\"/profilo\">\r\n\t\t\t\t\t\t<button *ngIf=\"userLoggato()\" mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon class=\"icone\">perm_identity</mat-icon>\r\n\t\t\t\t\t\t\t<span *ngIf=\"!userLoggato()\">Profilo</span>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<label *ngIf=\"userLoggato()\">\r\n\t\t\t\t\t\t\t\t{{user.username}}\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<a *ngIf=\"!userLoggato()\" routerLink=\"/login\">\r\n\t\t\t\t\t\t<button mat-menu-item >\r\n\t\t\t\t\t\t\t<mat-icon class=\"icone\">input</mat-icon>\r\n\t\t\t\t\t\t\t<span>Login</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<a *ngIf=\"!userLoggato()\" routerLink=\"/registrazione\">\r\n\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon class=\"icone\">ballot</mat-icon>\r\n\t\t\t\t\t\t\t<span>Registrazione</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<a routerLink=\"/storico\">\r\n\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon class=\"icone\">assignment</mat-icon>\r\n\t\t\t\t\t\t\t<span>Storico</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t\r\n\t\t\t\t<!-- bottone che viene visualizzato solo se lo user è loggato -->\r\n\t\t\t\t\t<button mat-menu-item\r\n\t\t\t\t\t\t\t*ngIf=\"userLoggato()\"\r\n\t\t\t\t\t\t\t(click)=\"logout()\">\r\n\t\t\t\t\t\t<mat-icon class=\"icone\">exit_to_app</mat-icon>\r\n\t\t\t\t\t\t<span>Logout</span>\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<!-- bottone disponibile solo agli admin che serve per inserire prodotti -->\r\n\t\t\t\t\t<a *ngIf=\"isAdmin() && userLoggato()\"\r\n\t\t\t\t\t\t[routerLink]=\"['/inserisciProd']\" \r\n\t\t\t\t\t\t[queryParams]=\"{ type: 'insert' }\">\r\n\t\t\t\t\t\t<button mat-menu-item >\r\n\t\t\t\t\t\t\t<mat-icon class=\"interne\">add_circle_outline</mat-icon>\r\n\t\t\t\t\t\t\t<span>Inserisci prodotto</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t<!-- Il numero sul matBadge è il totale articoli in carrello -->\r\n\t\t\t\t<button mat-icon-button \r\n\t\t\t\t\t\t*ngIf=\"userLoggato()\"\r\n\t\t\t\t\t\t[matMenuTriggerFor]=\"carrello\">\r\n\t\t\t\t\t<mat-icon matBadge=\"{{totArticoliCarrello()}}\"\r\n\t\t\t\t\t\t\t\tmatBadgeColor=\"warn\"\r\n\t\t\t\t\t\t\t\tclass=\"icone\">\r\n\t\t\t\t\t\tshopping_cart\r\n\t\t\t\t\t</mat-icon>\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t<button routerLink=\"/carrello\"\r\n\t\t\t\t\t\t*ngIf=\"!userLoggato()\"\r\n\t\t\t\t\t\tmat-icon-button>\r\n\t\t\t\t\t<mat-icon>shopping_cart</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t\t\t\r\n\t\t\t\t<mat-menu #carrello=\"matMenu\">\r\n\t\t\t\t\t<a routerLink=\"/carrello\">\r\n\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon class=\"icone\">euro</mat-icon>\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<b style=\"font-size: 20px\">{{totParzialeCarrello() | number:'1.2-5'}}</b>\r\n\t\t\t\t\t\t\t</span>  <!-- aggiungere il vero prezzo da pagare calcolato -->\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</mat-menu>\r\n\t\t\t</span>\r\n\t\t</mat-toolbar-row>\r\n\r\n\t\t</mat-toolbar>\r\n\t\t</div>\r\n\t\t<!-- animazione di caricamento pagine -->\r\n\t\t<div [hidden]=\"!loading\" class=\"loader\">\r\n\t\t\t\r\n\t\t<h2>\r\n\t\t\t<mat-progress-bar *ngIf=\"loading\"\r\n\t\t\t\t\t\t\t\tcolor=\"warm\"\r\n\t\t\t\t\t\t\t\tmode=\"indeterminate\">\r\n\t\t\t</mat-progress-bar>\r\n\t\t\tloading...\r\n\t\t</h2>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t\t<!-- tag che reindirizza la pagina in base al routerLink cliccato -->\r\n\t\t<div [hidden]=\"loading\">\r\n\t\t\r\n\t\t<div class=\"contenitoreComponenti\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\r\n\t\t</div>\r\n\t<br>\r\n\t<!--\r\n\t\t<app-footer></app-footer>\r\n\t-->\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/catalogo.service */ "./src/app/service/catalogo.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, sharedProvider, catalogoService, route) {
        var _this = this;
        this.router = router;
        this.sharedProvider = sharedProvider;
        this.catalogoService = catalogoService;
        this.route = route;
        this.title = "Lockpick";
        this.loading = false;
        this.user = null;
        //carrello dello user loggato
        this.carrelloUser = null;
        this.router.events.subscribe(function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = true;
                        switch (_a) {
                            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]: return [3 /*break*/, 1];
                            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]: return [3 /*break*/, 2];
                            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]: return [3 /*break*/, 2];
                            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]: return [3 /*break*/, 2];
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        {
                            this.loading = true;
                            return [3 /*break*/, 5];
                        }
                        _b.label = 2;
                    case 2: 
                    /* inserire al posto di un tempo predefinito una funzione
                       che al caricamento dei prodotti finisca l'animanzione
                       del loader */
                    return [4 /*yield*/, this.chiamaDelay(1000)];
                    case 3:
                        /* inserire al posto di un tempo predefinito una funzione
                           che al caricamento dei prodotti finisca l'animanzione
                           del loader */
                        _b.sent();
                        this.loading = false;
                        return [3 /*break*/, 5];
                    case 4:
                        {
                            return [3 /*break*/, 5];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: "question",
            title: "Vuoi effettuare il logout?",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Logout", "Hai effettuato il logout", "success");
                _this.sharedProvider.deleteCurrentUser();
                _this.router.navigateByUrl("/homepage");
            }
        });
    };
    AppComponent.prototype.goToHomepage = function () {
        this.router.navigateByUrl("/homepage");
    };
    //userLoggato estrae dallo sharedProvider lo user e il carrello, se lo user è settato torna true
    //altrimenti false
    AppComponent.prototype.userLoggato = function () {
        this.user = this.sharedProvider.getCurrentUser();
        if (this.user != null) {
            //se lo user è loggato richiamo il carrello e i totali
            this.carrelloUser = this.sharedProvider.getCurrentCarrelloCompleto();
            this.totArticoli = this.totArticoliCarrello();
            this.totParz = this.totParzialeCarrello();
            return true;
        }
        else
            return false;
    };
    AppComponent.prototype.isAdmin = function () {
        if (this.userLoggato())
            return this.sharedProvider.getCurrentUser().amministratore;
        else
            return false;
    };
    AppComponent.prototype.totParzialeCarrello = function () {
        return this.sharedProvider.getTotaleParzialeCarrello();
    };
    AppComponent.prototype.totArticoliCarrello = function () {
        return this.sharedProvider.getTotArticoliCarrello();
    };
    AppComponent.prototype.chiamaDelay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    AppComponent.prototype.ricercaProdotto = function (stringa) {
        var _this = this;
        if (stringa == "" || stringa == " ") {
            this.risultati = null;
            return;
        }
        this.catalogoService.ricercaProdotto(stringa).subscribe(function (prodotti) {
            _this.risultati = prodotti;
        });
    };
    AppComponent.prototype.cercaProdotti = function (stringa) {
        if (stringa == "" || stringa == " ")
            return;
        else
            this.router.navigate(["/prodottiTrovati"], {
                queryParams: { stringa: stringa },
            });
    };
    AppComponent.prototype.navigaDettaglio = function (idCatalogo) {
        this.router.navigateByUrl("dettaglio/" + idCatalogo);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_share_provider_service__WEBPACK_IMPORTED_MODULE_3__["ShareProviderService"],
            _service_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _registrazione_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registrazione/registrazione/registrazione.component */ "./src/app/registrazione/registrazione/registrazione.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_label_prodotto_label_prodotto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/label-prodotto/label-prodotto.component */ "./src/app/homepage/label-prodotto/label-prodotto.component.ts");
/* harmony import */ var _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./carrello/carrello.component */ "./src/app/carrello/carrello.component.ts");
/* harmony import */ var _homepage_filtri_ricerca_filtri_ricerca_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/filtri-ricerca/filtri-ricerca.component */ "./src/app/homepage/filtri-ricerca/filtri-ricerca.component.ts");
/* harmony import */ var _profilo_profilo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profilo/profilo.component */ "./src/app/profilo/profilo.component.ts");
/* harmony import */ var _modifica_profilo_modifica_profilo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modifica-profilo/modifica-profilo.component */ "./src/app/modifica-profilo/modifica-profilo.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _homepage_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./homepage/carousel/carousel.component */ "./src/app/homepage/carousel/carousel.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _storico_storico_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./storico/storico.component */ "./src/app/storico/storico.component.ts");
/* harmony import */ var _inserisci_prodotto_inserisci_prodotto_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./inserisci-prodotto/inserisci-prodotto.component */ "./src/app/inserisci-prodotto/inserisci-prodotto.component.ts");
/* harmony import */ var _dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dettaglio-prodotto/dettaglio-prodotto.component */ "./src/app/dettaglio-prodotto/dettaglio-prodotto.component.ts");
/* harmony import */ var _homepage_descrizione_sito_descrizione_sito_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./homepage/descrizione-sito/descrizione-sito.component */ "./src/app/homepage/descrizione-sito/descrizione-sito.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _recupero_psw_recupero_psw_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./recupero-psw/recupero-psw.component */ "./src/app/recupero-psw/recupero-psw.component.ts");
/* harmony import */ var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./redirect/redirect.component */ "./src/app/redirect/redirect.component.ts");
/* harmony import */ var _prodotti_trovati_prodotti_trovati_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./prodotti-trovati/prodotti-trovati.component */ "./src/app/prodotti-trovati/prodotti-trovati.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _registrazione_registrazione_registrazione_component__WEBPACK_IMPORTED_MODULE_7__["RegistrazioneComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                _homepage_label_prodotto_label_prodotto_component__WEBPACK_IMPORTED_MODULE_13__["LabelProdottoComponent"],
                _carrello_carrello_component__WEBPACK_IMPORTED_MODULE_14__["CarrelloComponent"],
                _homepage_filtri_ricerca_filtri_ricerca_component__WEBPACK_IMPORTED_MODULE_15__["FiltriRicercaComponent"],
                _profilo_profilo_component__WEBPACK_IMPORTED_MODULE_16__["ProfiloComponent"],
                _modifica_profilo_modifica_profilo_component__WEBPACK_IMPORTED_MODULE_17__["ModificaProfiloComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _inserisci_prodotto_inserisci_prodotto_component__WEBPACK_IMPORTED_MODULE_22__["InserisciProdottoComponent"],
                _dettaglio_prodotto_dettaglio_prodotto_component__WEBPACK_IMPORTED_MODULE_23__["DettaglioProdottoComponent"],
                _homepage_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_19__["CarouselComponent"],
                _storico_storico_component__WEBPACK_IMPORTED_MODULE_21__["StoricoComponent"],
                _homepage_descrizione_sito_descrizione_sito_component__WEBPACK_IMPORTED_MODULE_24__["DescrizioneSitoComponent"],
                _recupero_psw_recupero_psw_component__WEBPACK_IMPORTED_MODULE_27__["RecuperoPswComponent"],
                _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_28__["RedirectComponent"],
                _prodotti_trovati_prodotti_trovati_component__WEBPACK_IMPORTED_MODULE_29__["ProdottiTrovatiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_20__["SlideshowModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__["InfiniteScrollModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_5__["Ng5SliderModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carrello/carrello.component.css":
/*!*************************************************!*\
  !*** ./src/app/carrello/carrello.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    min-width: -webkit-fill-available;\r\n    margin: auto;\r\n    border-collapse: collapse;\r\n    text-align: center;\r\n}\r\n.th .p{\r\n    padding: 10px;\r\n}\r\nth tr td{\r\n    text-align: center;\r\n}\r\n.totaleOrdine{\r\n    background-color: rgba(255,255,255,0) !important;\r\n}\r\n.fotoLabel{\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    padding: 10px;\r\n    max-width: 100%;\r\n    max-height: 142px;\r\n    min-height: 130px;\r\n}\r\n/*\r\n    width maggiorata\r\n*/\r\n.contenitoreComponente{\r\n    width: 650px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycmVsbG8vY2FycmVsbG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnREFBZ0Q7QUFDcEQ7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0NBRUM7QUFDRDtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jYXJyZWxsby9jYXJyZWxsby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGggLnB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbnRoIHRyIHRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50b3RhbGVPcmRpbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvdG9MYWJlbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTQycHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxufVxyXG4vKlxyXG4gICAgd2lkdGggbWFnZ2lvcmF0YVxyXG4qL1xyXG4uY29udGVuaXRvcmVDb21wb25lbnRle1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/carrello/carrello.component.html":
/*!**************************************************!*\
  !*** ./src/app/carrello/carrello.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isEmpty\" class=\"contenitoreComponente\">\r\n\r\n\t<div class=\"contenitoreElementi\">\r\n\t\t<h2>Carrello</h2>\r\n\t\t<div class=\"spazioElementi\">\r\n\t\t\t<table *ngIf=\"!isEmpty\" mat-table [dataSource]=\"prodottiInCarrello\">\r\n\t\t\t\t<!-- colonna img prodotti nel carrello -->\r\n\t\t\t\t<ng-container matColumnDef=\"immagine\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Immagine</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let prodottoCarrello\">\r\n\t\t\t\t\t\t<img src=\"{{prodottoCarrello.img}}\" class=\"fotoLabel\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t<td mat-footer-cell *matFooterCellDef></td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- Colonna nome -->\r\n\t\t\t\t<ng-container class=\"colonnaNome\" matColumnDef=\"nome\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Nome</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let prodottoCarrello\">\r\n\t\t\t\t\t\t{{prodottoCarrello.nomeProdotto}}</td>\r\n\t\t\t\t\t<td mat-footer-cell *matFooterCellDef>\r\n\t\t\t\t\t\t<p style=\"text-align: right\">\r\n\t\t\t\t\t\t\t<b>Totale parziale: &ensp;</b>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\r\n\t\t\t\t<!-- Colonna prezzo -->\r\n\t\t\t\t<ng-container matColumnDef=\"prezzo\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Prezzo</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let prodottoCarrello\">\r\n\t\t\t\t\t\t&ensp;€ {{prodottoCarrello.prezzoProdotto | number:'2.2-5'}}</td>\r\n\t\t\t\t\t<td  mat-footer-cell *matFooterCellDef>\r\n\t\t\t\t\t\t<p style=\"text-align:left\">\r\n\t\t\t\t\t\t\t<b>€ {{totParz | number:'2.2-5'}}</b>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- colonnna qta prodotti nel carrello -->\r\n\t\t\t\t<ng-container matColumnDef=\"qta\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Quantità</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let prodottoCarrello\">\r\n\t\t\t\t\t\t<mat-form-field style=\"width:40px\">\r\n\t\t\t\t\t\t\t<input matInput (blur)=\"aggiornaTotali()\"\r\n\t\t\t\t\t\t\t\t\t(blur)=\"salvaCarrello(name.value, prodottoCarrello)\" \r\n\t\t\t\t\t\t\t\t\ttype=\"number\" #name [(ngModel)]=\"prodottoCarrello.qtaOrdinata\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{prodottoCarrello.qtaOrdinata}}\" id=\"input\" style=\"width:40px\" \r\n\t\t\t\t\t\t\t\t\tmin=\"1\" max=\"{{prodottoCarrello.qtaProdotto}}\"\r\n\t\t\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td  mat-footer-cell *matFooterCellDef>\r\n\t\t\t\t\t\t<b>N. articoli: {{totaleArticoli}}</b>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- colonna per l'eliminazione prodotti -->\r\n\t\t\t\t<ng-container matColumnDef=\"elimina\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef></th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let prodottoCarrello\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" \r\n\t\t\t\t\t\t\t\t(click)=\"deleteProdottoCarrello(prodottoCarrello)\">\r\n\t\t\t\t\t\t\t<mat-icon>clear</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td mat-footer-cell *matFooterCellDef></td>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"colonneTabella\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: colonneTabella\"></tr>\r\n\t\t\t\t<tr mat-footer-row *matFooterRowDef=\"colonneTabella\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<br>\r\n\r\n\t<div class=\"bottoniFinali\">\r\n\t\t<!-- Bottoni per procedere al pagamento e tornare agli acquisti -->\r\n\t\t<a mat-raised-button *ngIf=\"isLogged\" color=\"accent\" routerLink=\"/homepage\">\r\n\t\t\t<label *ngIf=\"!isEmpty && isLogged\">\r\n\t\t\t\t<b>Continua gli acquisti</b>\r\n\t\t\t</label>\r\n\t\t\t<label *ngIf=\"isEmpty && isLogged\">\r\n\t\t\t\t<b>Effettua un acquisto!</b>\r\n\t\t\t</label>\r\n\t\t\t<mat-icon>local_grocery_store</mat-icon>\r\n\t\t</a>\r\n\r\n\t\t<a *ngIf=\"!isEmpty\" mat-raised-button color=\"primary\" (click)=\"checkout()\"\r\n\t\t\tcolor=\"primary\" routerLink=\"/carrello\">\r\n\t\t\t<label><b>Checkout</b></label> \r\n\t\t\t<mat-icon>payment</mat-icon>\r\n\t\t</a>\r\n\t</div>\r\n</div>\r\n\t\r\n<div *ngIf=\"isEmpty\">\r\n\t<h2>Il carrello è vuoto!</h2>\r\n\t<a mat-raised-button *ngIf=\"!isLogged\" color=\"accent\" routerLink=\"/login\">\r\n\t\t<label><b>Effettua il login per cominciare gli acquisti!</b></label>\r\n\t</a>\r\n\t<a mat-raised-button *ngIf=\"isLogged\" color=\"accent\" routerLink=\"/homepage\">\r\n\t\t<label><b>Continua con gli acquisti!</b></label>\r\n\t</a>\r\n</div>"

/***/ }),

/***/ "./src/app/carrello/carrello.component.ts":
/*!************************************************!*\
  !*** ./src/app/carrello/carrello.component.ts ***!
  \************************************************/
/*! exports provided: CarrelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrelloComponent", function() { return CarrelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carrello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/carrello.service */ "./src/app/service/carrello.service.ts");
/* harmony import */ var _service_prodotto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/prodotto.service */ "./src/app/service/prodotto.service.ts");
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_checkout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/checkout.service */ "./src/app/service/checkout.service.ts");
/* harmony import */ var _service_catalogo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/catalogo.service */ "./src/app/service/catalogo.service.ts");



//import { ActivatedRoute } from '@angular/router';





var CarrelloComponent = /** @class */ (function () {
    function CarrelloComponent(carrelloService, prodottoService, checkoutService, shareProvider, catalogoService) {
        this.carrelloService = carrelloService;
        this.prodottoService = prodottoService;
        this.checkoutService = checkoutService;
        this.shareProvider = shareProvider;
        this.catalogoService = catalogoService;
        //flag per capire se il carrello è vuoto
        this.isEmpty = true;
        //flag per lo user loggato
        this.isLogged = this.shareProvider.isLogged();
        this.colonneTabella = [
            'immagine',
            'nome',
            'prezzo',
            'qta',
            'elimina'
        ];
    }
    CarrelloComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isLogged) {
            var id = this.shareProvider.getCurrentUser().idUser;
            this.carrelloService.getAll(id).subscribe(function (carrello) {
                _this.prodottiInCarrello = carrello;
                _this.shareProvider.setCurrentCarrelloCompleto(carrello);
                _this.cartIsEmpty();
                _this.aggiornaTotali();
            });
        }
    };
    CarrelloComponent.prototype.aggiornaTotali = function () {
        //aggiorno i totali parziali e li aggiorno i dati nello sharedProvider
        //calcolo il totale degli articoli in carrello
        this.totaleArticoli = this.prodottiInCarrello.map(function (t) { return t.qtaOrdinata; }).reduce(function (acc, value) { return acc + value; }, 0);
        //calcolo il totale parziale del costo degli articoli in carrello
        this.totParz = this.prodottiInCarrello.map(function (carrello) { return carrello.prezzoProdotto * carrello.qtaOrdinata; }).reduce(function (acc, value) { return acc + value; }, 0);
        //Aggiorno lo sharedProvider
        this.shareProvider.updateTotaleParzialeCarrello(this.totParz);
        this.shareProvider.updateTotArticoliCarrello(this.totaleArticoli);
        //aggiorno il carrello
    };
    CarrelloComponent.prototype.salvaCarrello = function (qta, prodottoDaSalvare) {
        var _this = this;
        var prod;
        //recupero il prodotto dal DB e lo aggiorno (da ottimizzare)
        this.prodottoService.getOne(prodottoDaSalvare.idProdotto).subscribe(function (prodotto) {
            //controllo se la qta è minore di 1
            if (qta < 1) {
                _this.prodottoService.update(prodotto).subscribe(function (res) {
                    _this.aggiornaTotali();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        text: 'La quantità non può essere minore di 1',
                        timer: 1500,
                        showConfirmButton: false
                    });
                    prodottoDaSalvare.qtaOrdinata = 1;
                    qta = 1;
                    prodotto.qtaOrdinata = 1;
                    //faccio l'update del prodotto della qta a 1
                    _this.prodottoService.update(prodotto).subscribe(function (prodottoUpdated) {
                        //aggiorno la view perché da qui non avviene il blur che richiama tali metodi
                        _this.aggiornaTotali();
                    });
                });
            }
            //se la quantità non è stata modificata non viene effettuato l'update sul DB
            if (qta != prodotto.qtaOrdinata) {
                //Controllo se qta ordinata è maggiore a quella nel catalogo direttamente da frontend
                _this.catalogoService.getOne(prodottoDaSalvare.idCatalogo).subscribe(function (catalogo) {
                    if (catalogo.idCatalogo == prodotto.idCatalogo) {
                        if (catalogo.qtaProdotto >= qta) {
                            prod = prodotto;
                            //salvo nel prodotto appena recuperato dal DB la qta ordinata
                            prod.qtaOrdinata = prodottoDaSalvare.qtaOrdinata;
                            _this.prodottoService.update(prod).subscribe();
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                type: 'error',
                                title: 'Errore!',
                                text: 'La quantità selezionata è maggiore di quella disponibile',
                                timer: 1500,
                                showConfirmButton: false
                            });
                            prodottoDaSalvare.qtaOrdinata = catalogo.qtaProdotto;
                            qta = catalogo.qtaProdotto;
                            prodotto.qtaOrdinata = catalogo.qtaProdotto;
                            //faccio l'update del prodotto della qta massima in catalogo
                            _this.prodottoService.update(prodotto).subscribe(function (prodottoUpdated) {
                                //aggiorno la view perché da qui non avviene il blur che richiama tali metodi
                                _this.aggiornaTotali();
                            });
                        }
                    }
                });
            }
        });
    };
    CarrelloComponent.prototype.deleteProdottoCarrello = function (prodotto) {
        var _this = this;
        //elimino lo specifico prodotto inserito nel carrello,
        //quindi elimino nel DB un recordo di Prodotto (tabella di legame)
        this.prodottoService.deleteOne(prodotto.idProdotto).subscribe(function (res) {
            //riga di codice che serve per eliminare in tempo reale dalla view i prodotti
            _this.prodottiInCarrello = _this.prodottiInCarrello.filter(function (p) { return p !== prodotto; });
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'Prodotto eliminato',
                text: prodotto.nomeProdotto + ' eliminato dal carrello!',
                timer: 1500,
                showConfirmButton: false
            });
            _this.aggiornaTotali();
            _this.cartIsEmpty();
        });
    };
    //funzione di controllo degli acquisti con alert per il checkout
    CarrelloComponent.prototype.checkout = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            type: 'question',
            title: 'Vuoi effettuare l\'ordine?',
            html: '<h4>Il totale è di ' + this.totParz.toFixed(2) + '€</h4>',
            showCancelButton: true,
            confirmButtonText: 'Sì',
            cancelButtonText: 'No',
        }).then(function (result) {
            if (result.value) {
                _this.checkoutService.effettuaOrdine().subscribe(function (res) {
                    //pulisco i dati nello sharedProvider
                    _this.shareProvider.clearCarrello();
                    _this.isEmpty = true;
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Ordine effettuato!', 'A breve ti invieremo i codici sulla tua email!', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) { }
        });
    };
    CarrelloComponent.prototype.cartIsEmpty = function () {
        //controllo se il carrello è vuoto
        if (this.prodottiInCarrello.length < 1)
            this.isEmpty = true;
        else
            this.isEmpty = false;
    };
    CarrelloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrello',
            template: __webpack_require__(/*! ./carrello.component.html */ "./src/app/carrello/carrello.component.html"),
            styles: [__webpack_require__(/*! ./carrello.component.css */ "./src/app/carrello/carrello.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_carrello_service__WEBPACK_IMPORTED_MODULE_2__["CarrelloService"],
            _service_prodotto_service__WEBPACK_IMPORTED_MODULE_3__["ProdottoService"],
            _service_checkout_service__WEBPACK_IMPORTED_MODULE_6__["CheckoutService"],
            _service_share_provider_service__WEBPACK_IMPORTED_MODULE_4__["ShareProviderService"],
            _service_catalogo_service__WEBPACK_IMPORTED_MODULE_7__["CatalogoService"]])
    ], CarrelloComponent);
    return CarrelloComponent;
}());



/***/ }),

/***/ "./src/app/carrello/carrello.ts":
/*!**************************************!*\
  !*** ./src/app/carrello/carrello.ts ***!
  \**************************************/
/*! exports provided: Carrello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carrello", function() { return Carrello; });
var Carrello = /** @class */ (function () {
    function Carrello(idProdotto, idOrdine, nomeProdotto, prezzoProdotto, qtaOrdinata, img, idCatalogo) {
        this.idProdotto = idProdotto;
        this.idOrdine = idOrdine;
        this.nomeProdotto = nomeProdotto;
        this.prezzoProdotto = prezzoProdotto;
        this.qtaOrdinata = qtaOrdinata;
        this.img = img;
    }
    return Carrello;
}());



/***/ }),

/***/ "./src/app/dettaglio-prodotto/dettaglio-prodotto.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dettaglio-prodotto/dettaglio-prodotto.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fotoProdottoDettaglio{\r\n    padding: 20px;\r\n    border-radius: 30px;\r\n    width: 85%;\r\n}\r\ntd{\r\n    height: 50px;\r\n    width: 50%;\r\n}\r\n.contenitoreDettaglio{\r\n    text-align: center;\r\n    border: 2px rgb(150, 150, 150) solid;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    margin-top: 25px;\r\n}\r\n.scegliQta{\r\n    width: 50px;\r\n}\r\n.tabellaImmagineAnagrafica{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0dGFnbGlvLXByb2RvdHRvL2RldHRhZ2xpby1wcm9kb3R0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZGV0dGFnbGlvLXByb2RvdHRvL2RldHRhZ2xpby1wcm9kb3R0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvdG9Qcm9kb3R0b0RldHRhZ2xpb3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxufVxyXG50ZHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLmNvbnRlbml0b3JlRGV0dGFnbGlve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggcmdiKDE1MCwgMTUwLCAxNTApIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uc2NlZ2xpUXRhe1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnRhYmVsbGFJbW1hZ2luZUFuYWdyYWZpY2F7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dettaglio-prodotto/dettaglio-prodotto.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dettaglio-prodotto/dettaglio-prodotto.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitoreComponente\" style=\"width: 90%;display: grid\" *ngIf=\"prodotto; else elseBlock\">\r\n\t<div class=\"contenitoreElementi\">\r\n\t\t<h2>Dettaglio prodotto</h2>\r\n\t\t<div class=\"spazioElementi\">\r\n\t\t\t<table class=\"tabellaImmagineAnagrafica\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"min-width: 40%; max-width: 40%; height: unset;\">\r\n\t\t\t\t\t\t<img src=\"data:image/png;base64,{{prodotto.img}}\"\r\n\t\t\t\t\t\t\tclass=\"fotoProdottoDettaglio\">\r\n\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t<td style=\"width: 60%; height: unset;padding: 20px\">\r\n\t\t\t\t\t\t<div class=\"anagraficaProdotto\">\r\n\t\t\t\t\t\t\t<div class=\"nome-prezzo\">\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\t<table style=\"width: 100%; height: 100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td> <b>Nome:</b> </td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{prodotto.nomeProdotto}}</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td> <b>Prezzo:</b> </td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{prodotto.prezzoProdotto | number:'1.2-5'}}€</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"acquisto\">\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\t<table style=\"width: 100%; height: 100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td> <b>Quantità</b> </td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"scegliQta\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#scegliQta\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" max=\"{{prodotto.qtaProdotto}}\" min=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"qtaScelta\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"controlloQta(scegliQta.value)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"disponibile(prodotto.qtaProdotto)\">\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td> <b>Disponibilità</b> </td>\r\n\t\t\t\t\t\t\t\t\t\t<td> {{prodotto.qtaProdotto}} </td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td> <b>Aggiungi al carrello</b> </td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<button mat-button\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor=\"green\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[style.color]=\"prodotto.qtaProdotto>0 ? 'green' : 'red'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Aggiungi al carrello\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"aggiungiAlCarrello(prodotto)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>shopping_cart</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"produttoreCategoria\">\r\n\t\t\t\t\t\t\t\t<table style=\"width: 100%; height: 100%\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td> <b>Produttore:</b> </td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{nomeProduttore}}</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td> <b>Categoria:</b> </td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{nomeCategoria}}</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"descrizione\">\t\r\n\t\t\t\t\t\t\t\t<div style=\"width: 85%; margin: auto\">\r\n\t\t\t\t\t\t\t\t\t<h3>Descrizione</h3>\r\n\t\t\t\t\t\t\t\t\t<p>{{prodotto.descrProdotto}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<hr>\r\n\t\t<h2>Prodotti simili</h2>\r\n\t\t<div class=\"spazioElementi\">\r\n\t\t\t<app-carousel style=\"margin: auto\"></app-carousel>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<ng-template #elseBlock>\r\n\t\r\n\t<div style=\"text-align: center\">\r\n\t\t<p>prodotto non trovato</p>\r\n\t\t<button mat-raised-button color=\"accent\" (click)=\"goBack()\">torna indietro</button>\r\n\t</div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/dettaglio-prodotto/dettaglio-prodotto.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dettaglio-prodotto/dettaglio-prodotto.component.ts ***!
  \********************************************************************/
/*! exports provided: DettaglioProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioProdottoComponent", function() { return DettaglioProdottoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catalogo.service */ "./src/app/service/catalogo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_carrello_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/carrello.service */ "./src/app/service/carrello.service.ts");
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var _model_Prodotto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/Prodotto */ "./src/app/model/Prodotto.ts");
/* harmony import */ var _service_prodotto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/prodotto.service */ "./src/app/service/prodotto.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _service_categoria_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/categoria.service */ "./src/app/service/categoria.service.ts");
/* harmony import */ var _service_produttore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/produttore.service */ "./src/app/service/produttore.service.ts");












var DettaglioProdottoComponent = /** @class */ (function () {
    function DettaglioProdottoComponent(catalogoService, location, route, carrelloService, sharedProvider, prodottoService, router, categoriaService, produttoreService) {
        this.catalogoService = catalogoService;
        this.location = location;
        this.route = route;
        this.carrelloService = carrelloService;
        this.sharedProvider = sharedProvider;
        this.prodottoService = prodottoService;
        this.router = router;
        this.categoriaService = categoriaService;
        this.produttoreService = produttoreService;
        this.qtaScelta = 1;
        // Subscription collection so we can unsubscribe from them on destroy
        this._subscriptions = [];
    }
    // OnInit Hook, triggered each time the component is instantiated
    DettaglioProdottoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Add to our subscriptions collection
        this._subscriptions.push(
        // Subscribe to the ActivatedRoute for paramMap changes 
        this.route.paramMap.subscribe(function (paramMap) {
            // Retrieve the view named parameter
            var id = parseInt(paramMap.get('id'));
            // Check if we have a defined view
            if (id) {
                // Trigger the view switch
                _this.getOne(id);
            }
        }));
    };
    // OnDestroy Hook
    DettaglioProdottoComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from each Subscription
        this._subscriptions.forEach(function (subscription) { subscription.unsubscribe(); });
    };
    DettaglioProdottoComponent.prototype.getOne = function (id) {
        var _this = this;
        this.catalogoService.getOne(id).subscribe(function (res) {
            _this.produttoreService.getOne(res.idProduttore).subscribe(function (produttore) {
                _this.nomeProduttore = produttore.nomeProduttore;
            });
            _this.categoriaService.getOne(res.idCategoria).subscribe(function (categoria) {
                _this.nomeCategoria = categoria.nomeCategoria;
            });
            _this.prodotto = res;
            _this.prodotto.img = _this.prodotto.img;
            _this.imageUrl = _this.prodotto.img;
        });
    };
    DettaglioProdottoComponent.prototype.goBack = function () {
        this.location.back();
    };
    DettaglioProdottoComponent.prototype.controlloQta = function (qta) {
        if (qta < 1) {
            this.qtaScelta = 1;
        }
        else if (qta > this.prodotto.qtaProdotto) {
            this.qtaScelta = this.prodotto.qtaProdotto;
        }
    };
    DettaglioProdottoComponent.prototype.aggiungiAlCarrello = function (prodotto) {
        var _this = this;
        var idOrdine;
        var qtaInCarrello;
        var ordine;
        if (this.sharedProvider.getCurrentUser() == null) {
            //aggiungere lo stato per il reindirizzamento dopo il login
            return this.router.navigateByUrl("login");
        }
        if (this.disponibile(prodotto.qtaProdotto)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                type: 'error',
                html: '<h3>Prodotto esaurito!</h3>',
                timer: 1500,
                showConfirmButton: false
            });
            return;
        }
        this.carrelloService.exsist(this.sharedProvider.getCurrentUser().idUser).subscribe(function (_ordine) {
            ordine = _ordine;
            if (ordine) {
                //incapsulamento
                _this.carrelloService.controlliQta(prodotto, ordine.idOrdine, _this.qtaScelta);
            }
            else {
                _this.carrelloService.aggiungiAlCarrello(prodotto, _this.qtaScelta);
            }
        });
        var newProdotto = new _model_Prodotto__WEBPACK_IMPORTED_MODULE_7__["Prodotto"]();
        //controllo se nel carrello già esiste il Prodotto in questione
        this.prodottoService;
        //se no lo creo
        //se sì eseguo l'update della qtà
    };
    DettaglioProdottoComponent.prototype.disponibile = function (qta) {
        if (qta > 0)
            return false;
        else
            return true;
    };
    DettaglioProdottoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dettaglio-prodotto',
            template: __webpack_require__(/*! ./dettaglio-prodotto.component.html */ "./src/app/dettaglio-prodotto/dettaglio-prodotto.component.html"),
            styles: [__webpack_require__(/*! ./dettaglio-prodotto.component.css */ "./src/app/dettaglio-prodotto/dettaglio-prodotto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_carrello_service__WEBPACK_IMPORTED_MODULE_5__["CarrelloService"],
            _service_share_provider_service__WEBPACK_IMPORTED_MODULE_6__["ShareProviderService"],
            _service_prodotto_service__WEBPACK_IMPORTED_MODULE_8__["ProdottoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_categoria_service__WEBPACK_IMPORTED_MODULE_10__["CategoriaService"],
            _service_produttore_service__WEBPACK_IMPORTED_MODULE_11__["ProduttoreService"]])
    ], DettaglioProdottoComponent);
    return DettaglioProdottoComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    position: static;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1rem;\r\n    background-color: #efefef;\r\n    text-align: center;\r\n    flex: 1;\r\n    z-index: 0;\r\n}\r\n.ringraziamenti{\r\n    font-size:13px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4ucmluZ3JhemlhbWVudGl7XHJcbiAgICBmb250LXNpemU6MTNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"footer\" color=\"accent\">\r\n    <div style=\"text-align: left;width:5%\">\r\n        <a routerLink=\"/homepage\">\r\n            <mat-icon color=\"black\">home</mat-icon>\r\n        </a>\r\n    </div>\r\n    <div style=\"text-align:center;width:70%\">\r\n        \r\n        <div style=\"text-align:left\">\r\n        \r\n        <p class=\"ringraziamenti\">\r\n            Ringraziamo la <a href=\"https://www.regione.piemonte.it/web/\">Regione Piemonte</a> , \r\n            <a href=\"http://essenzialmente.org/\">Essenzialmente Formazione</a> e \r\n            <a href=\"http://www.itisgrassi.it/\">l'ITTS C. Grassi</a> per l'occasione e gestione del corso IFTS.\r\n            <br>\r\n            Ringraziamo inoltre <a href=\"http://www.grupposcai.it/\">SCAI Consulting</a> e le affiliate\r\n            per l'aiuto,l'ospitalità e il tutoraggio datoci durante il periodo di stage.\r\n            il corso IFTS.\r\n        </p>\r\n    \r\n        </div>\r\n    \r\n    </div>\r\n    <div style=\"width:20%\">\r\n        <div style=\"text-align:left\">\r\n        <p class=\"ringraziamenti\" text-align=\"center\">\r\n            Sito creato da Simone Marengo e <br>\r\n            Dario De Marco\r\n        </p>\r\n        </div>\r\n    </div>\r\n    <div style=\"width:5%\">\r\n        <div style=\"text-align:rigth\">\r\n        <button (click)=\"topFunction()\" mat-fab color=\"primary\"><mat-icon color=\"accent\">vertical_align_top</mat-icon></button>\r\n        </div>\r\n    </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    // When the user clicks on the button, scroll to the top of the document
    FooterComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/carousel/carousel.component.css":
/*!**********************************************************!*\
  !*** ./src/app/homepage/carousel/carousel.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slideshow{\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\n\r\n/*      frecce      */\r\n\r\nmat-icon{\r\n    transform: scale(1.5);\r\n    opacity: 0.25;\r\n}\r\n\r\nmat-icon:hover{\r\n    opacity: unset;\r\n    cursor: pointer;\r\n}\r\n\r\n.frecce{\r\n    width: 5%;\r\n}\r\n\r\n/*      immagine    */\r\n\r\nimg{\r\n    border-radius: 10px;\r\n    max-height: 200px;\r\n}\r\n\r\nimg:hover{\r\n    opacity: 0.75;\r\n    cursor: pointer;\r\n}\r\n\r\n/*      tabella slider      */\r\n\r\ntable{\r\n    height: 100%;\r\n    margin: auto;\r\n}\r\n\r\ntd{\r\n    border-radius: 10px;\r\n    max-height: 200px;\r\n    min-height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQSw2QkFBNkI7O0FBQzdCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVzaG93e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLyogICAgICBmcmVjY2UgICAgICAqL1xyXG5tYXQtaWNvbntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIG9wYWNpdHk6IDAuMjU7XHJcbn1cclxubWF0LWljb246aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiB1bnNldDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZnJlY2Nle1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4vKiAgICAgIGltbWFnaW5lICAgICovXHJcbmltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5pbWc6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiAgICAgIHRhYmVsbGEgc2xpZGVyICAgICAgKi9cclxudGFibGV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxudGR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/carousel/carousel.component.html":
/*!***********************************************************!*\
  !*** ./src/app/homepage/carousel/carousel.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slideshow\">\r\n\r\n    <table>\r\n        <tr>\r\n            <td class=\"frecce\">\r\n                <mat-icon *ngIf=\"prodottiPrima\" (click)=\"prodottiPrecedenti()\">keyboard_arrow_left</mat-icon>\r\n            </td>\r\n            \r\n            <td *ngFor=\"let prodotto of prodottiSimili\">\r\n                <a routerLink=\"/dettaglio/{{prodotto.idCatalogo}}\">\r\n                    <img src=\"data:image/png;base64,{{prodotto.img}}\">\r\n                </a>\r\n            </td>\r\n\r\n            <td class=\"frecce\">\r\n                <mat-icon *ngIf=\"prodottiDopo\"(click)=\"prodottiSuccessivi()\">keyboard_arrow_right</mat-icon>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>\r\n            </td>\r\n\r\n            <td *ngFor=\"let prodotto of prodottiSimili\">\r\n\r\n                    <span *ngIf=\"daTroncare(prodotto.nomeProdotto);else elseBlock\"\r\n                            style=\"text-align: center\">\r\n                        {{prodotto.nomeProdotto.slice(0,16)}}...\r\n                        <br>\r\n                        {{prodotto.prezzoProdotto}}€\r\n                    </span>\r\n\r\n                    <ng-template #elseBlock>\r\n                        {{prodotto.nomeProdotto}}\r\n                        <br>\r\n                        {{prodotto.prezzoProdotto}}€\r\n                    </ng-template>\r\n            </td>\r\n\r\n            <td>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/homepage/carousel/carousel.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/homepage/carousel/carousel.component.ts ***!
  \*********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_filtro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/filtro.service */ "./src/app/service/filtro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_catalogo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/catalogo.service */ "./src/app/service/catalogo.service.ts");





var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(filtroService, route, catalogoService) {
        this.filtroService = filtroService;
        this.route = route;
        this.catalogoService = catalogoService;
        this._subscriptions = [];
        this.prodottiSimili = [];
        this.lastKey = 0;
        this.finished = false;
        this.prodottiPrima = false;
        this.prodottiDopo = false;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            //acquisisco l'id del prodotto del dettaglio
            _this.idCatalogo = parseInt(paramMap.get('id'));
            //prendo l'oggetto del prodotto del detttaglio
            _this.catalogoService.getOne(_this.idCatalogo).subscribe(function (prodotto) {
                _this.prodotto = prodotto;
                //assegno gli id per la ricerca dei prodotti simili
                _this.idProduttore = _this.prodotto.idProduttore;
                _this.idCategoria = _this.prodotto.idCategoria;
                //assegno all'array di prodottiSimili i prodotti simili trovati
                _this.filtroService.getProdottiSimiliCategoria(_this.idCategoria, _this.idCatalogo, _this.lastKey, 5).subscribe(function (prodottiSimili) {
                    if (prodottiSimili.length > 4) {
                        _this.prodottiDopo = true;
                    }
                    prodottiSimili.pop();
                    _this.prodottiSimili = prodottiSimili;
                });
            });
        });
    };
    // funzione che controlla se il nome è troppo lungo
    CarouselComponent.prototype.daTroncare = function (nome) {
        if (nome.length >= 17)
            return true;
        return false;
    };
    CarouselComponent.prototype.prodottiPrecedenti = function () {
        var _this = this;
        if (this.lastKey < 1) {
            this.prodottiPrima = false;
            return;
        }
        this.prodottiPrima = true;
        this.finished = false;
        this.prodottiDopo = true;
        this.lastKey -= 4;
        this.filtroService.getProdottiSimiliCategoria(this.idCategoria, this.idCatalogo, this.lastKey, 4)
            .subscribe(function (prodottiPrecedenti) {
            _this.prodottiPrima = false;
            _this.prodottiSimili = prodottiPrecedenti;
        });
    };
    CarouselComponent.prototype.prodottiSuccessivi = function () {
        var _this = this;
        if (this.finished) {
            return;
        }
        this.lastKey += 4;
        this.filtroService.getProdottiSimiliCategoria(this.idCategoria, this.idCatalogo, this.lastKey, 5)
            .subscribe(function (prodottiSuccessivi) {
            console.log(prodottiSuccessivi);
            if (prodottiSuccessivi.length < 5) {
                _this.finished = true;
                _this.prodottiDopo = false;
                _this.prodottiSimili = prodottiSuccessivi;
                _this.prodottiPrima = true;
                return;
            }
            _this.prodottiPrima = true;
            _this.prodottiDopo = true;
            _this.prodottiSimili = prodottiSuccessivi;
            _this.finished = false;
        });
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/homepage/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/homepage/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_filtro_service__WEBPACK_IMPORTED_MODULE_2__["FiltroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/homepage/descrizione-sito/descrizione-sito.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/homepage/descrizione-sito/descrizione-sito.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".descrizione{\r\n    text-align: center;\r\n    height: 250px;\r\n    position: static;\r\n    margin-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZGVzY3JpemlvbmUtc2l0by9kZXNjcml6aW9uZS1zaXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9kZXNjcml6aW9uZS1zaXRvL2Rlc2NyaXppb25lLXNpdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcml6aW9uZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/descrizione-sito/descrizione-sito.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/homepage/descrizione-sito/descrizione-sito.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"descrizione\">\r\n    <br>\r\n        <p>LOCKPICK</p>\r\n    <br>\r\n        <p>Lockpick è un sito di vendita on-line dove è <br>\r\n            possibile acquistare le keys dei vostri giochi preferiti!</p>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/descrizione-sito/descrizione-sito.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/homepage/descrizione-sito/descrizione-sito.component.ts ***!
  \*************************************************************************/
/*! exports provided: DescrizioneSitoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescrizioneSitoComponent", function() { return DescrizioneSitoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescrizioneSitoComponent = /** @class */ (function () {
    function DescrizioneSitoComponent() {
    }
    DescrizioneSitoComponent.prototype.ngOnInit = function () {
    };
    DescrizioneSitoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-descrizione-sito',
            template: __webpack_require__(/*! ./descrizione-sito.component.html */ "./src/app/homepage/descrizione-sito/descrizione-sito.component.html"),
            styles: [__webpack_require__(/*! ./descrizione-sito.component.css */ "./src/app/homepage/descrizione-sito/descrizione-sito.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescrizioneSitoComponent);
    return DescrizioneSitoComponent;
}());



/***/ }),

/***/ "./src/app/homepage/filtri-ricerca/filtri-ricerca.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/filtri-ricerca/filtri-ricerca.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filtri-ricerca{\r\n    width: 75%;\r\n    margin: auto;\r\n}\r\n.contenitoreFiltro{\r\n    margin: auto;\r\n    width: 75%\r\n}\r\n::ng-deep .custom-slider .ng5-slider .ng5-slider-selection {\r\n    background: rgb(158, 14, 14) !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZmlsdHJpLXJpY2VyY2EvZmlsdHJpLXJpY2VyY2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0ksdUNBQXVDO0VBQ3pDIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvZmlsdHJpLXJpY2VyY2EvZmlsdHJpLXJpY2VyY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0cmktcmljZXJjYXtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRlbml0b3JlRmlsdHJve1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDc1JVxyXG59XHJcbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1OCwgMTQsIDE0KSAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/filtri-ricerca/filtri-ricerca.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/filtri-ricerca/filtri-ricerca.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filtri-ricerca\">\r\n\t<mat-expansion-panel [disabled]=\"isDisabled\">\r\n\r\n\t\t<mat-expansion-panel-header>\r\n\t\t\t<mat-panel-title>\r\n\t\t\t\t<b>Filtri ricerca</b>\r\n\t\t\t</mat-panel-title>\r\n\r\n\t\t\t<!-- <mat-panel-description>\r\n\t\t\t</mat-panel-description> -->\r\n\r\n\t\t</mat-expansion-panel-header>\r\n\t\t\t<div class=\"contenitoreFiltro\">\r\n\t\t\t\t<ng5-slider [(value)]=\"prezzoMinimo\" [(highValue)]=\"prezzoMassimo\"\r\n\t\t\t\t\t\t\t[options]=\"options\"></ng5-slider>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\t\t\t<div class=\"contenitoreFiltro\">\r\n\t\t\t<!-- Scelta produttore-->\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t\t<mat-label>Scegli un produttore</mat-label>\r\n\t\t\t\t\t<mat-select [(value)]=\"selectedProd\" disableRipple>\r\n\t\t\t\t\t\t<mat-option (click)=\"setProd(0)\">Vuoto</mat-option>\r\n\t\t\t\t\t\t<mat-option *ngFor=\"let produttore of produttori\" (click)=\"setProd(produttore.idProduttore)\" value=\"produttore\">\r\n\t\t\t\t\t\t\t{{produttore.nomeProduttore}}\r\n\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t<!--Scelta categoria-->\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t\t<mat-label>Scegli una categoria</mat-label>\r\n\t\t\t\t\t<mat-select [(value)]=\"selectedCat\" disableRipple>\r\n\t\t\t\t\t\t<mat-option (click)=\"setCat(0)\">Vuoto</mat-option>\r\n\t\t\t\t\t\t<mat-option *ngFor=\"let categoria of categorie\" (click)=\"setCat(categoria.idCategoria)\" value=\"categoria\">\r\n\t\t\t\t\t\t\t{{categoria.nomeCategoria}}\r\n\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t</mat-select>\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t<mat-action-row>\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"cerca()\">Cerca!</button>\r\n\t\t</mat-action-row>\r\n\r\n\t</mat-expansion-panel>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/filtri-ricerca/filtri-ricerca.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/filtri-ricerca/filtri-ricerca.component.ts ***!
  \*********************************************************************/
/*! exports provided: FiltriRicercaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltriRicercaComponent", function() { return FiltriRicercaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_produttore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/produttore.service */ "./src/app/service/produttore.service.ts");
/* harmony import */ var src_app_service_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/categoria.service */ "./src/app/service/categoria.service.ts");
/* harmony import */ var src_app_service_filtro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/filtro.service */ "./src/app/service/filtro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FiltriRicercaComponent = /** @class */ (function () {
    function FiltriRicercaComponent(produttoreService, categoriaService, filtroService, router, route) {
        this.produttoreService = produttoreService;
        this.categoriaService = categoriaService;
        this.filtroService = filtroService;
        this.router = router;
        this.route = route;
        this._subscriptions = [];
        /*                 specifiche per lo slider                   */
        this.prezzoMinimo = 0; //valore minimo segnato
        this.prezzoMassimo = 100; //valore massimo segnato
        this.options = {
            floor: 0,
            ceil: 100,
            step: 5,
            translate: function (value) {
                return '€' + value;
            }
        };
    }
    FiltriRicercaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategorie();
        this.getProduttori();
        this._subscriptions.push(this.route.queryParamMap.subscribe(function (paramMap) {
            _this.selectedProd = "";
            _this.selectedCat = "";
            _this.setCat(0);
            _this.setProd(0);
        }));
    };
    FiltriRicercaComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (subscription) { subscription.unsubscribe(); });
    };
    FiltriRicercaComponent.prototype.setProd = function (idProduttore) {
        this.idProduttore = idProduttore;
    };
    FiltriRicercaComponent.prototype.getProduttori = function () {
        var _this = this;
        this.produttoreService.getAll().subscribe(function (_) {
            _this.produttori = _;
        });
    };
    FiltriRicercaComponent.prototype.setCat = function (idCategoria) {
        this.idCategoria = idCategoria;
    };
    FiltriRicercaComponent.prototype.getCategorie = function () {
        var _this = this;
        this.categoriaService.getAll().subscribe(function (_) {
            _this.categorie = _;
        });
    };
    FiltriRicercaComponent.prototype.cerca = function () {
        this.router.navigateByUrl("/homepage?idCategoria=" + this.idCategoria + "&idProduttore=" + this.idProduttore + "&pMin=" + this.prezzoMinimo + "&pMax=" + this.prezzoMassimo);
    };
    FiltriRicercaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtri-ricerca',
            template: __webpack_require__(/*! ./filtri-ricerca.component.html */ "./src/app/homepage/filtri-ricerca/filtri-ricerca.component.html"),
            styles: [__webpack_require__(/*! ./filtri-ricerca.component.css */ "./src/app/homepage/filtri-ricerca/filtri-ricerca.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_produttore_service__WEBPACK_IMPORTED_MODULE_2__["ProduttoreService"],
            src_app_service_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"],
            src_app_service_filtro_service__WEBPACK_IMPORTED_MODULE_4__["FiltroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], FiltriRicercaComponent);
    return FiltriRicercaComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitoreHomepage\">\r\n    <div class=\"contenitoreFiltri\">\r\n        <app-filtri-ricerca></app-filtri-ricerca>\r\n    </div>\r\n    \r\n    <div class=\"contenitoreDescrizione\">\r\n        <app-descrizione-sito></app-descrizione-sito>\r\n    </div>\r\n\r\n    <br><br>\r\n    \r\n    <!--\r\n    <app-carousel></app-carousel>\r\n    -->\r\n    <div class=\"contenitoreCatalogo\">\r\n        <app-label-prodotto></app-label-prodotto>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/label-prodotto/label-prodotto.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/label-prodotto/label-prodotto.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".catalogo{\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.cardProdotto{\r\n  margin-bottom: 25px;\r\n  width: 225px;\r\n}\r\n.funzioniProdotto{\r\n  text-align:center;\r\n  margin-bottom: 4px\r\n}\r\n.contenitoreFoto{\r\n  margin: 5px;\r\n  border-radius: 10px;\r\n}\r\n.fotoLabel{\r\n  border-radius: 10px;\r\n  max-width: 100%;\r\n  max-height: 200px;\r\n  min-height: 200px;\r\n}\r\n.mat-card-image:first-child{\r\n  margin-top: auto;\r\n}\r\n.mat-card-actions, .mat-card-content{\r\n  margin-bottom: auto;\r\n}\r\n.titolo{\r\n  font-size:17px;\r\n}\r\n::ng-deep .mat-card-image {\r\n    width: auto !important;\r\n    margin: auto !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvbGFiZWwtcHJvZG90dG8vbGFiZWwtcHJvZG90dG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakI7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2xhYmVsLXByb2RvdHRvL2xhYmVsLXByb2RvdHRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0YWxvZ297XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY2FyZFByb2RvdHRve1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgd2lkdGg6IDIyNXB4O1xyXG59XHJcbi5mdW56aW9uaVByb2RvdHRve1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweFxyXG59XHJcbi5jb250ZW5pdG9yZUZvdG97XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZm90b0xhYmVse1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5tYXQtY2FyZC1pbWFnZTpmaXJzdC1jaGlsZHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcbi5tYXQtY2FyZC1hY3Rpb25zLCAubWF0LWNhcmQtY29udGVudHtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcbi50aXRvbG97XHJcbiAgZm9udC1zaXplOjE3cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/label-prodotto/label-prodotto.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/label-prodotto/label-prodotto.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"catalogo\">\r\n\r\n\t<mat-grid-list rowHeight=\"430px\" [cols]=\"breakpoint\" (window:resize)=\"onResize($event)\">\r\n\t\t\r\n\t\t<div *ngFor=\"let prodotto of prodotti\">\r\n\t\t\t<mat-grid-tile colspan=\"1\" rowspan=\"1\">\r\n\t\t\t\t<div class=\"contenutoTile\">\r\n\t\t\t\t\t<mat-card tabindex=\"0\" class=\"cardProdotto\">\r\n\t\t\t\t\t\t<div class=\"contenutoCard\">\r\n\t\t\t\t\t\t\t<mat-card-header>\r\n\t\t\t\t\t\t\t\t<img mat-card-avatar \r\n\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/png;base64,{{prodotto.img}}\">\r\n\t\t\t\t\t\t\t\t<mat-card-title *ngIf=\"daTroncare(prodotto.nomeProdotto);else elseBlock\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<label \tclass=\"titolo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltipPosition=\"above\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"{{prodotto.nomeProdotto}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<b (click)=\"dettaglio(prodotto.idCatalogo)\">{{prodotto.nomeProdotto.slice(0,17)}}...</b>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t\t\t</mat-card-title>\r\n\t\t\t\t\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label \tclass=\"titolo\"\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltipPosition=\"above\"\r\n\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"{{prodotto.nomeProdotto}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<b (click)=\"dettaglio(prodotto.idCatalogo)\">{{prodotto.nomeProdotto}}</b>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</mat-card-header>\r\n\r\n\t\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/dettaglio/{{prodotto.idCatalogo}}\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"contenitoreFoto\">\r\n\t\t\t\t\t\t\t\t\t\t<img mat-card-image \r\n\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/png;base64,{{prodotto.img}}\"\r\n\t\t\t\t\t\t\t\t\t\t\talt=\"Foto prodotto\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fotoLabel\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<label style=\"font-size: 20px\">\r\n\t\t\t\t\t\t\t\t\t<b>€ {{prodotto.prezzoProdotto | number:'1.2-5'}}</b>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</mat-card-content>\r\n\r\n\t\t\t\t\t\t\t<mat-card-actions class=\"funzioniProdotto\">\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t<!--Bottone visualizzato solo se lo user è admin-->\r\n\t\t\t\t\t\t\t\t<button *ngIf=\"this.sharedProvider.isAdmin()\" mat-button\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Cancella prodotto\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"cancella(prodotto)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>clear</mat-icon>\r\n\t\t\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t\t\t<!--Bottone visualizzato solo se lo user è admin-->\r\n\t\t\t\t\t\t\t\t<button *ngIf=\"this.sharedProvider.isAdmin()\" mat-button\r\n\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Modifica prodotto\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"modifica(prodotto)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['/inserisciProd']\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[queryParams]=\"{ type: 'edit'}\">\r\n\t\t\t\t\t\t\t\t<mat-icon>edit</mat-icon>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button mat-button\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"green\"\r\n\t\t\t\t\t\t\t\t\t\t[style.color]=\"prodotto.qtaProdotto>0 ? 'green' : 'red'\"\r\n\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Aggiungi al carrello\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"aggiungiAlCarrello(prodotto)\"\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\ttype=\"submit\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>shopping_cart</mat-icon>\r\n\t\t\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t\t</mat-card-actions>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-grid-tile>\r\n\t\t</div>\r\n\t\t<h1 *ngIf=\"noProdotti\">Non vi sono prodotti</h1>\r\n\t</mat-grid-list>\r\n\r\n\t<div *ngIf=\"primiProdotti && !finished\" style=\"width: 60%; text-align: center\"\r\n\t\t\tinfiniteScroll\r\n\t\t\t[infiniteScrollDistance]=\"200\"\r\n\t\t\t[infiniteScrollThrottle]=\"2000\"\r\n\t\t\t(scrolled)=\"onScroll()\">\r\n\t\t</div>\r\n\r\n\t<div *ngIf=\"!finished\">\r\n\r\n\t\t<mat-spinner></mat-spinner>\r\n\t\t\r\n\t</div>\r\n\r\n\t<div *ngIf=\"finished\">\r\n\r\n\t\t<button mat-raised-button color=\"accent\" (click)=\"topFunction()\">Torna su</button>\r\n\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/label-prodotto/label-prodotto.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/label-prodotto/label-prodotto.component.ts ***!
  \*********************************************************************/
/*! exports provided: LabelProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelProdottoComponent", function() { return LabelProdottoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/catalogo.service */ "./src/app/service/catalogo.service.ts");
/* harmony import */ var src_app_service_carrello_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/carrello.service */ "./src/app/service/carrello.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_service_share_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var src_app_service_filtro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/filtro.service */ "./src/app/service/filtro.service.ts");








var LabelProdottoComponent = /** @class */ (function () {
    function LabelProdottoComponent(catalogoService, carrelloService, filtroService, router, sharedProvider, route) {
        this.catalogoService = catalogoService;
        this.carrelloService = carrelloService;
        this.filtroService = filtroService;
        this.router = router;
        this.sharedProvider = sharedProvider;
        this.route = route;
        this.prodotti = [];
        this.imageUrl = "";
        this.qtaOrdinata = 1;
        this.batch = 8;
        this.lastKey = 0;
        this.finished = false;
        this.primiProdotti = false;
        this.filtroAttivo = false;
        this.noProdotti = false;
        this.lkFiltro = 0;
        this.batchFiltro = 8;
        // Subscription collection so we can unsubscribe from them on destroy
        this._subscriptions = [];
    }
    LabelProdottoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noProdotti = false;
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 4;
        // Add to our subscriptions collection
        this._subscriptions.push(
        // Subscribe to the ActivatedRoute for paramMap changes 
        this.route.queryParamMap.subscribe(function (paramMap) {
            _this.noProdotti = false;
            _this.prodotti = [];
            _this.finished = false;
            // Retrieve the view named parameter
            _this.idCategoria = parseInt(paramMap.get('idCategoria'));
            _this.idProduttore = parseInt(paramMap.get('idProduttore'));
            _this.pMin = parseInt(paramMap.get('pMin'));
            _this.pMax = parseInt(paramMap.get('pMax'));
            // Check if we have a defined view
            if (_this.pMin >= 0 && _this.pMax) {
                _this.lkFiltro = 0;
                // Trigger the view switch
                console.log("prodotti filtrati");
                if (!_this.idCategoria)
                    _this.idCategoria = 0;
                if (!_this.idProduttore)
                    _this.idProduttore = 0;
                _this.filtroAttivo = true;
                console.log(_this.idCategoria, _this.idProduttore);
                _this.getProdottiFiltrati(_this.idCategoria, _this.idProduttore, _this.pMin, _this.pMax, _this.lkFiltro, _this.batchFiltro);
            }
            else {
                _this.primiProdotti = false;
                _this.lastKey = 0;
                console.log("primiProdotti: " + _this.primiProdotti);
                _this.filtroAttivo = false;
                _this.getProdotti();
            }
        }));
    };
    LabelProdottoComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from each Subscription
        this._subscriptions.forEach(function (subscription) { subscription.unsubscribe(); });
    };
    LabelProdottoComponent.prototype.onResize = function (event) {
        var larghezza = event.target.innerWidth;
        if (larghezza <= 600 && larghezza > 1)
            this.breakpoint = 1;
        if (larghezza <= 900 && larghezza > 601)
            this.breakpoint = 2;
        if (larghezza <= 1200 && larghezza > 901)
            this.breakpoint = 3;
        if (larghezza > 1200)
            this.breakpoint = 4;
        //this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 4;
    };
    LabelProdottoComponent.prototype.onScroll = function () {
        this.noProdotti = false;
        if (this.filtroAttivo) {
            console.log("prodotti filtrati");
            this.getProdottiFiltrati(this.idCategoria, this.idProduttore, this.pMin, this.pMax, this.lkFiltro, this.batchFiltro);
        }
        else {
            this.getProdotti();
        }
    };
    // funzione che controlla se il nome è troppo lungo
    LabelProdottoComponent.prototype.daTroncare = function (nome) {
        if (nome.length > 18)
            return true;
        return false;
    };
    LabelProdottoComponent.prototype.getProdotti = function () {
        var _this = this;
        console.log(this.lastKey, this.batch);
        this.catalogoService.getAll(this.lastKey, this.batch).subscribe(function (prodotti) {
            _this.primiProdotti = true;
            _this.lastKey += 8;
            if (prodotti.length < 8) {
                _this.prodotti = _this.prodotti.concat(prodotti);
                console.log(_this.prodotti);
                _this.finished = true;
                console.log("finito");
                if (_this.prodotti.length < 1)
                    _this.noProdotti = true;
                return;
            }
            else {
                _this.prodotti = _this.prodotti.concat(prodotti);
            }
        });
    };
    LabelProdottoComponent.prototype.getProdottiFiltrati = function (idCategoria, idProduttore, pMin, pMax, lastKey, batch) {
        var _this = this;
        this.filtroService.getCatalogoFiltrato(pMin, pMax, lastKey, batch, idCategoria, idProduttore)
            .subscribe(function (prodotti) {
            _this.primiProdotti = true;
            _this.lkFiltro += 8;
            if (prodotti.length < 8) {
                _this.prodotti = _this.prodotti.concat(prodotti);
                console.log(_this.prodotti);
                _this.finished = true;
                console.log("finito");
                if (_this.prodotti.length < 1)
                    _this.noProdotti = true;
                return;
            }
            else {
                _this.prodotti = _this.prodotti.concat(prodotti);
            }
        });
    };
    //Al click di aggiungi al carrello, se non esiste un ordine con stato carrello ne creo uno,
    //se no associo il prodotto al carrello già esistente
    LabelProdottoComponent.prototype.aggiungiAlCarrello = function (prodotto) {
        var _this = this;
        if (!this.sharedProvider.isLogged()) {
            return this.router.navigateByUrl("/login");
        }
        if (prodotto.qtaProdotto < 1) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                html: '<h3>Prodotto esaurito!</h3>',
                timer: 1500,
                showConfirmButton: false
            });
        }
        else {
            this.carrelloService.exsist(this.sharedProvider.getCurrentUser().idUser).subscribe(function (_ordine) {
                var ordine = _ordine;
                if (ordine) {
                    //incapsulamento
                    _this.carrelloService.controlliQta(prodotto, ordine.idOrdine, 1);
                }
                else
                    _this.carrelloService.aggiungiAlCarrello(prodotto, 1);
            });
        }
    };
    //PARTE ADMIN
    //se l'admin clicca su cancella gli viene chiesta la conferma
    LabelProdottoComponent.prototype.clickCancella = function (catalogo) {
        this.cancella(catalogo);
    };
    LabelProdottoComponent.prototype.cancella = function (catalogo) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            type: 'question',
            title: 'Vuoi cancellare il prodotto?',
            text: 'Non puoi tornare indietro...',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancellato', 'Il prodotto è stato eliminato', 'success');
                //riga di codice che serve per eliminare in tempo reale dalla view i prodotti
                _this.prodotti = _this.prodotti.filter(function (p) { return p !== catalogo; });
                _this.catalogoService.deleteCatalogo(catalogo).subscribe(function (res) { });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Salvato', 'Il prodotto non è stato cancellato', 'error');
            }
        });
    };
    LabelProdottoComponent.prototype.modifica = function (prodotto) {
        this.sharedProvider.setProdotto(prodotto);
    };
    // When the user clicks on the button, scroll to the top of the document
    LabelProdottoComponent.prototype.topFunction = function () {
        document.body.scrollTop = 430;
        document.documentElement.scrollTop = 430;
    };
    LabelProdottoComponent.prototype.dettaglio = function (id) {
        this.router.navigateByUrl("/dettaglio/" + id);
    };
    LabelProdottoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-label-prodotto',
            template: __webpack_require__(/*! ./label-prodotto.component.html */ "./src/app/homepage/label-prodotto/label-prodotto.component.html"),
            styles: [__webpack_require__(/*! ./label-prodotto.component.css */ "./src/app/homepage/label-prodotto/label-prodotto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            src_app_service_carrello_service__WEBPACK_IMPORTED_MODULE_3__["CarrelloService"],
            src_app_service_filtro_service__WEBPACK_IMPORTED_MODULE_7__["FiltroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_service_share_provider_service__WEBPACK_IMPORTED_MODULE_6__["ShareProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LabelProdottoComponent);
    return LabelProdottoComponent;
}());



/***/ }),

/***/ "./src/app/inserisci-prodotto/inserisci-prodotto.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/inserisci-prodotto/inserisci-prodotto.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".unicoPerRiga{\r\n    width: 80%;\r\n}\r\n.doppioPerRiga{\r\n    width: 40%;\r\n}\r\n.contenitoreInserisciProdotto{\r\n    text-align: center;\r\n    width: 500px;\r\n    margin: auto;\r\n}\r\n.contenitoreFormInserisciProdotto{\r\n    text-align: center;\r\n    border: 1px #ddd solid;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n.contenitoreCampiInserisciProdotto{\r\n    padding:20px 30px;\r\n}\r\n.contenitoreFoto{\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n}\r\n.fotoLabel{\r\n    border-radius: 10px;\r\n    max-width: 100%;\r\n    max-height: 200px;\r\n    min-height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zZXJpc2NpLXByb2RvdHRvL2luc2VyaXNjaS1wcm9kb3R0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2luc2VyaXNjaS1wcm9kb3R0by9pbnNlcmlzY2ktcHJvZG90dG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bmljb1BlclJpZ2F7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5kb3BwaW9QZXJSaWdhe1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4uY29udGVuaXRvcmVJbnNlcmlzY2lQcm9kb3R0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29udGVuaXRvcmVGb3JtSW5zZXJpc2NpUHJvZG90dG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250ZW5pdG9yZUNhbXBpSW5zZXJpc2NpUHJvZG90dG97XHJcbiAgICBwYWRkaW5nOjIwcHggMzBweDtcclxufVxyXG4uY29udGVuaXRvcmVGb3Rve1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5mb3RvTGFiZWx7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/inserisci-prodotto/inserisci-prodotto.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inserisci-prodotto/inserisci-prodotto.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isAdmin\">\r\n  <h2>Non hai i permessi per visualizzare questa pagina.</h2>\r\n  <br>\r\n  <a routerLink=\"/homepage\"><button mat-raised-button color=\"primary\">Vai alla homepage</button></a>\r\n</div>\r\n\r\n<div *ngIf=\"isAdmin\" class=\"contenitoreInserisciProdotto\">\r\n       \r\n    <div class=\"contenitoreFormInserisciProdotto\">\r\n        <h3 *ngIf=\"!this.sharedProvider.getProdotto()\">Inserisci prodotto</h3>\r\n        <h3 *ngIf=\"this.sharedProvider.getProdotto()\">Modifica prodotto</h3>\r\n        <div class=\"contenitoreCampiInserisciProdotto\">\r\n          <form name=\"catalogo\" #catalogo = \"ngForm\">\r\n\r\n            <mat-form-field appearance=\"outline\"\r\n                            class=\"unicoPerRiga\">\r\n                <mat-label>Nome prodotto</mat-label>\r\n                    <input  matInput placeholder=\"Inserisci il nome\" name=\"nomeProdotto\"\r\n                            [(ngModel)]=\"prodottoData.nomeProdotto\" required>\r\n            </mat-form-field>\r\n\r\n              <br>\r\n\r\n            <mat-form-field appearance=\"outline\"\r\n                            class=\"doppioPerRiga\">\r\n                <mat-label>Prezzo</mat-label>\r\n                  <input  matInput type=\"number\" placeholder=\"Inserisci il prezzo\"\r\n                          max=\"1000\" min=\"0\" name=\"prezzoProdotto\"\r\n                          [(ngModel)]=\"prodottoData.prezzoProdotto\" required>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\"\r\n                            class=\"doppioPerRiga\">\r\n                <mat-label>Quantità</mat-label>\r\n                    <input  matInput type=\"number\" placeholder=\"Inserisci la quantità\"\r\n                            name=\"qtaProdotto\" [(ngModel)]=\"prodottoData.qtaProdotto\" required>\r\n            </mat-form-field>\r\n\r\n            <br>\r\n            <mat-form-field style=\"width: 80%;height: 110px;\" appearance=\"outline\">\r\n              <mat-label>Descrizione</mat-label>\r\n                  <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"2\" cdkAutosizeMaxRows=\"5\" maxlength=\"250\"\r\n                            placeholder=\"Inserisci la descrizione\" name=\"descrProdotto\" \r\n                            [(ngModel)]=\"prodottoData.descrProdotto\" required>\r\n                  </textarea>\r\n                </mat-form-field>\r\n            \r\n            <!--Opzione inserisci-->  \r\n            <mat-form-field *ngIf=\"!this.sharedProvider.getProdotto()\" class=\"doppioPerRiga\" appearance=\"outline\" >\r\n                <mat-label>Produttore</mat-label>\r\n                    <input type=\"text\" \r\n                    placeholder=\"scegli produttore\" \r\n                    [matAutocomplete] = \"prod\"\r\n                    name=\"idProduttore\"\r\n                    matInput>\r\n              <mat-autocomplete #prod=\"matAutocomplete\" >\r\n                <mat-option *ngFor=\"let produttore of produttori\" \r\n                            value=\"{{produttore.nomeProduttore}}\"\r\n                            (click)=\"setProduttore(produttore.idProduttore)\">\r\n                  {{produttore.nomeProduttore}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"!this.sharedProvider.getProdotto()\" class=\"doppioPerRiga\" appearance=\"outline\" >\r\n                <mat-label>Categoria</mat-label>\r\n                <input type=\"text\" \r\n                placeholder=\"scegli categoria\" \r\n                [matAutocomplete] = \"categoria\"\r\n                name=\"idCategoria\"\r\n                matInput>\r\n          <mat-autocomplete #categoria=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let categoria of categorie\"\r\n                        value=\"{{categoria.nomeCategoria}}\"\r\n                        (click)=\"setCategoria(categoria.idCategoria)\">\r\n              {{categoria.nomeCategoria}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n          <!--Opzione modifica-->\r\n          <mat-form-field *ngIf=\"this.sharedProvider.getProdotto()\" class=\"doppioPerRiga\" appearance=\"outline\" >\r\n              <mat-label>Produttore</mat-label>\r\n                  <input type=\"text\" \r\n                  placeholder=\"scegli produttore\" \r\n                  [matAutocomplete] = \"prod\"\r\n                  name=\"idProduttore\"\r\n                  value=\"{{nomeProduttore}}\"\r\n                  matInput>\r\n            <mat-autocomplete #prod=\"matAutocomplete\" >\r\n              <mat-option *ngFor=\"let produttore of produttori\" \r\n                          value=\"{{produttore.nomeProduttore}}\"\r\n                          (click)=\"setProduttore(produttore.idProduttore)\">\r\n                {{produttore.nomeProduttore}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf=\"this.sharedProvider.getProdotto()\" class=\"doppioPerRiga\" appearance=\"outline\" >\r\n              <mat-label>Categoria</mat-label>\r\n              <input type=\"text\" \r\n              placeholder=\"scegli categoria\" \r\n              [matAutocomplete] = \"categoria\"\r\n              name=\"idCategoria\"\r\n              value=\"{{nomeCategoria}}\"\r\n              matInput>\r\n        <mat-autocomplete #categoria=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let categoria of categorie\"\r\n                      value=\"{{categoria.nomeCategoria}}\"\r\n                      (click)=\"setCategoria(categoria.idCategoria)\">\r\n            {{categoria.nomeCategoria}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n\r\n          <label class=\"contenitoreFoto\">\r\n            <img  [src]=\"imageUrl\"\r\n                  class=\"fotoLabel\">\r\n            <br>\r\n            <label for=\"bottoneScegli\">Scegli un'immagine</label>\r\n            <br>\r\n            <input id=\"bottoneScegli\" type=\"file\" accept=\"image/*\" (change)=\"onFileSelected($event)\">\r\n          </label>\r\n          <div class=\"imageDisplay\">\r\n          </div>\r\n          <br>\r\n          <button *ngIf=\"!this.sharedProvider.getProdotto()\" mat-raised-button color=\"primary\"\r\n                  [disabled]=\"catalogo.invalid\"\r\n                  (click)=\"onSubmit()\" (click)=\"catalogo.reset()\">\r\n            Invia\r\n          </button>\r\n\r\n          <button *ngIf=\"this.sharedProvider.getProdotto()\" mat-raised-button color=\"primary\"\r\n                  [disabled]=\"catalogo.invalid\"\r\n                  (click)=\"modificaProdotto()\" (click)=\"catalogo.reset()\">\r\n            Modifica\r\n          </button>\r\n        </form>\r\n        <button mat-raised-button color=\"accent\" (click)=\"goBack()\">torna indietro</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inserisci-prodotto/inserisci-prodotto.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inserisci-prodotto/inserisci-prodotto.component.ts ***!
  \********************************************************************/
/*! exports provided: InserisciProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserisciProdottoComponent", function() { return InserisciProdottoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inserisci_prodotto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inserisci-prodotto.service */ "./src/app/inserisci-prodotto/inserisci-prodotto.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Catalogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Catalogo */ "./src/app/model/Catalogo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_catalogo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/catalogo.service */ "./src/app/service/catalogo.service.ts");
/* harmony import */ var _service_categoria_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/categoria.service */ "./src/app/service/categoria.service.ts");
/* harmony import */ var _service_produttore_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/produttore.service */ "./src/app/service/produttore.service.ts");











var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var InserisciProdottoComponent = /** @class */ (function () {
    function InserisciProdottoComponent(imageService, location, sharedProvider, router, route, catalogoService, categoriaService, produttoreService) {
        this.imageService = imageService;
        this.location = location;
        this.sharedProvider = sharedProvider;
        this.router = router;
        this.route = route;
        this.catalogoService = catalogoService;
        this.categoriaService = categoriaService;
        this.produttoreService = produttoreService;
        this.imageUrl = "/assets/img/default-image.jpg";
        this.reader = new FileReader();
        //admin
        this.isAdmin = false;
        //Campi form
        this.prodottoData = new _model_Catalogo__WEBPACK_IMPORTED_MODULE_3__["Catalogo"]();
        this._subscriptions = [];
    }
    InserisciProdottoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscriptions.push(
        // Subscribe to the ActivatedRoute for paramMap changes 
        this.route.queryParamMap.subscribe(function (paramMap) {
            // Retrieve the view named parameter
            var type = _this.route.snapshot.queryParamMap.get('type');
            // Check if we have a defined view
            if (type == 'insert') {
                // Trigger the view switch
                _this.clearProdotto(_this.prodottoData);
            }
        }));
        if (this.sharedProvider.getCurrentUser() != null)
            if (this.sharedProvider.getCurrentUser().amministratore == 1) {
                this.categoriaService.getAll().subscribe(function (categorie) { _this.categorie = categorie; });
                this.produttoreService.getAll().subscribe(function (produttori) { _this.produttori = produttori; });
                this.isAdmin = true;
                if (this.route.snapshot.queryParamMap.get('type') == 'edit') {
                    this.catalogoService.copiaProdotto(this.prodottoData, this.sharedProvider.getProdotto());
                    this.cercaCategoria(this.sharedProvider.getProdotto().idCategoria);
                    this.cercaProduttore(this.sharedProvider.getProdotto().idProduttore);
                    this.imageUrl = "data:image/png;base64," + this.prodottoData.img;
                }
            }
    };
    InserisciProdottoComponent.prototype.ngOnDestroy = function () {
        this.clearProdotto(this.prodottoData);
        this.sharedProvider.setProdotto(null);
        this._subscriptions.forEach(function (subscription) { subscription.unsubscribe(); });
    };
    InserisciProdottoComponent.prototype.inserisciPrezzo = function (prezzo) {
        this.prodottoData.prezzoProdotto = parseInt(prezzo.toFixed(2));
    };
    //quando viene selezionato il file
    InserisciProdottoComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        //show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
    };
    //quando viene cliccato il bottone upload
    InserisciProdottoComponent.prototype.onUpload = function () {
        this.imageService.uploadImage(this.selectedFile).subscribe(function (res) {
        });
    };
    InserisciProdottoComponent.prototype.onSubmit = function () {
        //if(this.selectedFile == null)
        //  return;
        var _this = this;
        //si fa una insert di un catalogo senza immagine, nella callback di subscribe si fa una update del record con l'invio della foto con rotta dedicata "/api/upload"
        this.imageService.inserisciProdottoSenzaImg(this.prodottoData).subscribe(function (res) {
            if (_this.selectedFile != null) {
                _this.imageService.aggiungiImg(res.idCatalogo, _this.selectedFile).subscribe(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'success',
                        text: 'Il prodotto è stato inserito correttamente nel catalogo',
                        timer: 1500
                    });
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    text: 'Il prodotto è stato inserito nel catalogo senza immagine'
                });
            }
        });
    };
    InserisciProdottoComponent.prototype.goBack = function () {
        this.location.back();
    };
    InserisciProdottoComponent.prototype.modificaProdotto = function () {
        var _this = this;
        //se il prodotto non è stato modificato non faccio chiamate
        if (this.catalogoService.equals(this.prodottoData, this.sharedProvider.getProdotto()) &&
            this.selectedFile == undefined)
            this.router.navigateByUrl("homepage");
        else {
            this.catalogoService.updateProdotto(this.prodottoData).subscribe(function (res) {
                _this.sharedProvider.setUrl("homepage");
                if (_this.selectedFile != undefined) {
                    _this.imageService.aggiungiImg(_this.prodottoData.idCatalogo, _this.selectedFile).subscribe(function (res) {
                        _this.router.navigateByUrl("redirect");
                    }, function (err) { return console.log(err); });
                }
                else {
                    _this.router.navigateByUrl("homepage");
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Prodotto modificato!',
                    type: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                _this.imageUrl = "/assets/img/default-image.jpg";
            }, function (err) { return console.log(err); });
        }
    };
    InserisciProdottoComponent.prototype.clearProdotto = function (catalogo) {
        catalogo.idCatalogo = null;
        catalogo.nomeProdotto = null;
        catalogo.descrProdotto = null;
        catalogo.prezzoProdotto = null;
        catalogo.qtaProdotto = null;
        catalogo.idCategoria = null;
        catalogo.idProduttore = null;
        return catalogo;
    };
    InserisciProdottoComponent.prototype.setCategoria = function (id) {
        this.prodottoData.idCategoria = id;
    };
    InserisciProdottoComponent.prototype.setProduttore = function (id) {
        this.prodottoData.idProduttore = id;
    };
    InserisciProdottoComponent.prototype.cercaCategoria = function (idCategoria) {
        var _this = this;
        this.categoriaService.getOne(idCategoria).subscribe(function (_) { _this.nomeCategoria = _.nomeCategoria; });
    };
    InserisciProdottoComponent.prototype.cercaProduttore = function (idProduttore) {
        var _this = this;
        this.produttoreService.getOne(idProduttore).subscribe(function (_) { _this.nomeProduttore = _.nomeProduttore; });
    };
    InserisciProdottoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-inserisci-prodotto',
            template: __webpack_require__(/*! ./inserisci-prodotto.component.html */ "./src/app/inserisci-prodotto/inserisci-prodotto.component.html"),
            styles: [__webpack_require__(/*! ./inserisci-prodotto.component.css */ "./src/app/inserisci-prodotto/inserisci-prodotto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_inserisci_prodotto_service__WEBPACK_IMPORTED_MODULE_1__["InserisciProdottoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _service_share_provider_service__WEBPACK_IMPORTED_MODULE_6__["ShareProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _service_catalogo_service__WEBPACK_IMPORTED_MODULE_8__["CatalogoService"],
            _service_categoria_service__WEBPACK_IMPORTED_MODULE_9__["CategoriaService"],
            _service_produttore_service__WEBPACK_IMPORTED_MODULE_10__["ProduttoreService"]])
    ], InserisciProdottoComponent);
    return InserisciProdottoComponent;
}());



/***/ }),

/***/ "./src/app/inserisci-prodotto/inserisci-prodotto.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/inserisci-prodotto/inserisci-prodotto.service.ts ***!
  \******************************************************************/
/*! exports provided: InserisciProdottoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserisciProdottoService", function() { return InserisciProdottoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
var InserisciProdottoService = /** @class */ (function () {
    function InserisciProdottoService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/";
    }
    InserisciProdottoService.prototype.uploadImage = function (file) {
        var fd = new FormData();
        fd.append('file', file, file.name);
        console.log(fd);
        return this.http.post(this.url + "upload", fd, {
            reportProgress: true
        });
    };
    InserisciProdottoService.prototype.inserisciProdottoSenzaImg = function (catalogo) {
        console.log(catalogo);
        return this.http.post(this.url + "catalogo", catalogo);
    };
    /** PUT: aggiorna l'immagine di un catalogo esistente */
    InserisciProdottoService.prototype.aggiungiImg = function (idCatalogo, file) {
        var fd = new FormData();
        fd.append('file', file, file.name);
        return this.http.put(this.url + "upload/" + idCatalogo, fd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("catalogo aggiornato con id=" + idCatalogo); }));
    };
    InserisciProdottoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InserisciProdottoService);
    return InserisciProdottoService;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = "http://localhost:8080/api/login";
    }
    /**Login: verifica se lo user/mail e password esistono nel DB*/
    LoginService.prototype.loginUser = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    LoginService.prototype.setHomepage = function (homepage) {
        this.homepage = homepage;
    };
    LoginService.prototype.getHomepage = function () {
        return this.homepage;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    width: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitoreComponente\">\r\n\r\n    <div class=\"contenitoreElementi\">\r\n        <h2>Login</h2>\r\n        <div class=\"spazioElementi\">\r\n            <form name=\"login\" (ngSubmit)=\"onSubmit()\" #login=\"ngForm\">\r\n            \r\n                <div layout=\"column\" layout-align=\"center center\">\r\n            \r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Username o mail</mat-label>\r\n                            \r\n                            <input id=\"username\" [(ngModel)]=\"loginUserData.username\"\r\n                                name=\"username\" matInput placeholder=\"Inserisci username o mail\" required>\r\n\r\n                    </mat-form-field>\r\n                </div>\r\n                    <br>\r\n                <div layout=\"column\" layout-align=\"center center\">\r\n            \r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Password</mat-label>\r\n                            \r\n                            <input id=\"password\" [(ngModel)]=\"loginUserData.password\" name=\"password\"\r\n                                    matInput placeholder=\"Inserisci la password\" [type]=\"hide ? 'text' : 'password'\" required>\r\n\r\n                            <mat-icon matSuffix (click)=\"hide = !hide\">\r\n                                {{hide ? 'visibility' : 'visibility_off'}}\r\n                            </mat-icon>\r\n\r\n                            <mat-hint>\r\n                                <a (click)=\"openDialog()\">Recupero password</a>\r\n                            </mat-hint>\r\n                        \r\n                    </mat-form-field>\r\n                </div>\r\n                <br><br>\r\n                <div *ngIf=\"datiErrati\">\r\n                    <h4>Dati errati</h4>\r\n                </div>\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"login.invalid\"\r\n                          type=\"submit\">Invia</button>\r\n                <div>\r\n                    <br>Non hai un account? <a routerLink=\"/registrazione\"><b>Registrati </b></a>ora!\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recupero_psw_recuperopassword_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../recupero-psw/recuperopassword.service */ "./src/app/recupero-psw/recuperopassword.service.ts");
/* harmony import */ var src_app_service_share_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var src_app_service_carrello_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/carrello.service */ "./src/app/service/carrello.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/** per il recupero password */






/** fine finestra dialogo recupero password */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, route, dialog, recuperoPwdService, shareProvider, carrelloService, location) {
        this.loginService = loginService;
        this.route = route;
        this.dialog = dialog;
        this.recuperoPwdService = recuperoPwdService;
        this.shareProvider = shareProvider;
        this.carrelloService = carrelloService;
        this.location = location;
        this.user = new src_app_model_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.homepage = false;
        this.loginUserData = new src_app_model_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.submitted = false;
        this.datiErrati = false;
    }
    /** metodi per creazione ,richiamo e visualizzazione della finestra di dialogo */
    //recupero psw
    LoginComponent.prototype.openDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var email;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: "Inserisci la mail",
                            input: "email",
                            inputPlaceholder: "Indirizzo email",
                        })];
                    case 1:
                        email = (_a.sent()).value;
                        if (email) {
                            this.user.email = email;
                            this.recuperoPwdService.recuperoPwd(this.user).subscribe(function (res) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                    type: "success",
                                    text: "Email inviata a " + email,
                                }),
                                    function (err) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                            type: "error",
                                            text: "errore! " + err,
                                        });
                                    };
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** fine metodi dialogo  */
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.loginUser();
    };
    // ciao Utente
    LoginComponent.prototype.salutoUtente = function (user) {
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        Toast.fire({
            type: "success",
            title: "Ciao " + user.username,
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (this.submitted == false)
            return;
        this.loginService.loginUser(this.loginUserData).subscribe(
        //se il login va a buon fine, setto il currentUser nello shareProvider e
        // l'utente viene reindirizzato alla homepage
        function (user) {
            //se l'utente deve cambiare la psw provvisoria, lo reindirizzo in recuperoPsw
            _this.shareProvider.setCurrentUser(user);
            if (!user.resetPassword) {
                _this.carrelloService.getAll(user.idUser).subscribe();
                console.log(user);
                _this.salutoUtente(user);
                if (_this.loginService.getHomepage()) {
                    _this.loginService.setHomepage(false);
                    _this.route.navigateByUrl("/homepage");
                }
                else
                    _this.location.back();
            }
            else {
                _this.route.navigateByUrl("/recuperoPsw");
            }
        }, function (err) {
            console.log(err);
            _this.datiErrati = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _recupero_psw_recuperopassword_service__WEBPACK_IMPORTED_MODULE_7__["RecuperoPasswordService"],
            src_app_service_share_provider_service__WEBPACK_IMPORTED_MODULE_8__["ShareProviderService"],
            src_app_service_carrello_service__WEBPACK_IMPORTED_MODULE_9__["CarrelloService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");








































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                //  MdcCardModule,
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__["MatBadgeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/model/Catalogo.ts":
/*!***********************************!*\
  !*** ./src/app/model/Catalogo.ts ***!
  \***********************************/
/*! exports provided: Catalogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalogo", function() { return Catalogo; });
var Catalogo = /** @class */ (function () {
    function Catalogo() {
    }
    //tostring...
    Catalogo.prototype.clona = function (catalogo) {
        this.idCatalogo = catalogo.idCatalogo;
        this.nomeProdotto = catalogo.nomeProdotto;
        this.descrProdotto = catalogo.descrProdotto;
        this.prezzoProdotto = catalogo.prezzoProdotto;
        this.qtaProdotto = catalogo.qtaProdotto;
        this.img = catalogo.img;
    };
    return Catalogo;
}());



/***/ }),

/***/ "./src/app/model/Prodotto.ts":
/*!***********************************!*\
  !*** ./src/app/model/Prodotto.ts ***!
  \***********************************/
/*! exports provided: Prodotto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prodotto", function() { return Prodotto; });
var Prodotto = /** @class */ (function () {
    function Prodotto() {
    }
    return Prodotto;
}());



/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    //Costruttore volendo eliminabile 
    /* constructor(user: User){
         this.username = user.username;
         this.email = user.email;
         this.password = user.password;
         this.nome = user.nome;
         this.cognome = user.cognome;
         this.indirizzo = user.indirizzo;
         this.nCivico = user.nCivico;
         this.citta = user.citta;
         this.cap = user.cap;
         this.amministratore = 0;
     }*/
    function User() {
    }
    //Metodo per settare i dati
    User.prototype.setDati = function (username, email, password, nome, cognome, indirizzo, numeroCivico, citta, cap, amministratore) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
        this.numeroCivico = numeroCivico;
        this.citta = citta;
        this.cap = cap;
        this.amministratore = amministratore;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/modifica-profilo/modifica-profilo.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modifica-profilo/modifica-profilo.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhLXByb2ZpbG8vbW9kaWZpY2EtcHJvZmlsby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modifica-profilo/modifica-profilo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modifica-profilo/modifica-profilo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n    <form name=\"modifica\" (ngSubmit)=\"onSubmit()\" #modifica = \"ngForm\">\r\n      <mat-form-field style=\"width:20%\" appearance=\"outline\">\r\n          <mat-label>Nome </mat-label>\r\n            <input matInput placeholder=\"Nome\"[(ngModel)]=\"nome\" name=\"nome\" >\r\n      </mat-form-field>\r\n  \r\n      <mat-form-field style=\"width:20%\" appearance=\"outline\">\r\n          <mat-label>Cognome</mat-label>\r\n            <input matInput placeholder=\"Cognome\" [(ngModel)]=\"cognome\" name=\"cognome\" >\r\n      </mat-form-field>\r\n      <br>\r\n  \r\n      <mat-form-field style=\"width:40%\" appearance=\"outline\">\r\n          <mat-label>Username</mat-label>\r\n            <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" >\r\n      </mat-form-field>\r\n      <br>\r\n  \r\n      <mat-form-field style=\"width:40%\" appearance=\"outline\">\r\n          <mat-label>Email</mat-label>\r\n            <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" value=\"valorePrecedenteLogin\" disabled>\r\n      </mat-form-field>\r\n      <br>\r\n  \r\n      <mat-form-field style=\"width:10%\" appearance=\"outline\">\r\n          <mat-label>Città</mat-label>\r\n          <input matInput placeholder=\"Città\" [(ngModel)]=\"citta\" name=\"citta\" value=\"valorePrecedenteLogin\">\r\n      </mat-form-field>\r\n    \r\n      <mat-form-field style=\"width:10%\" appearance=\"outline\">\r\n          <mat-label>Via</mat-label>\r\n          <input matInput placeholder=\"Via\" [(ngModel)]=\"indirizzo\" name=\"indirizzo\">\r\n      </mat-form-field>\r\n    \r\n      <mat-form-field style=\"width:10%\" appearance=\"outline\">\r\n          <mat-label>Numero civico</mat-label>\r\n          <input matInput placeholder=\"Numero civico\" [(ngModel)]=\"nCivico\" name=\"nCivico\">\r\n      </mat-form-field>\r\n    \r\n      <mat-form-field style=\"width:10%\" appearance=\"outline\">\r\n          <mat-label>CAP</mat-label>\r\n          <input matInput placeholder=\"CAP\" [(ngModel)]=\"cap\" name=\"cap\">\r\n      </mat-form-field>\r\n      <br>\r\n  \r\n      <a routerLink=\"/profilo\"><button type=\"submit\" mat-raised-button name=\"salva\" color=\"primary\">salva</button></a>\r\n  \r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/modifica-profilo/modifica-profilo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modifica-profilo/modifica-profilo.component.ts ***!
  \****************************************************************/
/*! exports provided: ModificaProfiloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaProfiloComponent", function() { return ModificaProfiloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModificaProfiloComponent = /** @class */ (function () {
    function ModificaProfiloComponent() {
    }
    ModificaProfiloComponent.prototype.ngOnInit = function () { };
    ModificaProfiloComponent.prototype.onSubmit = function () {
        console.log(this.user.toString());
    };
    ModificaProfiloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-modifica-profilo",
            template: __webpack_require__(/*! ./modifica-profilo.component.html */ "./src/app/modifica-profilo/modifica-profilo.component.html"),
            styles: [__webpack_require__(/*! ./modifica-profilo.component.css */ "./src/app/modifica-profilo/modifica-profilo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModificaProfiloComponent);
    return ModificaProfiloComponent;
}());



/***/ }),

/***/ "./src/app/prodotti-trovati/prodotti-trovati.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/prodotti-trovati/prodotti-trovati.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenitoreDettaglioRisultato{\r\n    width: -webkit-fill-available;\r\n}\r\n.dettaglioRisultato{\r\n    width:50%;\r\n    min-height: 150px;\r\n}\r\n.contenitoreFotoRisultato{\r\n    width: 50%;\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n  }\r\n.fotoLabel{\r\n    border-radius: 10px;\r\n    max-width: 100%;\r\n    max-height: 200px;\r\n    min-height: 200px;\r\n}\r\n.imgRisultato{\r\n    max-width:125px;\r\n    max-height:150px;\r\n    margin: auto;\r\n}\r\n.nomeProdotto{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZG90dGktdHJvdmF0aS9wcm9kb3R0aS10cm92YXRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2RvdHRpLXRyb3ZhdGkvcHJvZG90dGktdHJvdmF0aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbml0b3JlRGV0dGFnbGlvUmlzdWx0YXRve1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLmRldHRhZ2xpb1Jpc3VsdGF0b3tcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5jb250ZW5pdG9yZUZvdG9SaXN1bHRhdG97XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuZm90b0xhYmVse1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuLmltZ1Jpc3VsdGF0b3tcclxuICAgIG1heC13aWR0aDoxMjVweDtcclxuICAgIG1heC1oZWlnaHQ6MTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5ub21lUHJvZG90dG97XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/prodotti-trovati/prodotti-trovati.component.html":
/*!******************************************************************!*\
  !*** ./src/app/prodotti-trovati/prodotti-trovati.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitoreComponente\">\r\n\t<div *ngIf=\"risultati\" class=\"contenitoreElementi\">\r\n\t\t<h2>Risultati ricerca</h2>\r\n\t\t<div class=\"spazioElementi\" *ngFor=\"let prodotto of risultati\">\r\n\t\t\t\r\n\t\t\t<table class=\"contenitoreDettaglioRisultato\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"contenitoreFotoRisultato\">\r\n\t\t\t\t\t\t<a routerLink=\"/dettaglio/{{prodotto.idCatalogo}}\"> \r\n\t\t\t\t\t\t\t<img src=\"data:image/png;base64,{{prodotto.img}}\" class=\"fotoLabel\">\r\n\t\t\t\t\t\t</a>\t\t\t\t\t\t\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"dettaglioRisultato\">\r\n\t\t\t\t\t\t\t<b class=\"nomeProdotto\" (click)=\"dettaglio(prodotto.idCatalogo)\">{{prodotto.nomeProdotto}}</b>\r\n\t\t\t\t\t\t<h4>€{{prodotto.prezzoProdotto}}</h4>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\r\n\t\t\t<hr>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"!finished\">\r\n\t\t\t<mat-spinner></mat-spinner>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"primiProdotti\"  style=\"width: 60%; text-align: center\"\r\n\t\t\t\t\t\t\t\tinfiniteScroll\r\n\t\t\t\t\t\t\t\t[infiniteScrollDistance]=\"200\"\r\n\t\t\t\t\t\t\t\t[infiniteScrollThrottle]=\"2000\"\r\n\t\t\t\t\t\t\t\t(scrolled)=\"onScroll()\">\r\n\t</div>\r\n\r\n\t<br />\r\n\r\n\t<div *ngIf=\"finished && risultati\">\r\n\r\n\t\t<button mat-raised-button color=\"accent\" (click)=\"topFunction()\">Torna su</button>\r\n\r\n\t</div>\r\n\r\n\t<br />\r\n\t<div *ngIf=\"!risultati\">\r\n\t\t<h3>Nessun prodotto trovato!</h3>\r\n\t</div>\r\n\t<div class=\"bottone indietro\">\r\n\t\t\t<button mat-raised-button color=\"accent\"\r\n\t\t\t\t\trouterLink=\"../homepage\">\r\n\t\t\t\tHomepage\r\n\t\t\t</button>\r\n\t\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/prodotti-trovati/prodotti-trovati.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/prodotti-trovati/prodotti-trovati.component.ts ***!
  \****************************************************************/
/*! exports provided: ProdottiTrovatiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottiTrovatiComponent", function() { return ProdottiTrovatiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catalogo.service */ "./src/app/service/catalogo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProdottiTrovatiComponent = /** @class */ (function () {
    function ProdottiTrovatiComponent(catalogoService, router, route) {
        this.catalogoService = catalogoService;
        this.router = router;
        this.route = route;
        this.risultati = [];
        this.primiProdotti = false;
        this.finished = false;
        this.lastKey = 0;
        this.batch = 5;
        this.stringa = this.route.snapshot.queryParamMap.get('stringa');
        // Subscription collection so we can unsubscribe from them on destroy
        this._subscriptions = [];
    }
    // OnInit Hook, triggered each time the component is instantiated
    ProdottiTrovatiComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.stringa == '' || this.stringa == ' ') {
            this.router.navigateByUrl("homepage");
        }
        else {
            // Add to our subscriptions collection
            this._subscriptions.push(
            // Subscribe to the ActivatedRoute for paramMap changes 
            this.route.queryParamMap.subscribe(function (paramMap) {
                console.log(paramMap);
                // Retrieve the view named parameter
                var stringa = _this.route.snapshot.queryParamMap.get('stringa');
                // Check if we have a defined view
                if (stringa) {
                    // Trigger the view switch
                    _this.risultati = [];
                    _this.lastKey = 0;
                    _this.finished = false;
                    _this.ricercaProdotto(stringa);
                }
            }));
        }
    };
    // OnDestroy Hook
    ProdottiTrovatiComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from each Subscription
        this._subscriptions.forEach(function (subscription) { subscription.unsubscribe(); });
    };
    ProdottiTrovatiComponent.prototype.onScroll = function () {
        if (this.finished)
            return;
        this.ricercaProdotto(this.stringa);
    };
    ProdottiTrovatiComponent.prototype.ricercaProdotto = function (stringa) {
        var _this = this;
        if (stringa == "" || stringa == " ") {
            this.risultati = null;
            return;
        }
        this.catalogoService.ricercaTutti(stringa, this.lastKey, this.batch).subscribe(function (prodotti) {
            _this.primiProdotti = true;
            if (prodotti.length < 1) {
                _this.finished = true;
                if (_this.risultati.length < 1)
                    _this.risultati = null;
            }
            else {
                _this.lastKey += 5;
                _this.risultati = _this.risultati.concat(prodotti);
                if (prodotti.length < 5)
                    _this.finished = true;
            }
        });
    };
    ProdottiTrovatiComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    ProdottiTrovatiComponent.prototype.dettaglio = function (id) {
        this.router.navigateByUrl("/dettaglio/" + id);
    };
    ProdottiTrovatiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prodotti-trovati',
            template: __webpack_require__(/*! ./prodotti-trovati.component.html */ "./src/app/prodotti-trovati/prodotti-trovati.component.html"),
            styles: [__webpack_require__(/*! ./prodotti-trovati.component.css */ "./src/app/prodotti-trovati/prodotti-trovati.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProdottiTrovatiComponent);
    return ProdottiTrovatiComponent;
}());



/***/ }),

/***/ "./src/app/profilo/profilo.component.css":
/*!***********************************************!*\
  !*** ./src/app/profilo/profilo.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenitoreStorico{\r\n    text-align: center;\r\n    width: 500px;\r\n    margin: auto;\r\n}\r\n.contenitoreAnagraficaProfilo{\r\n    text-align: center;\r\n    border: 2px rgb(150, 150, 150) solid;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    margin-top: 25px;\r\n}\r\n.contenitoreCampiProfilo{\r\n    padding:20px 30px;\r\n}\r\ntr{\r\n    width: 100%;\r\n}\r\ntd{\r\n    width:50%;\r\n}\r\ntable{\r\n    width: -webkit-fill-available;\r\n    text-align: center;\r\n}\r\n.icona{\r\n    position: absolute;\r\n    left: 30px;\r\n    z-index: -1;\r\n    transform: scale(0.75);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsby9wcm9maWxvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbG8vcHJvZmlsby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbml0b3JlU3Rvcmljb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29udGVuaXRvcmVBbmFncmFmaWNhUHJvZmlsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHJnYigxNTAsIDE1MCwgMTUwKSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLmNvbnRlbml0b3JlQ2FtcGlQcm9maWxve1xyXG4gICAgcGFkZGluZzoyMHB4IDMwcHg7XHJcbn1cclxudHJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG50ZHtcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pY29uYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profilo/profilo.component.html":
/*!************************************************!*\
  !*** ./src/app/profilo/profilo.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n\t<div *ngIf=\"!isLogged\">\r\n\r\n\t\t<h2>Non hai effettuato il login. Accedi per visualizzare il tuo profilo</h2>\r\n\r\n\t\t<a routerLink=\"/login\">\r\n\t\t\t<button mat-raised-button name=\"accedi\" color=\"primary\">Accedi</button>\r\n\t\t</a>\r\n\t\r\n\t</div>\r\n\r\n\t<div *ngIf=\"isLogged\">\r\n\t\t\r\n\t\t<div class=\"contenitoreStorico\">\r\n\t\t\t\r\n\t\t\t<div class=\"contenitoreAnagraficaProfilo\">\r\n\t\t\t\t<h2>Profilo</h2>\r\n\t\t\t\t<div class=\"contenitoreCampiProfilo\">\t\t\r\n\r\n\t\t\t\t\t<table>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>Nome</td>\r\n\t\t\t\t\t\t\t<td>{{datiUser.nome}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>Cognome</td>\r\n\t\t\t\t\t\t\t<td>{{datiUser.cognome}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t<table>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"icona\">build</mat-icon>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tUsername\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<label (click)=\"modificaUsername()\">\r\n\t\t\t\t\t\t\t\t\t{{datiUser.username}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t<table>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>Email</td>\r\n\t\t\t\t\t\t\t<td>{{datiUser.email}}</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t<table>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"icona\">build</mat-icon>Password\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t<table>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"icona\">build</mat-icon>Indirizzo</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<label (click)=\"modificaIndirizzo()\">\r\n\t\t\t\t\t\t\t\t\t{{datiUser.indirizzo}} {{datiUser.numeroCivico}}, {{datiUser.citta}} {{datiUser.cap}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\t\t\t\t\t\r\n\t\t\t\t\t</table>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/profilo/profilo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profilo/profilo.component.ts ***!
  \**********************************************/
/*! exports provided: ProfiloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfiloComponent", function() { return ProfiloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var ProfiloComponent = /** @class */ (function () {
    function ProfiloComponent(sharedProvider) {
        this.sharedProvider = sharedProvider;
        this.isLogged = this.sharedProvider.isLogged();
        this.datiUser = this.sharedProvider.getCurrentUser();
    }
    ProfiloComponent.prototype.modificaUsername = function () {
        var _this = this;
        var username = this.sharedProvider.getCurrentUser().username;
        var usernameCampo;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Inserisci il nuovo username",
            input: "text",
            inputValue: usernameCampo,
            showCancelButton: true,
            inputValidator: function (usernameCampo) {
                if (!usernameCampo)
                    return "Devi inserire qualcosa!";
                else {
                    if (usernameCampo == username)
                        return "Lo username è uguale al precendente!";
                    else {
                        _this.sharedProvider.user.username = usernameCampo;
                        return "Lo username è stato cambiato!";
                    }
                }
            },
        });
    };
    ProfiloComponent.prototype.modificaPassword = function () {
        console.log("richesta DB descriptatura pwd");
        var pwd = ""; //da prendere leggibile dal DB
        var pwdControllo = "";
        var pwdNuova = "";
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Inserisci la password precedente",
            input: "password",
            inputValue: pwdControllo,
            inputValidator: function (pwdControllo) {
                if (!pwdControllo)
                    return "Devi inserire qualcosa!";
                else {
                    if (pwdControllo == pwd)
                        return "La password è uguale alla precendente!";
                }
            },
        });
        //da finire
    };
    ProfiloComponent.prototype.modificaIndirizzo = function () {
        var via = this.sharedProvider.getCurrentUser().indirizzo;
        var citta = this.sharedProvider.getCurrentUser().citta;
        var numeroCivico = this.sharedProvider.getCurrentUser().numeroCivico;
        var cap = this.sharedProvider.getCurrentUser().cap;
        var viaCampo = "";
        var cittaCampo = "";
        var nCivicoCampo = "";
        var capCampo = "";
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Modifica indirizzo",
            html: 'Via <input class="swal2-input" id="via" type="text">' +
                'Numero civico <input class="swal2-input" id="nCivico" type="text">' +
                'Città <input class="swal2-input" id="citta" type="text">' +
                'CAP <input class="swal2-input" id="cap" type="number">',
            focusConfirm: false,
        });
        //da finire
    };
    ProfiloComponent.prototype.ngOnInit = function () { };
    ProfiloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profilo",
            template: __webpack_require__(/*! ./profilo.component.html */ "./src/app/profilo/profilo.component.html"),
            styles: [__webpack_require__(/*! ./profilo.component.css */ "./src/app/profilo/profilo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_share_provider_service__WEBPACK_IMPORTED_MODULE_2__["ShareProviderService"]])
    ], ProfiloComponent);
    return ProfiloComponent;
}());



/***/ }),

/***/ "./src/app/recupero-psw/recupero-psw.component.css":
/*!*********************************************************!*\
  !*** ./src/app/recupero-psw/recupero-psw.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    width: 80%;\r\n}\r\n.contenitoreRecuperoPwd{\r\n    text-align: center;\r\n    width: 500px;\r\n    margin: auto;\r\n}\r\n.contenitoreFormRecuperoPwd{\r\n    text-align: center;\r\n    border: 1px #ddd solid;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n.contenitoreCampiRecuperoPwd{\r\n    padding:20px 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjdXBlcm8tcHN3L3JlY3VwZXJvLXBzdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVjdXBlcm8tcHN3L3JlY3VwZXJvLXBzdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5jb250ZW5pdG9yZVJlY3VwZXJvUHdke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jb250ZW5pdG9yZUZvcm1SZWN1cGVyb1B3ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4ICNkZGQgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbnRlbml0b3JlQ2FtcGlSZWN1cGVyb1B3ZHtcclxuICAgIHBhZGRpbmc6MjBweCAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/recupero-psw/recupero-psw.component.html":
/*!**********************************************************!*\
  !*** ./src/app/recupero-psw/recupero-psw.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitoreRecuperoPwd\">\r\n\r\n\t<div class=\"contenitoreFormRecuperoPwd\">\r\n\t\t<h2>Reset Password</h2>\r\n\t\t<div class=\"contenitoreCampiRecuperoPwd\">\r\n\t\t\t<form [formGroup]=\"recuperoPsw\">      \r\n\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t<mat-label>Nuova Password</mat-label>\r\n\t\t\t<input matInput\r\n\t\t\t\t\tformControlName=\"password\" \r\n\t\t\t\t\t[type]=\"!hide ? 'password' : 'text'\"\r\n\t\t\t\t\trequired>\r\n\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">\r\n\t\t\t{{!hide ? 'visibility_off' : 'visibility'}}\r\n\t\t\t</mat-icon>\r\n\t\t\t<mat-error *ngIf=\"campoVuoto(getPassword)\">La passwsord è richiesta</mat-error>\r\n\t\t\t<mat-error *ngIf=\"!campoVuoto(getPassword) && getPassword.invalid\">La passwsord deve avere min. 8 caratteri</mat-error>\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t<mat-label>Conferma password</mat-label>\r\n\t\t\t<input matInput \r\n\t\t\t\t\ttype=\"password\"\r\n\t\t\t\t\tformControlName=\"confermaPassword\"\r\n\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-error *ngIf=\"getConfermaPassword.invalid && (getConfermaPassword.dirty || getConfermaPassword.touch)\">\r\n\t\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getConfermaPassword) && getConfermaPassword.errors['required']\">La password è obbligatorio</mat-error>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"!campoVuoto(getConfermaPassword) && getConfermaPassword.errors['compare']\">Le password non sono uguali</mat-error>\r\n\t\t\t\t\t</mat-error>\r\n\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<div class=\"bottoneInvioForm\">\r\n\t\t\t\t\t\t\t<button mat-raised-button\r\n\t\t\t\t\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"onSubmit()\"\r\n\t\t\t\t\t\t\t\t\t[disabled]=\"recuperoPsw.invalid\">Cambia password</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recupero-psw/recupero-psw.component.ts":
/*!********************************************************!*\
  !*** ./src/app/recupero-psw/recupero-psw.component.ts ***!
  \********************************************************/
/*! exports provided: RecuperoPswComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperoPswComponent", function() { return RecuperoPswComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_directive_compare_validators_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../custom-directive/compare-validators.directive */ "./src/custom-directive/compare-validators.directive.ts");
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var _recuperopassword_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recuperopassword.service */ "./src/app/recupero-psw/recuperopassword.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");









var RecuperoPswComponent = /** @class */ (function () {
    function RecuperoPswComponent(sharedProvider, recuperoPswService, route, loginService) {
        this.sharedProvider = sharedProvider;
        this.recuperoPswService = recuperoPswService;
        this.route = route;
        this.loginService = loginService;
        this.recuperoPsw = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16),
            ]),
            confermaPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", Object(_custom_directive_compare_validators_directive__WEBPACK_IMPORTED_MODULE_3__["compareValidation"])("password")),
        });
    }
    RecuperoPswComponent.prototype.ngOnInit = function () {
        this.userDaModificare = this.sharedProvider.getCurrentUser();
        this.sharedProvider.deleteCurrentUser();
    };
    RecuperoPswComponent.prototype.campoVuoto = function (campo) {
        if (((campo.dirty || campo.touched) && campo.value === null) ||
            campo.value === "" ||
            campo.value.lenght === 0)
            return true;
        else
            return false;
    };
    Object.defineProperty(RecuperoPswComponent.prototype, "getPassword", {
        get: function () {
            return this.recuperoPsw.get("password");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecuperoPswComponent.prototype, "getConfermaPassword", {
        get: function () {
            return this.recuperoPsw.get("confermaPassword");
        },
        enumerable: true,
        configurable: true
    });
    RecuperoPswComponent.prototype.onSubmit = function () {
        var _this = this;
        var userUpdated;
        this.userDaModificare.password = this.getPassword.value;
        userUpdated = this.userDaModificare;
        //console.log(userUpdated)
        this.recuperoPswService.resetPwd(userUpdated).subscribe(function (res) {
            _this.loginService.setHomepage(true);
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: "success",
                text: "Password resettata con successo! Effettua il login.",
            });
            _this.route.navigateByUrl("/login");
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: "error",
                text: "si è verificato un errore, riprova più tardi.",
            });
        });
    };
    RecuperoPswComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-recupero-psw",
            template: __webpack_require__(/*! ./recupero-psw.component.html */ "./src/app/recupero-psw/recupero-psw.component.html"),
            styles: [__webpack_require__(/*! ./recupero-psw.component.css */ "./src/app/recupero-psw/recupero-psw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_share_provider_service__WEBPACK_IMPORTED_MODULE_4__["ShareProviderService"],
            _recuperopassword_service__WEBPACK_IMPORTED_MODULE_5__["RecuperoPasswordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]])
    ], RecuperoPswComponent);
    return RecuperoPswComponent;
}());



/***/ }),

/***/ "./src/app/recupero-psw/recuperopassword.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/recupero-psw/recuperopassword.service.ts ***!
  \**********************************************************/
/*! exports provided: RecuperoPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperoPasswordService", function() { return RecuperoPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");




var RecuperoPasswordService = /** @class */ (function () {
    /**invioMail(recuperoPwdData: string): any {
      throw new Error("Method not implemented.");
    }*/
    function RecuperoPasswordService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.recuperUrl = "http://localhost:8080/api/recuperoPwd";
        this.resetUrl = "http://localhost:8080/api/resetPassword";
    }
    /** invio mail per recupero pwd */
    RecuperoPasswordService.prototype.recuperoPwd = function (user) {
        return this.http.post(this.recuperUrl, user);
    };
    RecuperoPasswordService.prototype.resetPwd = function (userUpdated) {
        return this.http.post(this.resetUrl, userUpdated);
    };
    RecuperoPasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RecuperoPasswordService);
    return RecuperoPasswordService;
}());



/***/ }),

/***/ "./src/app/redirect/redirect.component.css":
/*!*************************************************!*\
  !*** ./src/app/redirect/redirect.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGlyZWN0L3JlZGlyZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/redirect/redirect.component.html":
/*!**************************************************!*\
  !*** ./src/app/redirect/redirect.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  redirect works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/redirect/redirect.component.ts":
/*!************************************************!*\
  !*** ./src/app/redirect/redirect.component.ts ***!
  \************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/share-provider.service */ "./src/app/service/share-provider.service.ts");




var RedirectComponent = /** @class */ (function () {
    function RedirectComponent(router, route, sharedProvider) {
        this.router = router;
        this.route = route;
        this.sharedProvider = sharedProvider;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        var url = this.sharedProvider.getUrl();
        this.navigate(url);
    };
    RedirectComponent.prototype.navigate = function (url) {
        this.router.navigateByUrl(url);
    };
    RedirectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redirect',
            template: __webpack_require__(/*! ./redirect.component.html */ "./src/app/redirect/redirect.component.html"),
            styles: [__webpack_require__(/*! ./redirect.component.css */ "./src/app/redirect/redirect.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_share_provider_service__WEBPACK_IMPORTED_MODULE_3__["ShareProviderService"]])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "./src/app/registrazione/registrazione/registrazione.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/registrazione/registrazione/registrazione.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".unicoPerRiga{\r\n    width: 80%;\r\n}\r\n.doppioPerRiga{\r\n    width: 40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF6aW9uZS9yZWdpc3RyYXppb25lL3JlZ2lzdHJhemlvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bmljb1BlclJpZ2F7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5kb3BwaW9QZXJSaWdhe1xyXG4gICAgd2lkdGg6IDQwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/registrazione/registrazione/registrazione.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/registrazione/registrazione/registrazione.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitoreComponente\">\r\n\t\r\n\t<div class=\"contenitoreElementi\">\r\n\t\t<h2>Registrazione</h2>\r\n\t\t<div class=\"spazioElementi\">\r\n\t\t\t<form [formGroup]=\"registrazione\">\r\n\t\t\t<h4>Anagrafica</h4>\r\n\t\t\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>Nome</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tformControlName=\"nome\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-error *ngIf=\"getNome.invalid && campoVuoto(getNome)\">Il nome è obbligatorio</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>Cognome</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tformControlName=\"cognome\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getCognome)\">Il cognome è obbligatorio</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n<br>\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"unicoPerRiga\">\r\n\t\t\t\t\t<mat-label>Username</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\t#username\r\n\t\t\t\t\t\t\t(blur)=\"checkUsername(username.value)\"\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tformControlName=\"username\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-hint style=\"color: red\" *ngIf=\"esisteUsername\">Esiste già un account con questo username</mat-hint>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getUsername)\">Lo username è obbligatorio</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n<hr>\r\n\t\t\t<h4>Indirizzo email</h4>\r\n\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"unicoPerRiga\">\r\n\t\t\t\t\t<mat-label>Indirizzo email</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\t#email\r\n\t\t\t\t\t\t\t(blur)=\"checkEmail(email.value)\"\r\n\t\t\t\t\t\t\ttype=\"email\"\r\n\t\t\t\t\t\t\tformControlName=\"email\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-hint style=\"color: red\" *ngIf=\"esisteEmail\">Esiste già un account con questa email</mat-hint>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getEmail)\">La email è obbligatoria</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"getEmail.invalid\">La email non è valida</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t\t\r\n<hr>\r\n\t\t\t<h4>Password</h4>\r\n\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>Password</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\tformControlName=\"password\" \r\n\t\t\t\t\t\t\t[type]=\"hide ? 'password' : 'text'\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">\r\n\t\t\t\t\t{{hide ? 'visibility_off' : 'visibility'}}\r\n\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getPassword)\">La passwsord è richiesta</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"!campoVuoto(getPassword) && getPassword.invalid\">La passwsord deve avere min. 8 caratteri</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>Conferma password</mat-label>\r\n\t\t\t\t\t<input matInput \r\n\t\t\t\t\t\t\ttype=\"password\"\r\n\t\t\t\t\t\t\tformControlName=\"confermaPassword\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"getConfermaPassword.invalid && (getConfermaPassword.dirty || getConfermaPassword.touch)\">\r\n\t\t\t\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getConfermaPassword) && getConfermaPassword.errors['required']\">La password è obbligatorio</mat-error>\r\n\t\t\t\t\t\t\t\t<mat-error *ngIf=\"!campoVuoto(getConfermaPassword) && getConfermaPassword.errors['compare']\">Le password non sono uguali</mat-error>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n<hr>\r\n\t\t\t<h4>Domicilio</h4>\r\n\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>Citta</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tformControlName=\"citta\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getCitta)\">La città è obbligatoria</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>CAP</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\ttype=\"number\"\r\n\t\t\t\t\t\t\tformControlName=\"cap\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getCap)\">Il CAP è obbligatorio</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n<br>       \r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>Via</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tformControlName=\"via\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getVia)\">La via è obbligatoria</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t\t\r\n\t\t\t\t<mat-form-field appearance=\"outline\"\r\n\t\t\t\t\t\t\t\tclass=\"doppioPerRiga\">\r\n\t\t\t\t\t<mat-label>Numero civico</mat-label>\r\n\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\t\tformControlName=\"nCivico\"\r\n\t\t\t\t\t\t\trequired>\r\n\t\t\t\t\t<mat-error *ngIf=\"campoVuoto(getNCivico)\">Il numero civico è obbligatorio</mat-error>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t\t<div *ngIf=\"esisteEmail || esisteUsername\" class=\"bottoneInvioForm\">\r\n\t\t\t\t\t<button mat-raised-button\r\n\t\t\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\t\t\tdisabled>Registrati</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"!esisteEmail && !esisteUsername\" class=\"bottoneInvioForm\">\r\n\t\t\t\t\t<button mat-raised-button\r\n\t\t\t\t\t\t\tcolor=\"primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\"\r\n\t\t\t\t\t\t\t[disabled]=\"registrazione.invalid\">Registrati</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t\t<br>Hai già un account? Effetua il <a routerLink=\"/login\"><b>login</b></a>!\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/registrazione/registrazione/registrazione.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/registrazione/registrazione/registrazione.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrazioneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrazioneComponent", function() { return RegistrazioneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");
/* harmony import */ var _registrazione_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrazione.service */ "./src/app/registrazione/registrazione/registrazione.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _custom_directive_compare_validators_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../custom-directive/compare-validators.directive */ "./src/custom-directive/compare-validators.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");










var RegistrazioneComponent = /** @class */ (function () {
    function RegistrazioneComponent(registrazioneService, route, loginService) {
        this.registrazioneService = registrazioneService;
        this.route = route;
        this.loginService = loginService;
        this.hide = TreeWalker;
        this.regUserData = new src_app_model_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.submitted = false;
        this.esisteEmail = false;
        this.esisteUsername = false;
    }
    RegistrazioneComponent.prototype.ngOnInit = function () {
        this.creaForm();
    };
    // crea formGRoup
    RegistrazioneComponent.prototype.creaForm = function () {
        this.registrazione = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cognome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16),
            ]),
            confermaPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", Object(_custom_directive_compare_validators_directive__WEBPACK_IMPORTED_MODULE_7__["compareValidation"])("password")),
            citta: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cap: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            via: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            nCivico: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    };
    Object.defineProperty(RegistrazioneComponent.prototype, "getNome", {
        get: function () {
            return this.registrazione.get("nome");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getCognome", {
        get: function () {
            return this.registrazione.get("cognome");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getUsername", {
        get: function () {
            return this.registrazione.get("username");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getEmail", {
        get: function () {
            return this.registrazione.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getPassword", {
        get: function () {
            return this.registrazione.get("password");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getConfermaPassword", {
        get: function () {
            return this.registrazione.get("confermaPassword");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getCitta", {
        get: function () {
            return this.registrazione.get("citta");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getCap", {
        get: function () {
            return this.registrazione.get("cap");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getVia", {
        get: function () {
            return this.registrazione.get("via");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrazioneComponent.prototype, "getNCivico", {
        get: function () {
            return this.registrazione.get("nCivico");
        },
        enumerable: true,
        configurable: true
    });
    RegistrazioneComponent.prototype.creaUser = function () {
        this.regUserData.setDati(this.registrazione.controls.username.value, this.registrazione.controls.email.value, this.registrazione.controls.password.value, this.registrazione.controls.nome.value, this.registrazione.controls.cognome.value, this.registrazione.controls.via.value, this.registrazione.controls.nCivico.value, this.registrazione.controls.citta.value, this.registrazione.controls.cap.value, 0);
    };
    RegistrazioneComponent.prototype.campoVuoto = function (campo) {
        if (((campo.dirty || campo.touched) && campo.value === null) ||
            campo.value === "" ||
            campo.value.lenght === 0)
            return true;
        else
            return false;
    };
    RegistrazioneComponent.prototype.onSubmit = function () {
        console.log(this.checkEmail("dario.demarco1208@gmail.com"));
        this.submitted = true;
        this.creaUser();
        this.registraUser();
        //console.log(this.regUserData);
    };
    RegistrazioneComponent.prototype.registraUser = function () {
        var _this = this;
        if (this.submitted == false)
            return;
        this.registrazione.reset();
        this.registrazioneService.registra(this.regUserData).subscribe(function (res) {
            if (res == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: "error",
                    title: "Registrazione non avvenuta",
                    text: "riprova più tardi.",
                });
            }
            else {
                _this.loginService.setHomepage(true);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: "success",
                    title: "Sei registrato!",
                    timer: 1500,
                });
                _this.route.navigateByUrl("/login");
            }
        }, function (err) { return console.log(err); });
    };
    RegistrazioneComponent.prototype.checkEmail = function (email) {
        var _this = this;
        this.registrazioneService.checkEmail(email).subscribe(function (email) {
            _this.esisteEmail = email;
        });
    };
    RegistrazioneComponent.prototype.checkUsername = function (username) {
        var _this = this;
        this.registrazioneService.checkUsername(username).subscribe(function (username) {
            _this.esisteUsername = username;
        });
    };
    RegistrazioneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-registrazione",
            template: __webpack_require__(/*! ./registrazione.component.html */ "./src/app/registrazione/registrazione/registrazione.component.html"),
            providers: [
                {
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["STEPPER_GLOBAL_OPTIONS"],
                    useValue: { showError: true },
                },
            ],
            styles: [__webpack_require__(/*! ./registrazione.component.css */ "./src/app/registrazione/registrazione/registrazione.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_registrazione_service__WEBPACK_IMPORTED_MODULE_3__["RegistrazioneService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]])
    ], RegistrazioneComponent);
    return RegistrazioneComponent;
}());



/***/ }),

/***/ "./src/app/registrazione/registrazione/registrazione.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/registrazione/registrazione/registrazione.service.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrazioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrazioneService", function() { return RegistrazioneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RegistrazioneService = /** @class */ (function () {
    function RegistrazioneService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.url = "http://localhost:8080/api/user";
    }
    RegistrazioneService.prototype.registra = function (user) {
        return this.userService.addUser(user);
    };
    RegistrazioneService.prototype.checkEmail = function (email) {
        return this.http.get(this.url + "/checkEmail?email=" + email);
    };
    RegistrazioneService.prototype.checkUsername = function (username) {
        return this.http.get(this.url + "/checkUsername?username=" + username);
    };
    RegistrazioneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RegistrazioneService);
    return RegistrazioneService;
}());



/***/ }),

/***/ "./src/app/service/carrello.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/carrello.service.ts ***!
  \*********************************************/
/*! exports provided: CarrelloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrelloService", function() { return CarrelloService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _prodotto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prodotto.service */ "./src/app/service/prodotto.service.ts");
/* harmony import */ var _model_Catalogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Catalogo */ "./src/app/model/Catalogo.ts");
/* harmony import */ var _share_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var CarrelloService = /** @class */ (function () {
    function CarrelloService(http, prodottoService, shareProvider) {
        this.http = http;
        this.prodottoService = prodottoService;
        this.shareProvider = shareProvider;
        this.url = "http://localhost:8080/api/carrello";
        this.urlOrdine = "http://localhost:8080/api/ordine-carrello";
        this.urlProdotto = "http://localhost:8080/api/prodotto";
    }
    //gli assegnamenti dello sharedProvider vengono effettuati nei servizi dedicati
    CarrelloService.prototype.getAll = function (id) {
        var _this = this;
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (carrelloCompleto) {
            _this.shareProvider.setCurrentCarrelloCompleto(carrelloCompleto);
            //conversione immagini in base64
            _this.shareProvider.getCurrentCarrelloCompleto().forEach(function (prodotto) {
                prodotto.img = "data:image/png;base64," + prodotto.img;
            });
            console.log(carrelloCompleto);
            return carrelloCompleto;
        }));
    };
    CarrelloService.prototype.updateCarrello = function (prodotto) {
        //update di prodotto
        this.prodottoService.update(prodotto);
    };
    //Controlla se esiste un carrello per quel dato utente.
    //Se esiste restituisce quello già esistente,
    //se non esiste crea un ordine con stato carrello e lo restituisce
    //RICORDA: il carrello non smette di esistere finché l'ordine non viene evaso
    CarrelloService.prototype.getCarrello = function (idUtente) {
        var _this = this;
        return this.http.get(this.urlOrdine + "/" + idUtente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (carrello) {
            _this.shareProvider.setCurrentCarrello(carrello);
            return carrello;
        }));
    };
    //Aggiunge un prodotto al carrello
    //UPDATE della tabella Prodotto
    CarrelloService.prototype.addToCart = function (prodotto) {
        return this.http.post(this.urlProdotto, prodotto);
    };
    CarrelloService.prototype.controllaProdotto = function (prodotto, qtaScelta) {
        //creo un nuovo prodotto per evitare problemi col cancellamento dell'img
        var prodottoDaInviare = new _model_Catalogo__WEBPACK_IMPORTED_MODULE_4__["Catalogo"]();
        prodottoDaInviare.clona(prodotto);
        prodottoDaInviare.img = null;
        var idUser = this.shareProvider.getCurrentUser().idUser;
        return this.http.post(this.url + "/aggiungi?idUser=" + idUser + "&qta=" + qtaScelta, prodottoDaInviare);
    };
    //metodo che viene richiamato dal bottone di aggiunta al carrello
    CarrelloService.prototype.aggiungiAlCarrello = function (prodotto, qtaScelta) {
        var _this = this;
        var id = this.shareProvider.getCurrentUser().idUser;
        this.getCarrello(id).subscribe(function (res) {
            //controllo se il prodotto esiste nel carrello, se sì modifico solo la qtaordinata
            _this.controllaProdotto(prodotto, qtaScelta).subscribe(function (sas) {
                _this.shareProvider.updateTotArticoliCarrello(_this.shareProvider.getTotArticoliCarrello() + qtaScelta);
                _this.shareProvider.updateTotaleParzialeCarrello(_this.shareProvider.getTotaleParzialeCarrello() + (prodotto.prezzoProdotto * qtaScelta));
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Aggiunto al carrello!'
                });
            });
        });
    };
    CarrelloService.prototype.checkQtaCarrello = function (idCatalogo, idOrdine) {
        return this.http.get("http://localhost:8080/api/qtaCarrello?idCatalogo=" + idCatalogo + "&idOrdine=" + idOrdine);
    };
    CarrelloService.prototype.exsist = function (idUser) {
        return this.http.get(this.url + "/exsist?idUser=" + idUser);
    };
    /**Metodo che controlla quanti articoli esistono nel carrello*/
    CarrelloService.prototype.controlliQta = function (prodotto, idOrdine, qtaScelta) {
        var _this = this;
        this.checkQtaCarrello(prodotto.idCatalogo, idOrdine)
            .subscribe(function (qta) {
            var qtaInCarrello = qta;
            if ((qtaInCarrello + qtaScelta) > prodotto.qtaProdotto) {
                qtaScelta = 1;
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    html: '<h3>Quantità massima raggiunta</h3>',
                    timer: 1500,
                    showConfirmButton: false
                });
            }
            else {
                _this.aggiungiAlCarrello(prodotto, qtaScelta);
            }
        });
        return;
    };
    CarrelloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _prodotto_service__WEBPACK_IMPORTED_MODULE_3__["ProdottoService"],
            _share_provider_service__WEBPACK_IMPORTED_MODULE_5__["ShareProviderService"]])
    ], CarrelloService);
    return CarrelloService;
}());



/***/ }),

/***/ "./src/app/service/catalogo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/catalogo.service.ts ***!
  \*********************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-provider.service */ "./src/app/service/share-provider.service.ts");





var CatalogoService = /** @class */ (function () {
    function CatalogoService(http, sharedProvider) {
        this.http = http;
        this.sharedProvider = sharedProvider;
        this.url = "http://localhost:8080/api/catalogo";
    }
    /** POST: add a new catalogo to the server */
    CatalogoService.prototype.addCatalogo = function (catalogo) {
        return this.http.post(this.url, catalogo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (newCatalogo) { return console.log("catalogo aggiunto"); }));
    };
    //classica richiesta get per alcuni record
    CatalogoService.prototype.getAll = function (lastKey, batch) {
        return this.http.get(this.url + "?lastKey=" + lastKey + "&batch=" + batch)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            console.log("trovati prodotti");
        }));
    };
    //classica richiesta get per tutti i record
    CatalogoService.prototype.getAllAll = function () {
        return this.http.get(this.url + "/all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            console.log("trovati prodotti");
        }));
    };
    CatalogoService.prototype.getOne = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log("trovato prodotto"); }));
    };
    /** PUT: update sul catalogo */
    CatalogoService.prototype.updateProdotto = function (catalogo) {
        return this.http.put(this.url + "/" + catalogo.idCatalogo, catalogo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log("catalogo aggiornato con id=" + catalogo.idCatalogo); }));
    };
    /** DELETE: cancella un prodotto da Catalogo */
    CatalogoService.prototype.deleteCatalogo = function (catalogo) {
        var id = typeof catalogo === 'number' ? catalogo : catalogo.idCatalogo;
        var url = this.url + "/" + id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log("deleted catalogo id=" + id); }));
    };
    CatalogoService.prototype.ricercaProdotto = function (stringa) {
        return this.http.get('http://localhost:8080/api/ricerca?stringa=' + stringa);
    };
    CatalogoService.prototype.ricercaTutti = function (stringa, lastKey, batch) {
        return this.http.get('http://localhost:8080/api/ricercaTutti?stringa=' + stringa + '&lastKey=' + lastKey + '&batch=' + batch);
    };
    CatalogoService.prototype.equals = function (c1, c2) {
        if (c1.idCatalogo == c2.idCatalogo &&
            c1.nomeProdotto == c2.nomeProdotto &&
            c1.descrProdotto == c2.descrProdotto &&
            c1.prezzoProdotto == c2.prezzoProdotto &&
            c1.qtaProdotto == c2.qtaProdotto &&
            c1.idCategoria == c2.idCategoria &&
            c1.idProduttore == c2.idProduttore)
            return true;
        return false;
    };
    CatalogoService.prototype.copiaProdotto = function (cVuoto, cDaCopiare) {
        cVuoto.idCatalogo = cDaCopiare.idCatalogo;
        cVuoto.nomeProdotto = cDaCopiare.nomeProdotto;
        cVuoto.descrProdotto = cDaCopiare.descrProdotto;
        cVuoto.prezzoProdotto = cDaCopiare.prezzoProdotto;
        cVuoto.qtaProdotto = cDaCopiare.qtaProdotto;
        cVuoto.img = cDaCopiare.img;
        cVuoto.idProduttore = cDaCopiare.idProduttore;
        cVuoto.idCategoria = cDaCopiare.idCategoria;
    };
    CatalogoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _share_provider_service__WEBPACK_IMPORTED_MODULE_4__["ShareProviderService"]])
    ], CatalogoService);
    return CatalogoService;
}());



/***/ }),

/***/ "./src/app/service/categoria.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/categoria.service.ts ***!
  \**********************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoriaService = /** @class */ (function () {
    function CategoriaService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/categoria";
    }
    CategoriaService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    CategoriaService.prototype.getOne = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    CategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/service/checkout.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/checkout.service.ts ***!
  \*********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _share_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-provider.service */ "./src/app/service/share-provider.service.ts");




var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, sharedProvider) {
        this.http = http;
        this.sharedProvider = sharedProvider;
        this.url = 'http://localhost:8080/api/checkout';
    }
    CheckoutService.prototype.effettuaOrdine = function () {
        var idUser = this.sharedProvider.getCurrentUser().idUser;
        return this.http.get(this.url + '/' + idUser);
    };
    CheckoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _share_provider_service__WEBPACK_IMPORTED_MODULE_3__["ShareProviderService"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/service/filtro.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/filtro.service.ts ***!
  \*******************************************/
/*! exports provided: FiltroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroService", function() { return FiltroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FiltroService = /** @class */ (function () {
    function FiltroService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/filtro";
    }
    FiltroService.prototype.getCatalogoFiltrato = function (pMin, pMax, lastKey, batch, idCategoria, idProduttore) {
        if (idCategoria > 0 && idProduttore > 0) {
            return this.http.get(this.url + "?idCategoria=" + idCategoria + "&idProduttore=" + idProduttore + "&pMin=" + pMin + "&pMax=" + pMax + "&lastKey=" + lastKey + "&batch=" + batch);
        }
        else if (idCategoria <= 0 && idProduttore > 0) {
            //query senza categoria
            return this.http.get(this.url + "NoCat?idProduttore=" + idProduttore + "&pMin=" + pMin + "&pMax=" + pMax + "&lastKey=" + lastKey + "&batch=" + batch);
        }
        else if (idProduttore <= 0 && idCategoria > 0) {
            //query senza produttore
            console.log("no Produttore");
            return this.http.get(this.url + "NoProd?pMin=" + pMin + "&pMax=" + pMax + "&lastKey=" + lastKey + "&batch=" + batch + "&idCategoria=" + idCategoria);
        }
        else if (idProduttore == 0 && idCategoria == 0) {
            //query filtro solo col prezzo
            return this.http.get(this.url + "SoloPrezzo?pMin=" + pMin + "&pMax=" + pMax + "&lastKey=" + lastKey + "&batch=" + batch);
        }
    };
    FiltroService.prototype.getProdottiSimiliCategoria = function (idCategoria, idCatalogo, lastKey, batch) {
        return this.http.get(this.url + "SimiliCategoria?idCategoria=" + idCategoria + "&idCatalogo=" + idCatalogo + "&lastKey=" + lastKey + "&batch=" + batch);
    };
    FiltroService.prototype.getProdottiSimiliProduttore = function (idProduttore, idCatalogo, lastKey, batch) {
        return this.http.get(this.url + "SimiliProduttore?idCategoria=" + idProduttore + "&idCatalogo=" + idCatalogo + "&lastKey=" + lastKey + "&batch=" + batch);
    };
    FiltroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FiltroService);
    return FiltroService;
}());



/***/ }),

/***/ "./src/app/service/prodotto.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/prodotto.service.ts ***!
  \*********************************************/
/*! exports provided: ProdottoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottoService", function() { return ProdottoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProdottoService = /** @class */ (function () {
    function ProdottoService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/prodotto";
    }
    ProdottoService.prototype.getOne = function (idProdotto) {
        return this.http.get(this.url + "/" + idProdotto);
    };
    ProdottoService.prototype.deleteOne = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    //**PUT: aggiorna un prodotto nel DB */
    ProdottoService.prototype.update = function (prodotto) {
        return this.http.put(this.url, prodotto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('updated Prodotto id=' + prodotto.idProdotto); }));
    };
    ProdottoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProdottoService);
    return ProdottoService;
}());



/***/ }),

/***/ "./src/app/service/produttore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/produttore.service.ts ***!
  \***********************************************/
/*! exports provided: ProduttoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduttoreService", function() { return ProduttoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProduttoreService = /** @class */ (function () {
    function ProduttoreService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/produttore";
    }
    ProduttoreService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    ProduttoreService.prototype.getOne = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ProduttoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProduttoreService);
    return ProduttoreService;
}());



/***/ }),

/***/ "./src/app/service/share-provider.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/share-provider.service.ts ***!
  \***************************************************/
/*! exports provided: ShareProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareProviderService", function() { return ShareProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carrello_carrello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carrello/carrello */ "./src/app/carrello/carrello.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ShareProviderService = /** @class */ (function () {
    function ShareProviderService(http) {
        this.http = http;
        this.carrello = null;
        this.user = null;
        this.totaleParzialeCarrello = 0;
        this.totaleArticoliCarrello = 0;
        this.arrayCarrello = [];
        this.modificaProd = false;
        this.stringaRicercaProdotto = "";
        //parte storico
        this.totaleDeiTotali = 0;
    }
    ShareProviderService.prototype.ngOnInit = function () { };
    //metodo che torna true o false per il recuper psw
    ShareProviderService.prototype.recuperoPsw = function () {
        return false;
    };
    //parte user
    ShareProviderService.prototype.isLogged = function () {
        if (this.getCurrentUser() != null) {
            return true;
        }
        return false;
    };
    ShareProviderService.prototype.isAdmin = function () {
        if (this.getCurrentUser() != null) {
            if (this.getCurrentUser().amministratore == 1) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    };
    ShareProviderService.prototype.getCurrentUser = function () {
        return this.user;
    };
    ShareProviderService.prototype.setCurrentUser = function (user) {
        this.user = user;
    };
    ShareProviderService.prototype.deleteCurrentUser = function () {
        this.user = null;
        this.totaleParzialeCarrello = 0;
        this.totaleArticoliCarrello = 0;
    };
    //Servono a visualizzare il totale parziale dalla navBar
    ShareProviderService.prototype.getTotaleParzialeCarrello = function () {
        return this.totaleParzialeCarrello;
    };
    ShareProviderService.prototype.updateTotaleParzialeCarrello = function (totParz) {
        this.totaleParzialeCarrello = totParz;
    };
    ShareProviderService.prototype.getTotArticoliCarrello = function () {
        return this.totaleArticoliCarrello;
    };
    ShareProviderService.prototype.updateTotArticoliCarrello = function (totArticoli) {
        this.totaleArticoliCarrello = totArticoli;
    };
    //CARRELLO
    ShareProviderService.prototype.setCurrentCarrello = function (carrello) {
        this.carrello = carrello;
    };
    ShareProviderService.prototype.getCurrentCarrello = function () {
        return this.carrello;
    };
    ShareProviderService.prototype.deleteCurrentCarrello = function () {
        this.carrello = null;
    };
    ShareProviderService.prototype.getCurrentCarrelloCompleto = function () {
        return this.arrayCarrello;
    };
    ShareProviderService.prototype.clearCarrello = function () {
        this.carrello = null;
        this.totaleArticoliCarrello = 0;
        this.totaleParzialeCarrello = 0;
        this.arrayCarrello = [];
    };
    //quando effettuo il login viene estratto il carrello e vengono calcolati i totali parziali
    ShareProviderService.prototype.setCurrentCarrelloCompleto = function (carrello) {
        //faccio l'assegnazione del carello
        this.arrayCarrello = carrello;
        //calcolo il totale degli articoli in carrello
        this.totaleArticoliCarrello = carrello
            .map(function (t) { return t.qtaOrdinata; })
            .reduce(function (acc, value) { return acc + value; }, 0);
        //calcolo il totale parziale del costo degli articoli in carrello
        this.totaleParzialeCarrello = carrello
            .map(function (carrello) { return carrello.prezzoProdotto * carrello.qtaOrdinata; })
            .reduce(function (acc, value) { return acc + value; }, 0);
    };
    //Catalogo per validators
    ShareProviderService.prototype.setCurrentCatalogo = function (catalogo) {
        this.catalogo = catalogo;
    };
    ShareProviderService.prototype.getCurrentCatalogo = function () {
        return this.catalogo;
    };
    //metodo di conversione da prodotto a carrello
    ShareProviderService.prototype.prodottoToCarrello = function (prodotto) {
        var carrello;
        this.getCurrentCatalogo().forEach(function (catalogo) {
            if (prodotto.idCatalogo == catalogo.idCatalogo) {
                //creo un nuovo carrello per il frontend
                carrello = new _carrello_carrello__WEBPACK_IMPORTED_MODULE_2__["Carrello"](prodotto.idProdotto, prodotto.ordineIdOrdine, catalogo.nomeProdotto, catalogo.prezzoProdotto, prodotto.qtaOrdinata, catalogo.img, catalogo.idCatalogo);
            }
        });
        console.log("carrello aggiunto da FE: ");
        console.log(carrello);
        return carrello;
    };
    ShareProviderService.prototype.setTotaleDeiTotali = function (totaleDeiTotali) {
        this.totaleDeiTotali = totaleDeiTotali;
    };
    ShareProviderService.prototype.getTotaleDeiTotali = function () {
        return this.totaleDeiTotali;
    };
    ShareProviderService.prototype.setProdotto = function (prodotto) {
        this.selectedProdotto = prodotto;
    };
    ShareProviderService.prototype.getProdotto = function () {
        return this.selectedProdotto;
    };
    ShareProviderService.prototype.isModificaProd = function () {
        return this.modificaProd;
    };
    ShareProviderService.prototype.setUrl = function (url) {
        this.url = url;
    };
    ShareProviderService.prototype.getUrl = function () {
        return this.url;
    };
    ShareProviderService.prototype.getStringaRicercaProdotto = function () {
        return this.stringaRicercaProdotto;
    };
    ShareProviderService.prototype.setStringaRicercaProdotto = function (stringa) {
        this.stringaRicercaProdotto = stringa;
    };
    ShareProviderService.prototype.clearStringaRicercaProdotti = function () {
        this.setStringaRicercaProdotto("");
    };
    ShareProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ShareProviderService);
    return ShareProviderService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = "http://localhost:8080/api/user";
    }
    /**GET users from the server */
    //torna un Observable di array di User
    UserService.prototype.getUsers = function () {
        return this.http.get(this.userUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("trovati users"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUsers", [])));
    };
    /**
     * Error handler generico, accetta come parametri il nome dell'operazione fallita e
     * il valore da far tornare come risultato, cioè il tipo di ritorno che l'app si aspetta.
     * Restituisce
     *
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        //da commentare bene
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.userUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newUser) { return console.log("added user"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addHero")));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/storico/storico.component.css":
/*!***********************************************!*\
  !*** ./src/app/storico/storico.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep table.mat-table {\r\n    min-width: -webkit-fill-available;\r\n    margin: auto;\r\n    border-collapse: collapse;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcmljby9zdG9yaWNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yaWNvL3N0b3JpY28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB0YWJsZS5tYXQtdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/storico/storico.component.html":
/*!************************************************!*\
  !*** ./src/app/storico/storico.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenitoreComponente\">\r\n\t<div *ngIf=\"!isLogged\">\r\n\r\n\t\t<h2>Non hai effettuato il login. Accedi per visualizzare lo storico.</h2>\r\n\t\t<a>\r\n\t\t\t<button mat-raised-button color=\"primary\" routerLink=\"/login\">Accedi</button>\r\n\t\t</a>\r\n\r\n\t</div>\r\n\r\n\t<div *ngIf=\"isLogged\">\r\n\r\n\t\t<div *ngIf=\"isVuoto\">\r\n\r\n\t\t\t<h2>Non hai effettuato ordini. Rimedia subito!</h2>\r\n\t\t\t<button mat-raised-button color=\"primary\" routerLink=\"/homepage\">Homepage</button>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"!isVuoto\">\r\n\t\t\t<div class=\"contenitoreElementi\">\r\n\t\t\t\t<h2>Storico ordini</h2>\r\n\t\t\t\r\n\t\t\t\t<div *ngFor=\"let ordinex of storico\" class=\"spazioElementi\">\r\n\r\n\t\t\t\t\t\t\t\t<h2 class=\"scritteH\">Ordine n.{{ordinex[0].idOrdine}} del {{ordinex[0].dataOrdine | date: 'd MMM y, ore HH.mm'}}</h2>\r\n\t\t\t\t\t\t<div class=\"contenitoreTabella\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<table class=\"tabellaOrdine\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Nome</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Quantità</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Prezzo</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let voce of ordinex\">\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"contenitoreFoto\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img (click)=\"goToDetail(voce.idCatalogo)\" class=\"fotoLabel\" src=\"data:image/png;base64,{{voce.img}}\">\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th><p (click)=\"goToDetail(voce.idCatalogo)\">{{voce.nomeProdotto}}</p></th>\r\n\t\t\t\t\t\t\t\t\t\t<th><p>{{voce.qtaOrdinata}}</p></th>\r\n\t\t\t\t\t\t\t\t\t\t<th><p>{{voce.prezzoPagato | number:'1.2-5'}}€</p></th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t\t<tr class=\"totaleOrdine\">\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<b>Totale {{getTotaleOrdine(ordinex) | number:'1.2-5'}}€</b>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"!finished\">\r\n\t\t\t\t\t<mat-spinner></mat-spinner>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<h3 *ngIf=\"finished\">Totale ordini {{getTotaleDeiTotali() | number:'1.2-5'}}€</h3>\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"finished\">\r\n\t\t\t\t<button mat-raised-button color=\"accent\" (click)=\"topFunction()\">Torna su</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t\t<div style=\"width: 60%; text-align: center\"\r\n\t\t\t\t\tinfiniteScroll\r\n\t\t\t\t\t[infiniteScrollDistance]=\"2\"\r\n\t\t\t\t\t[infiniteScrollThrottle]=\"1000\"\r\n\t\t\t\t\t(scrolled)=\"onScroll()\">\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/storico/storico.component.ts":
/*!**********************************************!*\
  !*** ./src/app/storico/storico.component.ts ***!
  \**********************************************/
/*! exports provided: StoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoricoComponent", function() { return StoricoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_share_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/share-provider.service */ "./src/app/service/share-provider.service.ts");
/* harmony import */ var _storico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storico.service */ "./src/app/storico/storico.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StoricoComponent = /** @class */ (function () {
    function StoricoComponent(storicoService, sharedProvider, route) {
        this.storicoService = storicoService;
        this.sharedProvider = sharedProvider;
        this.route = route;
        this.batch = 3; //size of each query
        this.lastKey = 0; //key to offset next query from
        this.finished = false;
        this.isLogged = this.sharedProvider.isLogged();
        this.isVuoto = false;
        //per il totale di tutti gli ordini
        this.totaleAppoggio = 0;
        this.totaleDeiTotali = 0;
        this.scroll = 0;
        this.storico = new Array();
    }
    //totale del singolo ordine da visualizzare a fondo tabella
    StoricoComponent.prototype.getTotaleOrdine = function (ordine) {
        var totaleOrdine = this.storicoService.getTotaleOrdine(ordine);
        return totaleOrdine;
    };
    StoricoComponent.prototype.getTotaleDeiTotali = function () {
        return this.totaleDeiTotali.toFixed(2);
    };
    StoricoComponent.prototype.ngOnInit = function () {
        if (this.isLogged) {
            this.getOrdini();
        }
    };
    StoricoComponent.prototype.onScroll = function () {
        if (this.isLogged) {
            this.finished = false;
            this.scroll++;
            console.log("scrolled!");
            this.getOrdini();
        }
    };
    StoricoComponent.prototype.getOrdini = function () {
        var _this = this;
        if (this.finished)
            return;
        var idUser = this.sharedProvider.getCurrentUser().idUser;
        this.storicoService.getStoricoOrdinato(idUser, this.lastKey, this.batch + 1).subscribe(function (ordini) {
            _this.lastKey += 4;
            //se non ci sono più ordini calcolo il totale dei totali
            if (!ordini) {
                _this.finished = true;
                if (_this.storico[0] == null) {
                    _this.isVuoto = true;
                }
                /*this.finished = true;
                this.totaleDeiTotali = this.totaleAppoggio;*/
                console.log("fine");
            }
            else {
                console.log(ordini);
                _this.storico = _this.storico.concat(ordini);
                //calcolo il totale di questi ordini
                ordini.forEach(function (ordine) {
                    _this.totaleAppoggio += _this.getTotaleOrdine(ordine);
                });
            }
            _this.finished = true;
            _this.totaleDeiTotali = _this.totaleAppoggio;
        });
    };
    StoricoComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    StoricoComponent.prototype.goToDetail = function (idCatalogo) {
        this.route.navigateByUrl("/dettaglio/" + idCatalogo);
    };
    StoricoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-storico',
            template: __webpack_require__(/*! ./storico.component.html */ "./src/app/storico/storico.component.html"),
            styles: [__webpack_require__(/*! ../carrello/carrello.component.css */ "./src/app/carrello/carrello.component.css"), __webpack_require__(/*! ./storico.component.css */ "./src/app/storico/storico.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storico_service__WEBPACK_IMPORTED_MODULE_3__["StoricoService"],
            _service_share_provider_service__WEBPACK_IMPORTED_MODULE_2__["ShareProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StoricoComponent);
    return StoricoComponent;
}());



/***/ }),

/***/ "./src/app/storico/storico.service.ts":
/*!********************************************!*\
  !*** ./src/app/storico/storico.service.ts ***!
  \********************************************/
/*! exports provided: StoricoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoricoService", function() { return StoricoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StoricoService = /** @class */ (function () {
    function StoricoService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/ordine';
        this.storicoUrl = "http://localhost:8080/api/storico";
    }
    ;
    StoricoService.prototype.getOrdiniEvasi = function (idUser, lastKey, batch) {
        if (!lastKey)
            lastKey = 0;
        return this.http.get(this.url + '/getOrdiniEvasi' + '/' + idUser + '/' + lastKey + '/' + batch);
    };
    StoricoService.prototype.getOrdineByIdOrdine = function (idOrdine) {
        return this.http.get(this.url);
    };
    StoricoService.prototype.getStoricoOrdinato = function (idUser, lastKey, batch) {
        return this.http.get(this.storicoUrl + '/' + idUser + '/' + lastKey + '/' + batch);
    };
    StoricoService.prototype.getTotaleOrdine = function (ordine) {
        //calcolo il totale parziale del costo degli articoli dell'ordine
        var totaleOrdine = ordine.map(function (tupla) { return tupla.prezzoPagato * tupla.qtaOrdinata; }).reduce(function (acc, value) { return acc + value; }, 0);
        return totaleOrdine;
        //Aggiorno lo sharedProvider
        //this.shareProvider.updateTotaleParzialeCarrello(this.totParz);
        //this.shareProvider.updateTotArticoliCarrello(this.totaleArticoli);
    };
    StoricoService.prototype.addToTotaleDeiTotali = function (totaleDeiTotali, totaleOrdine) {
        totaleDeiTotali += totaleOrdine;
        return totaleDeiTotali;
    };
    StoricoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoricoService);
    return StoricoService;
}());



/***/ }),

/***/ "./src/custom-directive/compare-validators.directive.ts":
/*!**************************************************************!*\
  !*** ./src/custom-directive/compare-validators.directive.ts ***!
  \**************************************************************/
/*! exports provided: compareValidation, CompareValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareValidation", function() { return compareValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidationDirective", function() { return CompareValidationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



function compareValidation(controlNameToCompare) {
    return function (c) {
        //controllo per campi vuoti
        if (c.value === null || c.value.lenght === 0 || c.value === '') {
            return null;
        }
        var controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
}
var CompareValidationDirective = /** @class */ (function () {
    function CompareValidationDirective() {
    }
    CompareValidationDirective_1 = CompareValidationDirective;
    CompareValidationDirective.prototype.validate = function (c) {
        //controllo per campi vuoti
        if (c.value === null || c.value.lenght === 0) {
            return null;
        }
        var controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_2 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_2.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
    var CompareValidationDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('compare'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CompareValidationDirective.prototype, "controlNameToCompare", void 0);
    CompareValidationDirective = CompareValidationDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[compare]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CompareValidationDirective_1, multi: true }]
        })
    ], CompareValidationDirective);
    return CompareValidationDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dariodemix/workspaces/lockpick/lockpick-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map