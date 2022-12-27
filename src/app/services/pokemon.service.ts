import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://pokeapi.co/api/v2/';
  }

  searchPokemonByText(searchText: string) {
    return this.http.get(this.baseUrl + 'pokemon/' + searchText)
    .pipe(
      map((value: any) => new Pokemon(value.id, value.name, value.height, value.weight, value.sprites.front_default))
    );
  }

  searchPokemonById(id: number) {
    return this.http.get(this.baseUrl + 'pokemon/' + id)
    .pipe(
      map((value: any) => new Pokemon(value.id, value.name, value.height, value.weight, value.sprites.front_default))
    );
  }
}
