import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/core/services';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  pokemons;

  constructor( private pokemonsServices: PokeServiceService) { }

  ngOnInit() {
    this.pokemonsServices.getPokemons().subscribe((response)=> console.log(response))
  }

}
