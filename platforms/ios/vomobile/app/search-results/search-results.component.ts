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

  // Provide url so users can learn more about the events and buy tickets
  public onItemTap(item) {
    alert("Find This Event Here: \n" + this.matches[item.index].url);
  }
}
