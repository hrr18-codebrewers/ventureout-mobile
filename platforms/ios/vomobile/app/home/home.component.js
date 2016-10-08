"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var search_service_1 = require("./search.service");
var HomeComponent = (function () {
    function HomeComponent(router, searchService) {
        this.router = router;
        this.searchService = searchService;
    }
    HomeComponent.prototype.onTap = function () {
        var info = {
            interests: this.interests,
            start: this.start,
            end: this.end,
            budget: this.budget,
            location: this.location
        };
        alert("You are searching for " + JSON.stringify(info));
        this.searchService.getEvents(info);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home-page",
            templateUrl: "./home/home.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, search_service_1.SearchService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map