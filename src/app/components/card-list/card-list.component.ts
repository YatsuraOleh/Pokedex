import { Component, OnInit } from '@angular/core';

import { PokeServiceService } from 'src/app/core/services';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit {
  pokemonsList;
  nextPageUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";
  previousPageUrl = '';

  constructor(
    private pokemonsServices: PokeServiceService
  ) { }

  ngOnInit() {
    this.getPokemons(this.nextPageUrl);
  }

  previousPage(): void {
    this.getPokemons(this.previousPageUrl);
  }

  nextPage(): void {
    this.getPokemons(this.nextPageUrl);
  }

  private async getPokemons(url: string): Promise<void> {
    const response = await this.pokemonsServices.getPokemons(url)
      .toPromise();
    
      this.pokemonsList = response.results;
      this.nextPageUrl = response.next;
      this.previousPageUrl = response.previous;
  }
}
