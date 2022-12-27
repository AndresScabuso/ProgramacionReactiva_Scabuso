import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, interval, Subject } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent  implements OnDestroy {
  
  randomPokemon = new Subject<number>();
  public userPokemon : Pokemon = new Pokemon(1, "Sin valor", 0, 0, "https://www.svgrepo.com/show/54691/pokemon.svg") // Pokemon del usuario
  public comPokemon : Pokemon = new Pokemon(1, "Sin valor", 0, 0, "https://www.svgrepo.com/show/54691/pokemon.svg") // Pokemon de la PC

  public searchControl = new FormControl('');
  public pokemonForm = new FormGroup({
    search: this.searchControl
  });

  constructor(public pokemonService: PokemonService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
      )
      .subscribe((value) => {
        value && this.pokemonService.searchPokemonByText(value.toLowerCase()).subscribe((value) => this.userPokemon = new Pokemon(value.id, value.name, value.height, value.weight, value.imageUrl));
      });

      interval(1000).subscribe(() => {
        this.randomPokemon.next(Math.floor(Math.random() * 150) + 1)  // Pokemon random entre 1 y 150
      })
      this.randomPokemon.subscribe((valor) => this.pokemonService.searchPokemonById(valor).subscribe((value) => this.comPokemon = new Pokemon(value.id, value.name, value.height, value.weight, value.imageUrl)))
  }

  ngOnDestroy(): void {
    this.randomPokemon.unsubscribe()
  }
}
