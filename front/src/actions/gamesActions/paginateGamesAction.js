import {PAGINATE_GAMES, PAGINATE_GAMES_INIT} from "../../types/index.js";

export function paginateGamesAction(payload) {
    return (dispatch) => {
        dispatch(paginateGamesInit());
        dispatch(paginateGames(payload));
    }
}

const paginateGamesInit = () => ({
    type: PAGINATE_GAMES_INIT,
})
const paginateGames = (payload) => ({
    type: PAGINATE_GAMES,
    payload
})