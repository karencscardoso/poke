import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, startWith } from 'rxjs/operators';  
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokeCardComponent } from 'src/app/shared/poke-card/poke-card.component';

export interface User {
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PokeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]> | undefined;
  pokemonsList: any[] = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getAllPokemons() {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      this.pokemonsList = data.results;
    });
  }
}
