import axios from "axios";
import { baseUrl, token, urls } from "../constants/urls";
import { IResponseMoviesListModel } from "../models/IResponseMoviesListModel";
import { IMovieCardModel } from "../models/IMovieCardModel";
import { IResponseGenresListModel } from "../models/IResponseGenreListModel";



 export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    },

})

export const requestServices = {
    moviesService:{
        getAll: async (page: string):Promise<IResponseMoviesListModel>=> {
            const response = await axiosInstance.get<IResponseMoviesListModel>(urls.movies.getAll, {params: {page: `${page}`}})
            return response.data
        },
        getById: async (id: string):Promise<IMovieCardModel>=> {
            const response = await  axiosInstance.get<IMovieCardModel>(urls.movies.getById(id))
            return response.data

        },
        getFilterByGenre: async ({id, page}:{id: number, page: number}):Promise<IResponseMoviesListModel>=> {
            const response = await axiosInstance.get<IResponseMoviesListModel>(urls.movies.getByGenre, {params: {with_genres: `${id}`, page: `${page}`}})
            return response.data
        }
    },
    genresService:{
        getAll: async ():Promise<IResponseGenresListModel>=> {
            const response = await axiosInstance.get<IResponseGenresListModel>(urls.genres.getAll, {params: {language: 'en'}})
            return response.data
},

    }
}