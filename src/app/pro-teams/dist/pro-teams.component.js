"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ProTeamsComponent = /** @class */ (function () {
    function ProTeamsComponent() {
        this.showImage = false;
        this.title = "Pro Teams";
        this._listFilter = '';
        this.filteredTeams = [];
        this.proTeams = [
            {
                id: 1,
                abbr: 'BUF',
                proTeamName: 'Buffalo Bills',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 2,
                abbr: 'IND',
                proTeamName: 'Indianapolis Colts',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 3,
                abbr: 'MIA',
                proTeamName: 'Miami Dolphins',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 4,
                abbr: 'NE',
                proTeamName: 'New England Patriots',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 5,
                abbr: 'NYJ',
                proTeamName: 'New York Jets',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 6,
                abbr: 'CIN',
                proTeamName: 'Cincinnati Bengals',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 7,
                abbr: 'CLE',
                proTeamName: 'Cleveland Browns',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 8,
                abbr: 'TEN',
                proTeamName: 'Tennessee Titans',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 9,
                abbr: 'PIT',
                proTeamName: 'Pittsburgh Steelers',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 10,
                abbr: 'DEN',
                proTeamName: 'Denver Broncos',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 11,
                abbr: 'KC',
                proTeamName: 'Kansas City Chiefs',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 12,
                abbr: 'LV',
                proTeamName: 'Las Vegas Raiders',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 13,
                abbr: 'LAC',
                proTeamName: 'Los Angeles Chargers',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 14,
                abbr: 'SEA',
                proTeamName: 'Seattle Seahawks',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 15,
                abbr: 'DAL',
                proTeamName: 'Dallas Cowboys',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 16,
                abbr: 'NYG',
                proTeamName: 'New York Giants',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 17,
                abbr: 'PHI',
                proTeamName: 'Philadelphia Eagles',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 18,
                abbr: 'ARI',
                proTeamName: 'Arizona Cardinals',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 19,
                abbr: 'WAS',
                proTeamName: 'Washington Redskins',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 20,
                abbr: 'CHI',
                proTeamName: 'Chicago Bears',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 21,
                abbr: 'DET',
                proTeamName: 'Detroit Lions',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 22,
                abbr: 'GB',
                proTeamName: 'Green Bay Packers',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 23,
                abbr: 'MIN',
                proTeamName: 'Minnesota Vikings',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 24,
                abbr: 'TB',
                proTeamName: 'Tampa Bay Buccaneers',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 25,
                abbr: 'ATL',
                proTeamName: 'Atlanta Falcons',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 26,
                abbr: 'NAR',
                proTeamName: 'Los Angeles Rams',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 27,
                abbr: 'NO',
                proTeamName: 'New Orleans Saints',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 28,
                abbr: 'SF',
                proTeamName: 'San Francisco 49ers',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 29,
                abbr: 'CAR',
                proTeamName: 'Carolina Panthers',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 30,
                abbr: 'JAX',
                proTeamName: 'Jacksonville Jaguars',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 31,
                abbr: 'BAL',
                proTeamName: 'Baltimore Ravens',
                picpath: '../../assets/images/HSplayers.jpg'
            },
            {
                id: 32,
                abbr: 'HOU',
                proTeamName: 'Houston Texans',
                picpath: '../../assets/images/HSplayers.jpg'
            },
        ];
    }
    Object.defineProperty(ProTeamsComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            console.log('setting list filter value for Pro Teams to: ', value);
            this.filteredTeams = this.filterThem(value);
        },
        enumerable: true,
        configurable: true
    });
    ProTeamsComponent.prototype.filterThem = function (listFilter) {
        listFilter = listFilter.toLocaleLowerCase();
        return this.proTeams.filter(function (team) {
            return team.proTeamName.toLocaleLowerCase().includes(listFilter);
        });
    };
    ProTeamsComponent.prototype.togglePics = function () {
        if (this.showImage) {
            this.showImage = false;
            console.log("ShowImage should be false now");
        }
        if (!this.showImage) {
            this.showImage = true;
            console.log("clicked togglePics again, showImage set to true.");
        }
    };
    ProTeamsComponent.prototype.ngOnInit = function () {
        this.listFilter = '';
    };
    ProTeamsComponent = __decorate([
        core_1.Component({
            selector: 'app-pro-teams',
            templateUrl: './pro-teams.component.html',
            styleUrls: ['./pro-teams.component.scss']
        })
    ], ProTeamsComponent);
    return ProTeamsComponent;
}());
exports.ProTeamsComponent = ProTeamsComponent;

//# sourceMappingURL=pro-teams.component.js.map
