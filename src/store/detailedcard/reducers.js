import {LOAD_CARD_DETAILS, LOAD_SPECIES_DETAILS} from "../action-types";

const defaultState = {
    details: [],
    species: [],

}

export const detailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (LOAD_CARD_DETAILS):
            return {
                ...state,
                details: action.payload
            };
        case (LOAD_SPECIES_DETAILS):
            return {
                ...state,
                species: action.payload
            };
    }
    return state;
}