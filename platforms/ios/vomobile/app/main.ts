// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SearchResultsComponent } from "./search-results/search-results.component";

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
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);