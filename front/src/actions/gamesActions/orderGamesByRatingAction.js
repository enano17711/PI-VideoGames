import {ORDER_GAMES_BY_RATING} from "../../types/index.js";

export function orderGamesByRatingAction(payload) {
    return (dispatch) => {
        dispatch(orderGamesByRating(payload))
    }
}

const orderGamesByRating = (payload) => ({
    type: ORDER_GAMES_BY_RATING,
    payload
})