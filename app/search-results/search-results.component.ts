import { Component } from "@angular/core";
import { SearchService } from "../home/search.service"

@Component({
    selector: "search-results",
    templateUrl: "./search-results/search-results.component.html",
})
export class SearchResultsComponent {

  matches = this.searchService.events.events;

  constructor(private searchService: SearchService) {

  }

  public onItemTap(item) {
    for(var key in this.matches[item.index]){
      console.log("MATCHES", key);
    }
    alert("Find This Event Here: \n" + this.matches[item.index].url);
  }
}
