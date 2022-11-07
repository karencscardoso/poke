import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemons = ['Bulbasaur', 'Charizard', 'Squirtle', 'Charmander', 'Ivysaur', 'Charizard', 'Caterpie', 'Charmander']

  constructor() { }

  ngOnInit(): void {
  }

}
