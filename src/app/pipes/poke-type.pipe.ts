import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'pokeType'
})
export class PokeTypePipe implements PipeTransform {

  transform(pokemons: Pokemon[], type: string): Pokemon[] {
    let results = [];

    if (type === 'all'){
      results = [...pokemons];
    } else{
      pokemons.forEach((poke) => {
        poke.types.forEach( pokeType => {
          if (pokeType['name'] === type) {
            results.push(poke);
          }
        });
      });
    }

    return results;
  }
}
