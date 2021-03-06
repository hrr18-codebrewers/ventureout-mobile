"use strict";
// Structural imports
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
// Components
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var search_results_component_1 = require("./search-results/search-results.component");
//Services
var search_service_1 = require("./home/search.service");
// Register the dropdown element so that the compiler will recognize it
element_registry_1.registerElement("DropDown", function () { return require("nativescript-drop-down/drop-down").DropDown; });
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
                // Routes for the router-outlet tag in app.component.html
                router_1.NativeScriptRouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'search-results', component: search_results_component_1.SearchResultsComponent }
                ])],
            providers: [search_service_1.SearchService,
                router_1.RouterExtensions]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map