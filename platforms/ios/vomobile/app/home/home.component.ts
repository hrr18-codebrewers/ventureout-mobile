import { Component, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import {ObservableArray} from "data/observable-array";
import { SearchService } from "./search.service";
import { Page } from "ui/page";

@Component({
    selector: "home-page",
    templateUrl: "./home/home.component.html"
})

export class HomeComponent {

  constructor(private router: Router,
              private searchService: SearchService,
              private page: Page) {

  }

  // Indexes and selection lists for dropdown menus
  selectedSpendingIndex: number = 0;
  spending = ['Free',
              'Paid'];

  selectedTimeframeIndex: number = 0;
  timeframes = ['Today',
                'Tomorrow',
                'This Week',
                'This Weekend',
                'Next Week',
                'This Month',
                'Next Month'];

  selectedCategoryIndex: number = 0;
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

  // Two way binding to the text field
  location: string;

  // Sends form data to the search service to send the API request for relevant events
  public onTap() {
    var info = {
      interests: this.categories[this.selectedCategoryIndex],
      timeframe: this.timeframes[this.selectedTimeframeIndex],
      budget: this.spending[this.selectedSpendingIndex],
      location: this.location
    };

    // Stop partial requests
    for(var key in info){
      if(info[key] === undefined){
        alert("Please Fill Out All Criteria");
        return;
      }
    }
    this.searchService.getEvents(info);
  }

  // Functions to update the selected indexes of the dropdown menus
  public onCategoryChange(selectedIndex){
    this.selectedCategoryIndex = selectedIndex;
  }

  public onTimeframeChange(selectedIndex){
    this.selectedTimeframeIndex = selectedIndex;
  }

  public onSpendingChange(selectedIndex){
    this.selectedSpendingIndex = selectedIndex;
  }

}
















