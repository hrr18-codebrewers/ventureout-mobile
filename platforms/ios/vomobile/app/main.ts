// Structural imports
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SearchResultsComponent } from "./search-results/search-results.component";

//Services
import { SearchService } from "./home/search.service"

// Register the dropdown element so that the compiler will recognize it
registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

@NgModule({
  declarations: [AppComponent,
                 HomeComponent,
                 SearchResultsComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
            NativeScriptRouterModule,
            NativeScriptFormsModule,

            // Routes for the router-outlet tag in app.component.html
            NativeScriptRouterModule.forRoot([
              { path: '', component: HomeComponent},
              { path: 'search-results', component: SearchResultsComponent}

            ])],
  providers: [SearchService,
              RouterExtensions]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);