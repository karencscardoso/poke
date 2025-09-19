export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  other: OtherSprites;
}

 export interface OtherSprites {
  dream_world: DreamWorldSprites;
  'official-artwork': OfficialArtworkSprites;
 }

 export interface DreamWorldSprites {
  front_default: string;
 }

 export interface OfficialArtworkSprites {
  front_default: string | null;
  front_shiny: string | null;
}

