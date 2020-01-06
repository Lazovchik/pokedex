import {LOAD_CARD_DETAILS, LOAD_SPECIES_DETAILS, FETCH_DETAILS} from "../action-types";

const defaultState = {
    details: [],
    species: [],

    infos: {
        name : '',
        id : '',
        base_exp: '',
        imgUrl: '',
        height: '',
        weight: '',
        hp: '',
        attack: '',
        defence: '',
        sp_attack: '',
        sp_defence: '',
        speed: ''
    }

}

export const detailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (LOAD_CARD_DETAILS):
            return {
                ...state,
                details: action.payload
            };
        case (FETCH_DETAILS):
            return {
                ...state,
                infos: action.payload
            };
        case (LOAD_SPECIES_DETAILS):
            return {
                ...state,
                species: action.payload
            };
    }
    return state;
}