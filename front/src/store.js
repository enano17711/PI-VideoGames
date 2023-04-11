import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./slices/games.js"
import genresReducer from "./slices/genres.js"

const reducer = {
    games: gameReducer,
    genres: genresReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true
})

export default store