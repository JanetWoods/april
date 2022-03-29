"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var pro_players_component_1 = require("./pro-players/pro-players.component");
var pro_teams_component_1 = require("./pro-teams/pro-teams.component");
var players_component_1 = require("./players/players.component");
var navigation_component_1 = require("./navigation/navigation.component");
var pod_component_1 = require("./pod/pod.component");
var teams_component_1 = require("./teams/teams.component");
var stars_component_1 = require("./stars/stars.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                pro_players_component_1.ProPlayersComponent,
                pro_teams_component_1.ProTeamsComponent,
                players_component_1.PlayersComponent,
                navigation_component_1.NavigationComponent,
                pod_component_1.PodComponent,
                teams_component_1.TeamsComponent,
                stars_component_1.StarsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
