import { combineReducers } from "redux";
import {listReducer} from "./cardlist/reducers";
import {cardReducer} from "./card/reducers";
import {detailReducer} from "./detailedcard/reducers";
import {GET_POKE_TO_DISP_ID} from "./action-types";


const defaultState ={
    displayablePokemonId: ''
}

const idReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (GET_POKE_TO_DISP_ID):
            return {
                ...state,
                displayablePokemonId: action.payload
            };
    }
    return state;
}


export default combineReducers({
    cardList: listReducer,
    card: cardReducer,
    detail: detailReducer,
    idLoad: idReducer()
});
