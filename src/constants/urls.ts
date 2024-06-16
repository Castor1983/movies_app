
const baseUrl =  process.env.REACT_APP_API
const movies = '/discover/movie';

const urls = {
    movies:{
        byPageNumber: movies,
    },
    genres: {

    }
}
export {
    baseUrl,
    urls
}