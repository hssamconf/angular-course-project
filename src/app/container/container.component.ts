import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Player} from './player';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {
  @Input() title: string;
  currentRate = 8;
  players: Player[] = [];

  constructor() {
    this.players.push(new Player('Cristiano Ronaldo', 'REAL MADRID', 125));
    this.players.push(new Player('Leonel Messi', 'FC BARCELONA', 119));
    this.players.push(new Player('Luise Suarez', 'FC BARCELONA', 109));
  }

  ngOnInit() {
  }

  onPlayerCreated(player: Player) {
    this.players.push(player);
  }

}
