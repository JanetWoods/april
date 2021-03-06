"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.rating = 4;
        this.cropWidth = 100;
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    StarsComponent.prototype.ngOnChanges = function () {
        this.cropWidth = this.rating * 100 / 5;
    };
    __decorate([
        core_1.Input()
    ], StarsComponent.prototype, "rating");
    StarsComponent = __decorate([
        core_1.Component({
            selector: 'app-stars',
            templateUrl: './stars.component.html',
            styleUrls: ['./stars.component.scss']
        })
    ], StarsComponent);
    return StarsComponent;
}());
exports.StarsComponent = StarsComponent;

//# sourceMappingURL=stars.component.js.map
