import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "home-page",
    templateUrl: "./home/home.component.html"
})
export class HomeComponent {
  interests: string;
  start: string;
  end: string;
  budget: number;
  location: string;

  constructor(private router: Router) {

  }

  public onTap() {
    alert("You tapped that! " + this.interests + ' ' + this.start + ' ' + this.end + ' ' + this.budget + ' ' + this.location);
  }
}
