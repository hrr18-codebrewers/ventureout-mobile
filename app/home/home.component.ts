import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SearchService } from "./search.service"

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

  constructor(private router: Router,
              private searchService: SearchService) {

  }

  public onTap() {
    var info = {
      interests: this.interests,
      start: this.start,
      end: this.end,
      budget: this.budget,
      location: this.location
    };
    alert("You are searching for " + JSON.stringify(info));
    this.searchService.getEvents(info);
  }
}
