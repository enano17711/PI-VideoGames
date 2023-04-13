import http from "../../http-common.js";
import {SEARCH_GAME_BY_NAME, SEARCH_GAME_BY_NAME_ERROR, SEARCH_GAME_BY_NAME_SUCCESS} from "../../types/index.js";

export function searchGameByNameAction(payload) {
    return async (dispatch) => {
        dispatch(searchGameByName())
        try {
            const response = await http.get(`/videogames?name=${payload}`)
            dispatch(searchGameByNameSuccess(response.data))
        } catch (e) {
            dispatch(searchGameByNameError(e.message))
        }
    }
}

const searchGameByName = () => ({
    type: SEARCH_GAME_BY_NAME,
    payload: true
})
const searchGameByNameSuccess = (payload) => ({
    type: SEARCH_GAME_BY_NAME_SUCCESS,
    payload
})
const searchGameByNameError = (payload) => ({
    type: SEARCH_GAME_BY_NAME_ERROR,
    payload
})