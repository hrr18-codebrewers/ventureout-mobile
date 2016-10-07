"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var search_results_component_1 = require("./search-results/search-results.component");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                search_results_component_1.SearchResultsComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'search-results', component: search_results_component_1.SearchResultsComponent }
                ])],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map