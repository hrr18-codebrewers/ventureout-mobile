"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.onTap = function () {
        alert("You tapped that! " + this.interests + ' ' + this.start + ' ' + this.end + ' ' + this.budget + ' ' + this.location);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home-page",
            templateUrl: "./home/home.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map