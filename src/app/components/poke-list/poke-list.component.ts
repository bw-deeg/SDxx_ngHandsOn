import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selected = null;
  newPokemon: Pokemon = new Pokemon();

  // pipes chapter added:
  types = [
    'all',
    'normal',
    'poison',
    'water',
    'fighting',
    'fire',
    'bug',
    'flying',
    'electric',
    'ground',
    'rock',
    'psychic',
    'ghost',
    'dragon'
  ];
  selectedType: string = this.types[0];

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokeService.index().subscribe(
      data => {
        this.pokemons = data;
      },
      err => {
        console.log('Error loading pokemon: ' + err);
      }
    );
  }

  create() {
    this.pokeService.create(this.newPokemon).subscribe(
      good => {
        this.loadPokemon();
        this.newPokemon = new Pokemon();
      },
      bad => {
        console.log('Error loading pokemon: ' + bad);
      }
    );
  }

  // select 1 for edit
  pickAPoke(poke: Pokemon) {
    this.selected = poke;
  }

  // after edit, reset to display all (Back btn)
  displayAll(){
    this.loadPokemon();
    this.selected=null;
  }

}
