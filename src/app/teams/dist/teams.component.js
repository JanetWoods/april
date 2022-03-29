"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TeamsComponent = /** @class */ (function () {
    function TeamsComponent() {
        this.title = 'Your Teams';
        this._listFilter = '';
        this.filteredTeams = [];
        this.teams = [
            {
                id: 1,
                iTeamName: 'Lions',
                ownerID: 1,
                rating: 5,
                players: []
            },
            {
                id: 2,
                iTeamName: 'Tigers',
                ownerID: 2,
                rating: 3,
                players: []
            },
            {
                id: 3,
                iTeamName: 'Rams',
                ownerID: 3,
                rating: 5,
                players: []
            },
            {
                id: 4,
                iTeamName: 'Cats',
                ownerID: 4,
                rating: 5,
                players: []
            },
            {
                id: 5,
                iTeamName: 'Dodgers',
                ownerID: 5,
                rating: 3.75,
                players: []
            },
            {
                id: 6,
                iTeamName: 'Eagles',
                ownerID: 6,
                rating: 4.5,
                players: []
            },
            {
                id: 7,
                iTeamName: 'Snakes',
                ownerID: 7,
                rating: 2.75,
                players: []
            },
            {
                id: 8,
                iTeamName: 'Hippos',
                ownerID: 4,
                rating: 5,
                players: []
            },
            {
                id: 9,
                iTeamName: 'Stealers',
                ownerID: 9,
                rating: 3.5,
                players: []
            },
            {
                id: 10,
                iTeamName: 'Tricks',
                ownerID: 10,
                rating: 2,
                players: []
            },
            {
                id: 11,
                iTeamName: 'Sliders',
                ownerID: 11,
                rating: 3,
                players: []
            },
        ];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.listFilter = '';
    };
    TeamsComponent.prototype.ngOnChanges = function () {
        this.listFilter;
    };
    TeamsComponent.prototype.filterThem = function (listFilter) {
        listFilter = listFilter.toLocaleLowerCase();
        return this.teams.filter(function (team) {
            return team.iTeamName.toLocaleLowerCase().includes(listFilter);
        });
    };
    Object.defineProperty(TeamsComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            console.log('Teams List Filter is: ', value);
            this.filteredTeams = this.filterThem(value);
        },
        enumerable: true,
        configurable: true
    });
    TeamsComponent = __decorate([
        core_1.Component({
            selector: 'app-teams',
            templateUrl: './teams.component.html',
            styleUrls: ['./teams.component.scss']
        })
    ], TeamsComponent);
    return TeamsComponent;
}());
exports.TeamsComponent = TeamsComponent;

//# sourceMappingURL=teams.component.js.map
