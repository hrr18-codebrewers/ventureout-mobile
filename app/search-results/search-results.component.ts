import {Component} from "@angular/core";

@Component({
    selector: "search-results",
    templateUrl: "./search-results/search-results.component.html",
})
export class SearchResultsComponent {
    public onTap() {
        console.log("You tapped that!");
    }
}
