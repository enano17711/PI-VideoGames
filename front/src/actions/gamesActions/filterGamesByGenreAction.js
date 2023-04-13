import {FILTER_GAMES_BY_GENRE, FILTER_GAMES_BY_GENRE_INIT} from "../../types/index.js";

export function filterGamesByGenreAction(payload) {
    return (dispatch) => {
        dispatch(filterGamesByGenreInit());
        dispatch(filterGamesByGenre(payload));
    }
}

const filterGamesByGenreInit = (payload) => ({
    type: FILTER_GAMES_BY_GENRE_INIT,
    payload
})
const filterGamesByGenre = (payload) => ({
    type: FILTER_GAMES_BY_GENRE,
    payload
})