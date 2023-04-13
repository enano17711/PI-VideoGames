import {FILTER_GAMES_BY_ORIGIN, FILTER_GAMES_BY_ORIGIN_INIT} from "../../types/index.js";

export function filterGamesByOriginAction(payload) {
    return (dispatch) => {
        dispatch(filterGamesByOriginInit());
        dispatch(filterGamesByOrigin(payload));
    }
}

const filterGamesByOriginInit = (payload) => ({
    type: FILTER_GAMES_BY_ORIGIN_INIT,
    payload
})
const filterGamesByOrigin = (payload) => ({
    type: FILTER_GAMES_BY_ORIGIN,
    payload
})