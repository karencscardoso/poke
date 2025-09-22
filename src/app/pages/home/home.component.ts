import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, startWith } from 'rxjs/operators';  
import { forkJoin, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PokeCardComponent } from 'src/app/shared/poke-card/poke-card.component';
import { PokemonListRequest } from 'src/app/core/models/poke-list-request.model';
import { Pokemon } from 'src/app/core/models/poke.model';
import { MatButtonModule } from '@angular/material/button';

export interface User {
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PokeCardComponent,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  pokemonsList: Pokemon[] = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getPokemons().subscribe((data: PokemonListRequest) => {
      const pokemonRequest: Observable<Pokemon>[] = data.results.map((pokemon) => {
        return this.pokemonService.getPokemonByUrl(pokemon.url);
      });

      forkJoin(pokemonRequest).subscribe((detailedPokemons: Pokemon[]) => {
        this.pokemonsList = detailedPokemons;
      })
    });
  }
  
  loadMorePokemons() {
    
  }
}

