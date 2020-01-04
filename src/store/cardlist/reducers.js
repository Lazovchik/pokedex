import {LOAD_POKEMON_LIST} from "../action-types";

const defaultState = {
    pokemonsList: []
}

export const listReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (LOAD_POKEMON_LIST):
           return {
               ...state,
               pokemonsList: action.payload
           };
    }
    return state;
}