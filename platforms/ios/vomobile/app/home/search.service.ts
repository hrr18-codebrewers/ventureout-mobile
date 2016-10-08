import { Injectable } from '@angular/core';
import { getJSON, request } from "http";

@Injectable()
export class SearchService {
  events = [1,2,3];

  constructor() {
  }

  public getEvents(criteria) {
    getJSON('http://ventureout.ddns.net:1337/api/events').then(function(response){
      console.log(response[0]);
    }, function(error){
      console.error(error);
    });
  }

}
