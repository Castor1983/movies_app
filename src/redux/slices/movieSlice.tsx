import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IMovieCardModel } from "../../models/IMovieCardModel"
import { IResponseMoviesListModel } from "../../models/IResponseMoviesListModel"
import { requestServices } from "../../services/api.service"
import { AxiosError } from "axios"

type movieSliceType = {
    movies: IResponseMoviesListModel,
    movie: IMovieCardModel,
    theme: boolean,
    error: ''
}
const movieInitialState: movieSliceType = {
    movies:{
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    movie: {
        adult: false,
        backdrop_path: '',
        belongs_to_collection: {
            id: 0,
            name: '',
            poster_path: '',
            backdrop_path: ''
        },
        budget: 0,
        genres: [],
        homepage: '',
        id: 0,
        imdb_id: '',
        origin_country: [],
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        production_companies: [],
        production_countries: [],
        release_date: '',
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: '',
        tagline: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    theme: false,
    error: ''
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page: string, thunkAPI) => {
        try {
            const movies = await requestServices.moviesService.getAll(page);
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const getById = createAsyncThunk(
    'movieSlice/getById',
    async (id: string, thunkAPI) => {
        try {
            const movie = await requestServices.moviesService.getById(id);
            return thunkAPI.fulfillWithValue(movie);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const getFilterByGenre = createAsyncThunk(
    'movieSlice/getFilterByGenre',
    async ({id, page}:{id:string,page:string}, thunkAPI):Promise<IResponseMoviesListModel> => {
        try {
            const movies = await requestServices.moviesService.getFilterByGenre({id, page});
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            const error = e as AxiosError;
            // @ts-ignore
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const searchByKeyWords = createAsyncThunk(
    'movieSlice/searchByKeyWords',
    async ({with_keywords, page}:{with_keywords:string,page:string}, thunkAPI):Promise<IResponseMoviesListModel> => {
        try {
            const movies = await requestServices.moviesService.searchByKeyWords({with_keywords, page});
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            const error = e as AxiosError;
            // @ts-ignore
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
 export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieInitialState,
    reducers: {
        toggleValue: (state) => {
            state.theme = !state.theme
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload;

        })
        .addCase(getById.fulfilled, (state, action) => {
            state.movie = action.payload;

        })
        .addCase(getFilterByGenre.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        .addCase(searchByKeyWords.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
})

export const movieActions = {
    ...movieSlice.actions,
         getAll,
         getById,
         getFilterByGenre,
         searchByKeyWords
}