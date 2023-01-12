import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListRequest } from '../poke-list/models/poke-list-request.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons(): Promise<any> {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .toPromise();

    this.pokemons = requisicao.results;

  }

  getAllPokemons(limit: number): Observable<any> {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  }

}
