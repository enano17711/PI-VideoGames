import http from "../../http-common.js";
import {GET_GENRES, GET_GENRES_ERROR, GET_GENRES_SUCCESS} from "../../types/index.js";

export function getGenresAction() {
    return async (dispatch) => {
        dispatch(getGenres())
        try {
            const response = await http.get('/genres')
            dispatch(getGenresSuccess(response.data))
        } catch (error) {
            dispatch(getGenresError(error.message))
        }
    }
}

const getGenres = () => ({
    type: GET_GENRES,
    payload: true
})
const getGenresSuccess = (genres) => ({
    type: GET_GENRES_SUCCESS,
    payload: genres
})
const getGenresError = (error) => ({
    type: GET_GENRES_ERROR,
    payload: error
})