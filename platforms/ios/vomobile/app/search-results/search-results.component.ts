import { Component } from "@angular/core";
import { SearchService } from "../home/search.service"

@Component({
    selector: "search-results",
    templateUrl: "./search-results/search-results.component.html",
})
export class SearchResultsComponent {

    constructor(private searchService: SearchService) {

    }

    public onTap() {
        alert("You tapped that! " + this.searchService.events);
    }
}
