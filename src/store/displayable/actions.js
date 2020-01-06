import {GET_POKE_TO_DISP_ID} from "../action-types";

export const loadPokemonDetailedCard = (id) => ({
    type: GET_POKE_TO_DISP_ID,
    payload: id
})