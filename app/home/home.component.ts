import { Component, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import {ObservableArray} from "data/observable-array";
import { SearchService } from "./search.service";

@Component({
    selector: "home-page",
    templateUrl: "./home/home.component.html"
})

export class HomeComponent {

  selectedIndex: number = 0;

  selectedDateIndex: number = 0;

  timeframes = ['Today',
                'Tomorrow',
                'This Week',
                'This Weekend',
                'Next Week',
                'This Month',
                'Next Month']

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
  budget: string;
  location: string;

  constructor(private router: Router,
              private searchService: SearchService) {

  }

  public onTap() {
    var info = {
      interests: this.categories[this.selectedIndex],
      timeframe: this.timeframes[this.selectedDateIndex],
      budget: this.budget,
      location: this.location
    };
    for(var key in info){
      if(info[key] === undefined){
        alert("Please Fill Out All Criteria");
        return;
      }
    }
    console.log("Info", JSON.stringify(info));
    this.searchService.getEvents(info);
  }

  public onchange(selectedIndex){
    this.selectedIndex = selectedIndex;
  }

  public onDateChange(selectedIndex){
    this.selectedDateIndex = selectedIndex;
  }

}
















