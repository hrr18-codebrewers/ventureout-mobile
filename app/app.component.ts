import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    items = [1,2,3,4];

    public onTap() {
        alert("You tapped that!");
    }
}
