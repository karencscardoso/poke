import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: any;
  @Input() numero!: number;

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

  informacao() {
    this.dialog.open(DialogComponent);
  }

  onGetInfo(pokemonName: string): void{
    console.log('NOME DO POKE QUE EU CLIQUEI: ', pokemonName);
    this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemon: any) =>{
      console.log('CARACTERISTICAS DO PERSONAGEM: ', pokemon);
      
      this.dialog.open(DialogComponent, {
        data: pokemon
      });
    })
    
  }

}
