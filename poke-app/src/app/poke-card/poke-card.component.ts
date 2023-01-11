import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
  @Input()
  pokemon!: String;

  @Input()
  numero!: number;

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

  constructor() { }

  ngOnInit(): void {
  }

}
