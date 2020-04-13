import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(private http: HttpClient) {

  }
  public getPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=12');
  }

  public getPokemon(pokemonUrl) {
    return this.http.get(pokemonUrl);
  
  }


}


