// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { SearchService } from "./home/search.service"

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

@NgModule({
    declarations: [AppComponent,
                   HomeComponent,
                   SearchResultsComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
              NativeScriptRouterModule,
              NativeScriptFormsModule,
              NativeScriptRouterModule.forRoot([
                { path: '', component: HomeComponent},
                { path: 'search-results', component: SearchResultsComponent}

              ])],
    providers: [SearchService,
                RouterExtensions]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);