import {LOAD_POKEMON_CARD} from "../action-types";

export const loadPokemonCard = (data) => ({
    type: LOAD_POKEMON_CARD,
    payload: data
})