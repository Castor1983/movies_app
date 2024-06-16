import axios from "axios";
import { baseUrl, token, urls } from "../constants/urls";
import { IResponseMoviesListModel } from "../models/IResponseMoviesListModel";


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
        }
    },
    genresService:{

    }
}