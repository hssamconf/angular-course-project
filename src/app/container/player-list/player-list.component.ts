import { Component, OnInit } from '@angular/core';
import {Player} from './player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] =  [];

  constructor() {
    this.players.push(new Player('Cristiano Ronaldo', 'REAL MADRID', 125));
    this.players.push(new Player('Leonel Messi', 'FC BARCELONA', 119));
    this.players.push(new Player('Luise Suarez', 'FC BARCELONA', 109));
  }

  ngOnInit() {
  }

}
