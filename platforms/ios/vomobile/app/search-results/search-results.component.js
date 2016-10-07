"use strict";
var core_1 = require("@angular/core");
var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
    }
    SearchResultsComponent.prototype.onTap = function () {
        console.log("You tapped that!");
    };
    SearchResultsComponent = __decorate([
        core_1.Component({
            selector: "search-results",
            templateUrl: "./search-results/search-results.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map