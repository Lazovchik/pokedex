import {GET_POKE_TO_DISP_ID} from "../action-types";


const defaultState ={
    displayablePokemonId: '1'
}

export const idReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (GET_POKE_TO_DISP_ID):
            console.log(state.displayablePokemonId);
            console.log(action.payload);
            return {
                ...state,
                displayablePokemonId: action.payload,
            };
    }
    return state;
}
