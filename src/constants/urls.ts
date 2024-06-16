
const baseUrl =  'https://api.themoviedb.org/3'
const movies = '/discover/movie';
const movie = '/movie'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWNjYjQyNTZhNDdkYmQ4NjM2Y2FiNTkwNzZlYjljYSIsInN1YiI6IjY0YmVhZWQ3ZTlkYTY5MDBlY2ViMWQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eUovTjLiNTyX_Na-LMqLl0gWsksfTARfi5Dzb7LFaLM';
const posterURL = 'https://image.tmdb.org/t/p/w500/';

const urls = {
    movies:{
        byPageNumber: movies,
        byId: (id: string) => `${movie}/${id}`
    },
    genres: {

    }
}
export {
    baseUrl,
    urls,
    token,
    posterURL
}