import {GET_GENRES, GET_GENRES_ERROR, GET_GENRES_SUCCESS} from "../types/index.js";

const initialState = {
    genres: [],
    error: null,
    loading: false
}
export default function (state = [], action) {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                loading: action.payload
            }
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                error: false,
                genres: action.payload,
                loading: false
            }
        case GET_GENRES_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}