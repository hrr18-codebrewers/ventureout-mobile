"use strict";
var core_1 = require('@angular/core');
var http_1 = require("http");
var SearchService = (function () {
    function SearchService() {
        this.events = [1, 2, 3];
    }
    SearchService.prototype.getEvents = function (criteria) {
        http_1.getJSON('http://ventureout.ddns.net:1337/api/events').then(function (response) {
            console.log(response[0]);
        }, function (error) {
            console.error(error);
        });
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map