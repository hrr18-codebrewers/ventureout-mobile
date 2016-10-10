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

    var category = categories[criteria.interests];


    // Location search
    var splitLocation = criteria.location.split(' ');
    var location = splitLocation.join('');


      var futureDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).toJSON().slice(0,10);
      var startDate = futureDate + 'T00:00:00Z';

      var url = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address='+location+'&start_date.range_start='+ startDate +'&expand=venue&token=YZO3HZ5MJZYKY6QU64H2';

      getJSON(url).then(function(response){
        that.events = response;
        that.routerExtensions.navigate(["/search-results"]);
      }, function(error){
        console.error(error);
      });

  }

}
