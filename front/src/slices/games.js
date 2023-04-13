/*

const initialState = []

export const retrieveGames = createAsyncThunk(
    "games/retrieve",
    async () => {
        const res = await GameService.getAll()
        res.data.status = res.status
        return res.data
    }
)
export const findGamesByName = createAsyncThunk(
    "tutorials/findByName",
    async ({name}) => {
        const res = await GameService.findByName(name);
        res.data.status = res.status
        return res.data
    }
);

export const filterGamesByGenre = createAsyncThunk(
    "games/filterByGenre",
    async ({genre}) => {
        const res = await GameService.getAll()
        res.data.status = res.status
        return res.data.filter(game => game.genres.includes(genre))
    }
)

export const filterByApiOrigin = createAsyncThunk(
    "games/filterByApiOrigin",
    async ({origin}) => {
        const res = await GameService.getAll()
        res.data.status = res.status
        if (origin === "DB") {
            return res.data.filter(game => game.apiId === null)
        } else {
            return res.data.filter(game => game.apiId !== null)
        }
    }
)
export const createGame = createAsyncThunk(
    "games/create",
    async (data) => {
        const res = await gameService.create(data);
        res.data.status = res.status
        return res.data;
    }
);

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        orderAlfDesc: (state) => {
            const datasortalf = state?.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }).reverse();
            console.log(datasortalf)
            datasortalf.then(d => console.log(d))
            return datasortalf
        },
        orderAlfAsc: (state) => {
            return state.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })
        },
        orderByRatingDesc: (state) => {
            return state.sort(function (a, b) {
                return a.rating - b.rating
            })
        },
        orderByRatingAsc: (state) => {
            return state.sort(function (a, b) {
                return a.rating - b.rating
            }).reverse()
        },
    },
    extraReducers: {
        [retrieveGames.fulfilled]: (state, action) => {
            return [...action.payload]
        },
        [findGamesByName.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [filterGamesByGenre.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [filterByApiOrigin.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [createGame.fulfilled]: (state, action) => {
            return [...state]
        }
    }
})

const {reducer} = gameSlice
export const {
    orderAlfDesc,
    orderAlfAsc,
    orderByRatingDesc,
    orderByRatingAsc,
} = gameSlice.actions
export default reducer*/
