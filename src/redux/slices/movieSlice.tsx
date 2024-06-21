import {PayloadAction, createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit"
import { IMovieCardModel } from "../../models/IMovieCardModel"
import { IResponseMoviesListModel } from "../../models/IResponseMoviesListModel"
import { requestServices } from "../../services/api.service"
import { AxiosError } from "axios"

type movieSliceType = {
    movies: IResponseMoviesListModel,
    movie: IMovieCardModel,
    theme: boolean,
    keywords: string,
    error: string
}
const movieInitialState: movieSliceType = {
    movies:{
        page: 1,
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
    keywords:'',
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
    async ({genreId, page}:{genreId:number,page:string}, thunkAPI):Promise<IResponseMoviesListModel> => {
        try {
            const movies = await requestServices.moviesService.getFilterByGenre({genreId, page});
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
    async ({keywords, page}:{keywords:string,page:string}, thunkAPI):Promise<IResponseMoviesListModel> => {
        try {
            const movies = await requestServices.moviesService.searchByKeyWords({keywords, page});
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
        toggleValue: (state ) => {
            state.theme = !state.theme
        },
        keyWords: (state, action: PayloadAction<string> ) => {
            state.keywords = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action: PayloadAction<IResponseMoviesListModel>) => {
            state.movies = action.payload;

        })
        .addCase(getById.fulfilled, (state, action: PayloadAction<IMovieCardModel>) => {
            state.movie = action.payload;

        })
        .addCase(getFilterByGenre.fulfilled, (state, action: PayloadAction<IResponseMoviesListModel>) => {
            state.movies = action.payload;
        })
        .addCase(searchByKeyWords.fulfilled, (state, action: PayloadAction<IResponseMoviesListModel>) => {
            state.movies = action.payload;
        })
})

export const movieActions =
    {
    ...movieSlice.actions,
         getAll,
         getById,
         getFilterByGenre,
         searchByKeyWords
}