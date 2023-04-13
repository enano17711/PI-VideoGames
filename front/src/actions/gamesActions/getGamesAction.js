import http from "../../http-common.js";
import {GET_GAMES, GET_GAMES_ERROR, GET_GAMES_SUCCESS} from "../../types/index.js";

export function getGamesAction() {
    return async (dispatch) => {
        dispatch(getGames())
        try {
            const response = await http.get('/videogames')
            dispatch(getGamesSuccess(response.data))
        } catch (error) {
            dispatch(getGamesError(error.message))
        }
    }
}

const getGames = () => ({
    type: GET_GAMES,
    payload: true
})
const getGamesSuccess = (games) => ({
    type: GET_GAMES_SUCCESS,
    payload: games
})
const getGamesError = (error) => ({
    type: GET_GAMES_ERROR,
    payload: error
})