import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import { PokemonListRequest } from './models/poke-list-request.model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(public pokemonService:PokemonService) { }

  pokemonsList: any[] = [];

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getPokemons().subscribe((data:any) => {
      this.pokemonsList = data.results;

      //console.log(this.pokemonsList);

    })
  }

}
