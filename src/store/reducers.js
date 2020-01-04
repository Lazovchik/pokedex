import { combineReducers } from "redux";
import {loadPokemonList} from "./cardlist/actions";
import {loadPokemonCard} from "./card/actions";

combineReducers({
    cardList: loadPokemonList,
    card: loadPokemonCard
});
