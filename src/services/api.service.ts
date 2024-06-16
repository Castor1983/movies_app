import axios from "axios";
import { baseUrl, token, urls } from "../constants/urls";
import { IResponseMoviesListModel } from "../models/IResponseMoviesListModel";
import { IMovieCardModel } from "../models/IMovieCardModel";


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    },
    params: {
        page: '3'
    }
})

export const requestServices = {
    moviesService:{
        getAll: async ():Promise<IResponseMoviesListModel>=> {
            const response = await axiosInstance.get<IResponseMoviesListModel>(urls.movies.byPageNumber)
            return response.data
        },
        getById: async (id: string):Promise<IMovieCardModel>=> {
            const response = await  axiosInstance.get<IMovieCardModel>(urls.movies.byId(id))
            return response.data

        }
    },
    genresService:{

    }
}