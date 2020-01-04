import { combineReducers } from "redux";
import {loadPokemonList} from "./cardlist/actions";
import {loadPokemonCard} from "./card/actions";

export default combineReducers({
    cardList: loadPokemonList,
    card: loadPokemonCard
});
