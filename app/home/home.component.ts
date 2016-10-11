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

  selectedIndex: number = 0;

  selectedDateIndex: number = 0;

  selectedSpendingIndex: number = 0;

  spending = ['Free',
              'Paid'];

  timeframes = ['Today',
                'Tomorrow',
                'This Week',
                'This Weekend',
                'Next Week',
                'This Month',
                'Next Month'];

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

  location: string;


  public onTap() {
    var info = {
      interests: this.categories[this.selectedIndex],
      timeframe: this.timeframes[this.selectedDateIndex],
      budget: this.spending[this.selectedSpendingIndex],
      location: this.location
    };
    for(var key in info){
      if(info[key] === undefined){
        alert("Please Fill Out All Criteria");
        return;
      }
    }
    this.searchService.getEvents(info);
  }

  public onChange(selectedIndex){
    this.selectedIndex = selectedIndex;
  }

  public onDateChange(selectedIndex){
    this.selectedDateIndex = selectedIndex;
  }

  public onSpendingChange(selectedIndex){
    this.selectedSpendingIndex = selectedIndex;
  }

}
















