import axios from "axios";
import { baseUrl, urls } from "../constants/urls";
import { IResponseMoviesListModel } from "../models/IResponseMoviesListModel";

const token = process.env.REACT_APP_API_TOKEN;
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    },
    params: {
        page: '1'
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