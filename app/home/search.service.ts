import { Injectable } from '@angular/core';
import { getJSON, request } from "http";

@Injectable()
export class SearchService {
  events: any;

  constructor() {
  }

  public getEvents(criteria) {

    var that = this;

      var futureDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).toJSON().slice(0,10);
      var startDate = futureDate + 'T00:00:00Z';

      var url = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=us&start_date.range_start='+ startDate +'&expand=venue&token=YZO3HZ5MJZYKY6QU64H2';

      getJSON(url).then(function(response){
        that.events = response;
      }, function(error){
        console.error(error);
      });

  }

}
