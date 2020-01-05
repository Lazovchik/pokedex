import {LOAD_POKEMON_LIST} from "../action-types";

export function loadPokemonList () {
    return function(dispatch){
        return fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: LOAD_POKEMON_LIST, payload: json['results'] });
            });
    }
}