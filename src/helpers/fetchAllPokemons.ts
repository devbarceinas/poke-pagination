import { BASE_URL } from '../api/pokemonApi';
import { PokemonResponse } from '../interfaces/PokemonInterfaces';

export const fetchAllPokemons = async  <PokemonResponse>() => {
  const path = `${BASE_URL}/pokemon?limit=10`;
  try {
    const response = await fetch(path);
    const pokemons = await response.json();
    console.log(pokemons);
  } catch (error) {
    console.log(error);
  }
}