export class PokemonResponse {
  "count": number;
  "next": string;
  "previous": string;
  "results": Array<PokemonResponseResults>;
}

export class PokemonResponseResults {
    name: string;
    url: string;
}