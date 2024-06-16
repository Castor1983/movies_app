
const baseUrl =  'https://api.themoviedb.org/3'
const movies = '/discover/movie';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWNjYjQyNTZhNDdkYmQ4NjM2Y2FiNTkwNzZlYjljYSIsInN1YiI6IjY0YmVhZWQ3ZTlkYTY5MDBlY2ViMWQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eUovTjLiNTyX_Na-LMqLl0gWsksfTARfi5Dzb7LFaLM';

const urls = {
    movies:{
        byPageNumber: movies,
    },
    genres: {

    }
}
export {
    baseUrl,
    urls,
    token
}