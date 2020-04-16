import { Component, OnInit, Input } from '@angular/core';
import { PokeServiceService } from 'src/app/core/services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemonUrl;
  pokemon;

  constructor(private pokemonsServices: PokeServiceService) { }

  ngOnInit() {
    this.pokemonsServices.getPokemon(this.pokemonUrl).subscribe((response) => {
      this.pokemon = response;
      console.log(this.pokemon);
    })
  }

}
