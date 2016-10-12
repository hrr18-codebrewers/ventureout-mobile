"use strict";
var core_1 = require("@angular/core");
var search_service_1 = require("../home/search.service");
var SearchResultsComponent = (function () {
    function SearchResultsComponent(searchService) {
        this.searchService = searchService;
        this.matches = this.searchService.events.events;
    }
    // Provide url so users can learn more about the events and buy tickets
    SearchResultsComponent.prototype.onItemTap = function (item) {
        alert("Find This Event Here: \n" + this.matches[item.index].url);
    };
    SearchResultsComponent = __decorate([
        core_1.Component({
            selector: "search-results",
            templateUrl: "./search-results/search-results.component.html",
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map