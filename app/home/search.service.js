"use strict";
var core_1 = require('@angular/core');
var http_1 = require("http");
var router_1 = require("nativescript-angular/router");
var SearchService = (function () {
    function SearchService(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    SearchService.prototype.getEvents = function (criteria) {
        var that = this;
        var futureDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).toJSON().slice(0, 10);
        var startDate = futureDate + 'T00:00:00Z';
        var url = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=us&start_date.range_start=' + startDate + '&expand=venue&token=YZO3HZ5MJZYKY6QU64H2';
        http_1.getJSON(url).then(function (response) {
            that.events = response;
            that.routerExtensions.navigate(["/search-results"]);
        }, function (error) {
            console.error(error);
        });
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map