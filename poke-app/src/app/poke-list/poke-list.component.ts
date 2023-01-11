import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemons = ['Bulbasaur', 'Ivysaur', 'Venosaur', 'Chamander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle']

  constructor() { }

  ngOnInit(): void {
  }

}
