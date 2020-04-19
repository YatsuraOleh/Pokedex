import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { PokeServiceService } from 'src/app/core/services';
import { PokemonResponseResults } from 'src/app/core/interfaces';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() pokemon: PokemonResponseResults;

  pokemonData: any;
  modalRef: BsModalRef;

  constructor(
    private pokemonsServices: PokeServiceService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.getPokemon(this.pokemon.url);
  }

  getPocemonType(type: string): string {
    switch (type) {
      case 'grass':
        return 'badge-success';
      case 'fire':
        return 'badge-danger';
      case 'electric':
        return 'badge-warning';
      case 'poison':
          return 'badge-poison';
      case 'flying':
            return 'badge-flying';
      case 'water':
            return 'badge-water';
      case 'bug':
            return 'badge-bug';
      case 'normal':
            return 'badge-normal';
      default:
        return '';
    }  
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  private async getPokemon(pokemonUrl: string) {
    this.pokemonData = await this.pokemonsServices.getPokemon(pokemonUrl)
    .toPromise();  
  }
}