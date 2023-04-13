import http from "../../http-common.js";
import {GET_GAME_BY_ID, GET_GAME_BY_ID_ERROR, GET_GAME_BY_ID_SUCCESS} from "../../types/index.js";

export function getGameByIdAction(payload) {
    return async (dispatch) => {
        dispatch(getGameById())
        try {
            const response = await http.get(`/videogames/${payload}`)
            if (response.data.genres[0].id !== undefined) {
                const newResponse = response.data
                newResponse.genres = response.data.genres.map(genre => genre.name)
                dispatch(getGameByIdSuccess(newResponse))
            } else {
                dispatch(getGameByIdSuccess(response.data))
            }
        } catch (e) {
            dispatch(getGameByIdError(e.message))
        }
    }
}

const getGameById = () => ({
    type: GET_GAME_BY_ID,
    payload: true
})
const getGameByIdSuccess = (payload) => ({
    type: GET_GAME_BY_ID_SUCCESS,
    payload
})
const getGameByIdError = (payload) => ({
    type: GET_GAME_BY_ID_ERROR,
    payload
})