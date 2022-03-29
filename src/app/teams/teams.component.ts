import { Component, OnInit } from '@angular/core';
import { ITeam } from '../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  title: string = 'Your Teams';
  private _listFilter: string = '';

  constructor() {}

  ngOnInit(): void {
    this.listFilter = '';
  }

  ngOnChanges() {
    this.listFilter;
  }

  filterThem(listFilter: string) {
    listFilter = listFilter.toLocaleLowerCase();
    return this.teams.filter((team: ITeam) =>
      team.iTeamName.toLocaleLowerCase().includes(listFilter)
    );
  }
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('Teams List Filter is: ', value);
    this.filteredTeams = this.filterThem(value);
  }
  filteredTeams: ITeam[] = [];
  teams: ITeam[] = [
    {
      id: 1,
      iTeamName: 'Lions',
      ownerID: 1,
      rating: 5,
      players: [],
    },
    {
      id: 2,
      iTeamName: 'Tigers',
      ownerID: 2,
      rating: 3,
      players: [],
    },
    {
      id: 3,
      iTeamName: 'Rams',
      ownerID: 3,
      rating: 5,
      players: [],
    },
    {
      id: 4,
      iTeamName: 'Cats',
      ownerID: 4,
      rating: 5,
      players: [],
    },
    {
      id: 5,
      iTeamName: 'Dodgers',
      ownerID: 5,
      rating: 3.75,
      players: [],
    },
    {
      id: 6,
      iTeamName: 'Eagles',
      ownerID: 6,
      rating: 4.5,
      players: [],
    },
    {
      id: 7,
      iTeamName: 'Snakes',
      ownerID: 7,
      rating: 2.75,
      players: [],
    },
    {
      id: 8,
      iTeamName: 'Hippos',
      ownerID: 4,
      rating: 5,
      players: [],
    },
    {
      id: 9,
      iTeamName: 'Stealers',
      ownerID: 9,
      rating: 3.5,
      players: [],
    },
    {
      id: 10,
      iTeamName: 'Tricks',
      ownerID: 10,
      rating: 2,
      players: [],
    },
    {
      id: 11,
      iTeamName: 'Sliders',
      ownerID: 11,
      rating: 3,
      players: [],
    },
  ];
}
