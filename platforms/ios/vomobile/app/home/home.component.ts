import { Component } from "@angular/core";
import { Router } from "@angular/router"

@Component({
    selector: "home-page",
    templateUrl: "./home/home.component.html",
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  public onTap() {
    console.log("You tapped that!");
  }
}
