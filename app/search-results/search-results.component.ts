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
    var match = this.matches[item.index]
    console.log("Match-Logo", match.logo);
    alert("Find This Event Here: \n" + this.matches[item.index].url);
  }
}
