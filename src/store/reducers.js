import { combineReducers } from "redux";
import {listReducer} from "./cardlist/reducers";
import {cardReducer} from "./card/reducers";


export default combineReducers({
    cardList: listReducer,
    card: cardReducer
});
