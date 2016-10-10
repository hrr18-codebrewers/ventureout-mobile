import { Component, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import {ObservableArray} from "data/observable-array";
import { SearchService } from "./search.service";

@Component({
    selector: "home-page",
    templateUrl: "./home/home.component.html"
})

export class HomeComponent {

  selectedIndex = 0;

  categories = ['Business & Professional',
                'Music',
                'Food & Drink',
                'Community & Culture',
                'Performing & Visual Arts',
                'Film, Media & Entertainment',
                'Sports & Fitness',
                'Health & Wellness',
                'Science & Technology',
                'Travel & Outdoor',
                'Charity & Causes',
                'Religion & Spirituality',
                'Family & Education',
                'Seasonal & Holiday',
                'Government & Politics',
                'Fashion & Beauty',
                'Home & Lifestyle',
                'Auto, Boat & Air',
                'Hobbies & Special Interest',
                'other'];

  start: string;
  end: string;
  budget: number;
  location: string;

  constructor(private router: Router,
              private searchService: SearchService) {

  }

  public onTap() {
    var info = {
      interests: this.categories[this.selectedIndex],
      start: this.start,
      end: this.end,
      budget: this.budget,
      location: this.location
    };
    this.searchService.getEvents(info);
  }

  public onchange(selectedIndex){
    console.log("Before", this.selectedIndex);
    this.selectedIndex = selectedIndex;
    console.log("Selected", selectedIndex);
    console.log("After", this.selectedIndex);
  }

}
















