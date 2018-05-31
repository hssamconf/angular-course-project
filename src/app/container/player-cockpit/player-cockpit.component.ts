import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-player-cockpit',
  templateUrl: './player-cockpit.component.html',
  styleUrls: ['./player-cockpit.component.css']
})
export class PlayerCockpitComponent implements OnInit {

  @Output() playerCreated = new EventEmitter<Player>();
  player: Player;

  constructor() {
    this.player = new Player(null, null, null);
  }

  ngOnInit() {
  }

  onAddToList() {
    this.playerCreated.emit(this.player);
    this.player = new Player(null, null, null);
  }
}
