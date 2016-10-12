"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var search_service_1 = require("./search.service");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(router, searchService, page) {
        this.router = router;
        this.searchService = searchService;
        this.page = page;
        // Indexes and selection lists for dropdown menus
        this.selectedSpendingIndex = 0;
        this.spending = ['Free',
            'Paid'];
        this.selectedTimeframeIndex = 0;
        this.timeframes = ['Today',
            'Tomorrow',
            'This Week',
            'This Weekend',
            'Next Week',
            'This Month',
            'Next Month'];
        this.selectedCategoryIndex = 0;
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
    // Sends form data to the search service to send the API request for relevant events
    HomeComponent.prototype.onTap = function () {
        var info = {
            interests: this.categories[this.selectedCategoryIndex],
            timeframe: this.timeframes[this.selectedTimeframeIndex],
            budget: this.spending[this.selectedSpendingIndex],
            location: this.location
        };
        // Stop partial requests
        for (var key in info) {
            if (info[key] === undefined) {
                alert("Please Fill Out All Criteria");
                return;
            }
        }
        this.searchService.getEvents(info);
    };
    // Functions to update the selected indexes of the dropdown menus
    HomeComponent.prototype.onCategoryChange = function (selectedIndex) {
        this.selectedCategoryIndex = selectedIndex;
    };
    HomeComponent.prototype.onTimeframeChange = function (selectedIndex) {
        this.selectedTimeframeIndex = selectedIndex;
    };
    HomeComponent.prototype.onSpendingChange = function (selectedIndex) {
        this.selectedSpendingIndex = selectedIndex;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home-page",
            templateUrl: "./home/home.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, search_service_1.SearchService, page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map