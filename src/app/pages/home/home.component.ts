import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PokeCardComponent } from 'src/app/shared/poke-card/poke-card.component';
import { PokemonListRequest } from 'src/app/core/models/poke-list-request.model';
import { Pokemon } from 'src/app/core/models/poke.model';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PokemonsTypeResponse } from 'src/app/core/models/poke-type';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatChipsModule } from '@angular/material/chips';


export interface User {
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PokeCardComponent,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [ // Quando a div é renderizada (*ngIf se torna true)
        style({ height: '0', opacity: 0, overflow: 'hidden' }), // Estado inicial (oculto)
        animate('300ms ease-out', style({ height: '*', opacity: 1 })) // Transição para o estado final
      ]),
      transition(':leave', [ // Quando a div é removida (*ngIf se torna false)
        style({ height: '*', opacity: 1, overflow: 'hidden' }), // Estado inicial (visível)
        animate('200ms ease-in', style({ height: '0', opacity: 0 })) // Transição para o estado oculto
      ])
    ]) 
  ]
})

export class HomeComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  

  offset: number = 0;
  limit: number = 20;
  pokemonsList: Pokemon[] = [];
  pokemonsListFiltered: Pokemon[] = [];

  searchControl = new FormControl('');
  selectedTypes: string[] = [];

  isSearching: boolean = false;
  isFilterVisible: boolean = false;

  pokemonTypes: string[] = [
    'grass', 'fire', 'water', 'electric', 'bug', 'normal',
    'poison', 'ground', 'fairy', 'fighting', 'psychic',
    'rock', 'ghost', 'ice', 'dragon', 'steel', 'dark', 'flying'
  ];

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
    this.setupNameSearch();
  }

  setupNameSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.handleGlobalSearch())
    ).subscribe();

  }

  toggleFilterVisibility(): void {
    this.isFilterVisible = !this.isFilterVisible;
  }

  toggleType(type: string): void {
    const index = this.selectedTypes.indexOf(type);
    if (index > -1) {
      this.selectedTypes.splice(index, 1);
    } else {
      this.selectedTypes.push(type);
    }
    this.handleGlobalSearch();
  }

  handleGlobalSearch(): void {
    const searchName = (this.searchControl.value || '').toLowerCase();
    const typesToFilter = this.selectedTypes;

    if (!searchName && typesToFilter.length === 0) {
      this.isSearching = false;
      this.pokemonsListFiltered = [...this.pokemonsList];
      return
    }
    this.isSearching = true;

    if (searchName) {
      this.pokemonService.getPokemonByName(searchName).subscribe({
        next: (pokemon: Pokemon) => {
          this.pokemonsListFiltered = [pokemon];
        },
        error: (err: any) => {
          console.log('Pokémon não encontrado:', searchName);
          this.pokemonsListFiltered = [];
        }
      });
      return
    }
    if (typesToFilter.length > 0) {
      const primaryType = typesToFilter[0];
      this.pokemonService.getPokemonsByType(primaryType).subscribe({
        next: (typeData: PokemonsTypeResponse) => {
          const pokemonRequests: Observable<Pokemon>[] = typeData.pokemon.map((item: any) => {
            return this.pokemonService.getPokemonByUrl(item.pokemon.url);
          });

          forkJoin(pokemonRequests).subscribe((deteiledPokemons: Pokemon[]) => {
            this.pokemonsListFiltered = deteiledPokemons;
          });
        },
        error: (err: any) => {
          console.log('Erro ao buscar Pokémons por tipo:', primaryType, err);
          this.pokemonsListFiltered = [];
        }
      });
    }
  }

  getAllPokemons() {
    this.pokemonService.getPokemons(this.offset, this.limit).subscribe((data: PokemonListRequest) => {

      const pokemonRequest: Observable<Pokemon>[] = data.results.map((pokemon) => {
        return this.pokemonService.getPokemonByUrl(pokemon.url);
      });

      forkJoin(pokemonRequest).subscribe((detailedPokemons: Pokemon[]) => {
        this.pokemonsList.push(...detailedPokemons);

        if (!this.isSearching) {
          this.handleGlobalSearch();
        } else {
          this.pokemonsListFiltered = [...this.pokemonsList];
        }
      });
    });
  }

  loadMorePokemons() {
    if (this.isSearching) {
      console.log('Não é possível carregar mais Pokémons durante a busca global.');
      return
    }
    this.offset += this.limit;
    this.getAllPokemons();
  }

clearFilters(): void {
    this.searchControl.setValue('');
    this.selectedTypes = [];
    this.handleGlobalSearch();
    this.isFilterVisible = false;
}
}
