import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import { ProPlayersComponent } from './pro-players/pro-players.component';
import { ProTeamsComponent } from './pro-teams/pro-teams.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [

  { path: 'proplayer', component: ProPlayersComponent },
  { path: 'proteams', component: ProTeamsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'blog', component: BlogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

