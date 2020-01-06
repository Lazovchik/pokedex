import {GET_POKE_TO_DISP_ID} from "./action-types";

export const loadPokemonCard = (id) => ({
    type: GET_POKE_TO_DISP_ID,
    payload: id
})