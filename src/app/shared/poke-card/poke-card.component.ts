
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/modals/dialog/dialog.component';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { MatChipsModule } from '@angular/material/chips';
import { Pokemon } from 'src/app/core/models/poke.model';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule
  ],
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() numero!: number;
  @Input() tipo!: string;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }
//Formatação do número
  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
  //Fecha formatação de número

  constructor(private dialog: MatDialog,
              public pokemonService:PokemonService) { }

  ngOnInit(): void {
  }

  onGetInfo(pokemonName: string): void{
    //console.log('NOME DO POKE QUE EU CLIQUEI vindo do poke-card: ', pokemonName);
    this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemon: any) =>{
      //console.log('CARACTERISTICAS DO PERSONAGEM: ', pokemon);

      this.dialog.open(DialogComponent, {
        data: pokemon
      });
    })
  }



}
