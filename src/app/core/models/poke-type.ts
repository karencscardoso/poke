export interface PokemonTypeItem {
    slot: number;
    pokemon: {
        name: string;
        url: string;
    };
}

export interface PokemonsTypeResponse {
   pokemon: PokemonTypeItem[]; 
}