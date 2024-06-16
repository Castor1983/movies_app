import { IGenreModel } from "./IGenreModel";


type belongsToCollectionType = {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string
}

type productionCompanyType = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}
type productionCountryType = {
    iso_3166_1: string,
    name: string
}

type spokenLanguageType = {
    english_name: string,
    iso_639_1: string,
    name: string
}
export interface IMovieCardModel {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: belongsToCollectionType,
    budget: number,
    genres: IGenreModel[],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: string [],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: productionCompanyType [],
    production_countries: productionCountryType [],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: spokenLanguageType [],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}