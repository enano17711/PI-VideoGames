import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";
import genresReducer from "./genresReducer.js";

export default combineReducers({
    games: gamesReducer,
    genres: genresReducer
})