import {LOAD_POKEMON_CARD} from "../action-types";

const defaultState = {
    name: "",
    id: "",
    url: "",
    imgUrl: ""
}

const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (LOAD_POKEMON_CARD):
            return {
                ...state,
                name: action.payload.name,
                id: action.payload.id,
                url: action.payload.url,
                imgUrl: action.payload.imgUrl
            };
    }
    return state;
}