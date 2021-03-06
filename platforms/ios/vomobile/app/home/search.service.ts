import { Injectable } from '@angular/core';
import { getJSON, request } from "http";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class SearchService {
  events: any;

  constructor(private routerExtensions: RouterExtensions) {
  }

  public getEvents(criteria) {

    // Save context
    var that = this;

    // Eventbrite event categories
    var categoryId;
    var categories = {
      '101': 'Business & Professional',
      '103': 'Music',
      '110': 'Food & Drink',
      '113': 'Community & Culture',
      '105': 'Performing & Visual Arts',
      '104': 'Film, Media & Entertainment',
      '108': 'Sports & Fitness',
      '107': 'Health & Wellness',
      '102': 'Science & Technology',
      '109': 'Travel & Outdoor',
      '111': 'Charity & Causes',
      '114': 'Religion & Spirituality',
      '115': 'Family & Education',
      '116': 'Seasonal & Holiday',
      '112': 'Government & Politics',
      '106': 'Fashion & Beauty',
      '117': 'Home & Lifestyle',
      '118': 'Auto, Boat & Air',
      '119': 'Hobbies & Special Interest',
      '199': 'other'
    };
    for(var key in categories){
      if(categories[key] === criteria.interests){
        categoryId = key;
      }
    }

    // Timeframe
    var timeframe = criteria.timeframe.replace(' ', '_').toLowerCase();

    // Price
    var budget = criteria.budget.toLowerCase();
    if(budget !== "free" && budget !== "paid"){
      budget = "paid";
    }

    // Location search
    var location;
    if(criteria.location === undefined){
      location = 'US';
    } else {
      var splitLocation = criteria.location.split(' ');
      location = splitLocation.join('');
    }

      var url = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=best&categories='+ categoryId +'&start_date.keyword='+ timeframe +'&price='+ budget +'&location.address='+ location +'&expand=venue&token=YZO3HZ5MJZYKY6QU64H2';

      getJSON(url).then(function(response){
        that.events = undefined;
        that.events = response;
        that.routerExtensions.navigate(["/search-results"]);
      }, function(error){
        console.error(error);
      });

  }

}
