import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListRequest } from '../models/poke-list-request.model';
import { Pokemon } from '../models/poke.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons(): Observable<PokemonListRequest> {
    return this.httpClient.get<PokemonListRequest>(`https://pokeapi.co/api/v2/pokemon`)/*?limit=1302*/
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url)
    
  }
}
