import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PokeServiceService } from 'src/app/core/services';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  pokemons;
  nextPage;



  constructor(private pokemonsServices: PokeServiceService) { }

  ngOnInit() {
    this.pokemonsServices.getPokemons().subscribe((response) => {
      this.pokemons = response['results'];
      this.nextPage = response['next'];
    })
  }

  public loadMore(): void {
    this.pokemonsServices.getPokemons(this.nextPage).subscribe((response) => {
      this.pokemons = this.pokemons.concat(response['results']);
      this.nextPage = response['next'];
    })
  }

}
