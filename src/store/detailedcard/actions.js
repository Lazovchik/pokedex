import {LOAD_CARD_DETAILS, LOAD_SPECIES_DETAILS} from "../action-types";

export function loadPokemonDetail (link) {
    return function(dispatch){
        return fetch(link)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: LOAD_CARD_DETAILS, payload: json });
            });
    }
}


export function loadSpeciesDetail (link) {
    return function(dispatch){
        return fetch(link)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: LOAD_SPECIES_DETAILS, payload: json });
            });
    }
}