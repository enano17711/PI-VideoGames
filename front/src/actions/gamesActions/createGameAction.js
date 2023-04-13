import http from "../../http-common.js";
import {CREATE_GAME, CREATE_GAME_ERROR, CREATE_GAME_SUCCESS} from "../../types/index.js";

export function createGameAction(payload) {
    return async (dispatch) => {
        dispatch(createGame())
        try {
            await http.post("/videogames", payload)
            dispatch(createGameSuccess())
        } catch (e) {
            dispatch(createGameError(e.message))
        }
    }
}

const createGame = () => ({
    type: CREATE_GAME,
    payload: true
})
const createGameSuccess = () => ({
    type: CREATE_GAME_SUCCESS
})
const createGameError = (payload) => ({
    type: CREATE_GAME_ERROR,
    payload
})