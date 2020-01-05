import { combineReducers } from "redux";
import {listReducer} from "./cardlist/reducers";
import {cardReducer} from "./card/reducers";
import {detailReducer} from "./detailedcard/reducers";



export default combineReducers({
    cardList: listReducer,
    card: cardReducer,
    detail: detailReducer
});
