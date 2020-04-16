import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(private http: HttpClient) {

  }
  public getPokemons(page = 'https://pokeapi.co/api/v2/pokemon?limit=12') {
    return this.http.get(page);
  }

  public getPokemon(pokemonUrl) {
    return this.http.get(pokemonUrl);
  }

}


