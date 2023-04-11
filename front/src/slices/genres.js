import GenreService from "../services/GenreService.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = []

export const retrieveGenres = createAsyncThunk(
    "genres/retrieve",
    async () => {
        const res = await GenreService.getAll();
        return res.data
    }
)

const genreSlice = createSlice({
    name: "genre",
    initialState,
    extraReducers: {
        [retrieveGenres.fulfilled]: (state, action) => {
            return [...action.payload]
        }
    }
})

const {reducer} = genreSlice;
export default reducer;