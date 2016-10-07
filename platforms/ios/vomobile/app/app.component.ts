import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public onTap() {
        console.log("You tapped that!");
    }
}
