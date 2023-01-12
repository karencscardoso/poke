import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  listPoke: any[] = [];

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokes();
  }
  
  getAllPokes(): void {
    this.pokemonService.getAllPokemons(100).subscribe((data: any) => {
      this.listPoke = data.results;  
      // const charmeleonSelected = this.listPoke.filter(a => a.name == 'charmeleon')  
      // console.log('charmeleonSelected: ', charmeleonSelected);
    })
  }
}
