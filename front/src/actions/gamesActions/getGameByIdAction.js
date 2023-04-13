import http from "../../http-common.js";
import {GET_GAME_BY_ID, GET_GAME_BY_ID_ERROR, GET_GAME_BY_ID_SUCCESS} from "../../types/index.js";

export function getGameByIdAction(payload) {
    return async (dispatch) => {
        dispatch(getGameById())
        try {
            console.log(`this is payload: ${payload}`)
            const response = await http.get(`/videogames/${payload}`)
            console.log(`this is response: ${JSON.stringify(response.data)}`)
            dispatch(searchGameByNameSuccess(response.data))
        } catch (e) {
            dispatch(searchGameByNameError(e.message))
        }
    }
}

const getGameById = () => ({
    type: GET_GAME_BY_ID,
    payload: true
})
const searchGameByNameSuccess = (payload) => ({
    type: GET_GAME_BY_ID_SUCCESS,
    payload
})
const searchGameByNameError = (payload) => ({
    type: GET_GAME_BY_ID_ERROR,
    payload
})