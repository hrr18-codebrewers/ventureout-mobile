"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var search_service_1 = require("./search.service");
var HomeComponent = (function () {
    function HomeComponent(router, searchService) {
        this.router = router;
        this.searchService = searchService;
        this.selectedIndex = 0;
        this.selectedDateIndex = 0;
        this.timeframes = ['Today',
            'Tomorrow',
            'This Week',
            'This Weekend',
            'Next Week',
            'This Month',
            'Next Month'];
        this.categories = ['Business & Professional',
            'Music',
            'Food & Drink',
            'Community & Culture',
            'Performing & Visual Arts',
            'Film, Media & Entertainment',
            'Sports & Fitness',
            'Health & Wellness',
            'Science & Technology',
            'Travel & Outdoor',
            'Charity & Causes',
            'Religion & Spirituality',
            'Family & Education',
            'Seasonal & Holiday',
            'Government & Politics',
            'Fashion & Beauty',
            'Home & Lifestyle',
            'Auto, Boat & Air',
            'Hobbies & Special Interest',
            'other'];
    }
    HomeComponent.prototype.onTap = function () {
        console.log("info", this.selectedIndex, this.selectedDateIndex);
        var info = {
            interests: this.categories[this.selectedIndex],
            timeframe: this.timeframes[this.selectedDateIndex],
            budget: this.budget,
            location: this.location
        };
        console.log("Info", JSON.stringify(info));
        this.searchService.getEvents(info);
    };
    HomeComponent.prototype.onchange = function (selectedIndex) {
        this.selectedIndex = selectedIndex;
    };
    HomeComponent.prototype.onDateChange = function (selectedIndex) {
        this.selectedDateIndex = selectedIndex;
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