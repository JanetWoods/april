import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProPlayersComponent } from './pro-players/pro-players.component';
import { ProTeamsComponent } from './pro-teams/pro-teams.component';
import { PlayersComponent } from './players/players.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PodComponent } from './pod/pod.component';
import { TeamsComponent } from './teams/teams.component';
import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ProPlayersComponent,
    ProTeamsComponent,
    PlayersComponent,
    NavigationComponent,
    PodComponent,
    TeamsComponent,
    StarsComponent,
    FooterComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
