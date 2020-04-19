import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PokemonResponse } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})

export class PokeServiceService {
 
  constructor(
    private http: HttpClient
  ) { }

  getPokemons(pokemonsUrl: string): Observable<PokemonResponse> {
    if (!pokemonsUrl) {
     return;
   }
    return this.http.get<any>(pokemonsUrl);
  }

  getPokemon(pokemonUrl: string) {
    return this.http.get(pokemonUrl);
  } 
}


