import {ORDER_GAMES_BY_NAME} from "../../types/index.js";

export function orderGamesByNameAction(payload) {
    return (dispatch) => {
        dispatch(orderGamesByName(payload))
    }
}

const orderGamesByName = (payload) => ({
    type: ORDER_GAMES_BY_NAME,
    payload
})