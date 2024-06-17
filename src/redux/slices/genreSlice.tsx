import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGenreModel } from "../../models/IGenreModel"
import { AxiosError } from "axios";
import { requestServices } from "../../services/api.service";

type genreTypeSlice = {
genres: {
    genres: IGenreModel[] }
};
const genreInitialState: genreTypeSlice ={
    genres: {
        genres:[]
    }
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async  (_, thunkAPI) => {
        try {
            const genres = await requestServices.genresService.getAll()
            return thunkAPI.fulfillWithValue(genres)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: genreInitialState,
    reducers: {},
    extraReducers: builder => builder
    .addCase(getAll.fulfilled, (state, action) =>{
        state.genres = action.payload;
    })
});

export const genreActions = {
    ...genreSlice.actions,
    getAll
}