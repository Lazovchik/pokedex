import {LOAD_POKEMON_LIST} from "../action-types";

export const loadPokemonList = (data) => ({
    type: LOAD_POKEMON_LIST,
     payload: data
})