import axios from "axios";
import { baseUrl } from "../constants/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWNjYjQyNTZhNDdkYmQ4NjM2Y2FiNTkwNzZlYjljYSIsInN1YiI6IjY0YmVhZWQ3ZTlkYTY5MDBlY2ViMWQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eUovTjLiNTyX_Na-LMqLl0gWsksfTARfi5Dzb7LFaLM'
    }
})

export const requestServices = {
    moviesService:{

    },
    genresService:{

    }
}