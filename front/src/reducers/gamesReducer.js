import {
    CREATE_GAME, CREATE_GAME_ERROR, CREATE_GAME_SUCCESS,
    FILTER_GAMES_BY_GENRE,
    FILTER_GAMES_BY_GENRE_INIT,
    FILTER_GAMES_BY_ORIGIN,
    FILTER_GAMES_BY_ORIGIN_INIT,
    GET_GAME_BY_ID, GET_GAME_BY_ID_ERROR, GET_GAME_BY_ID_SUCCESS,
    GET_GAMES,
    GET_GAMES_ERROR,
    GET_GAMES_SUCCESS,
    ORDER_GAMES_BY_NAME,
    ORDER_GAMES_BY_NAME_INIT,
    ORDER_GAMES_BY_RATING,
    PAGINATE_GAMES,
    PAGINATE_GAMES_INIT,
    SEARCH_GAME_BY_NAME,
    SEARCH_GAME_BY_NAME_ERROR,
    SEARCH_GAME_BY_NAME_SUCCESS
} from "../types/index.js";

const initialState = {
    games: [],
    auxGame: [],
    game: {},
    error: false,
    loading: false,
    length: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GAMES:
        case GET_GAME_BY_ID:
        case SEARCH_GAME_BY_NAME:
        case CREATE_GAME:
            return {
                ...state,
                loading: action.payload
            }
        case GET_GAMES_SUCCESS:
        case SEARCH_GAME_BY_NAME_SUCCESS:
            return {
                ...state,
                error: false,
                games: action.payload,
                auxGame: action.payload,
                loading: false
            }
        case GET_GAMES_ERROR:
        case SEARCH_GAME_BY_NAME_ERROR:
        case GET_GAME_BY_ID_ERROR:
        case CREATE_GAME_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case GET_GAME_BY_ID_SUCCESS:
            return {
                ...state,
                error: false,
                game: action.payload,
                loading: false
            }
        case CREATE_GAME_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false
            }
        case PAGINATE_GAMES_INIT:
            return {
                ...state,
                games: state.length === null ? state.auxGame : state.games,
            }
        case PAGINATE_GAMES:
            return {
                ...state,
                games: state.games.slice((action.payload * 15), (action.payload * 15) + 15),
            }
        case FILTER_GAMES_BY_GENRE_INIT:
            return {
                ...state,
                games: state.auxGame,
                length: state.auxGame.filter(game => game.genres.includes(action.payload)).length
            }
        case FILTER_GAMES_BY_GENRE:
            return {
                ...state,
                games: state.games.filter(game => game.genres.includes(action.payload)),
            }
        case FILTER_GAMES_BY_ORIGIN_INIT:
            return {
                ...state,
                games: state.auxGame,
                length: action.payload === "DB"
                    ? action.games.filter(game => game.apiId === null).length
                    : action.games.filter(game => game.apiId !== null).length
            }
        case FILTER_GAMES_BY_ORIGIN:
            return {
                ...state,
                games: action.payload === "DB"
                    ? action.games.filter(game => game.apiId === null)
                    : action.games.filter(game => game.apiId !== null)
            }
        case ORDER_GAMES_BY_NAME:
            return {
                ...state,
                games: action.payload === "ASC"
                    ? state.games.sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    }) : state?.sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    }).reverse()
            }
        case ORDER_GAMES_BY_RATING:
            return {
                ...state,
                games: action.payload === "ASC"
                    ? state.sort(function (a, b) {
                        return a.rating - b.rating
                    })
                    : state.sort(function (a, b) {
                        return a.rating - b.rating
                    }).reverse()
            }
        default:
            return state;
    }
}