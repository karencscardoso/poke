import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
