import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  games;

  constructor(private httpService: GamesService) {}

  ngOnInit() {
    this.games = this.httpService.getGames();
  }

}
