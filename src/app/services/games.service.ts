import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpService: HttpClient) { }

  // getGames() {
  //   return this.httpService.get('https://rawg-video-games-database.p.rapidapi.com/games');
  // }

  async getGames() {
    const apiUrl = 'https://rawg-video-games-database.p.rapidapi.com/games';
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'a52fe69426msh1f35c669fc86b74p1400dajsnbf9383d6c503'
      }
    });
    const gameData = await response.json();
    console.log(gameData);
  }
}
