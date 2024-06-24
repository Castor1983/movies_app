import React from 'react';
import { useAppSelector } from '../../redux/store/store';
import { NavLink, useNavigate } from 'react-router-dom';
import { posterURL } from '../../constants/urls';
import css from './MovieInfo.module.css'
import GenreBadgeComponent from '../genreBadgeComponent/GenreBadgeComponent';
import { IGenreModel } from '../../models/IGenreModel';

const MovieInfoComponent = () => {
    const navigate = useNavigate()
    const{movie, movies, theme} = useAppSelector(state => state.moviesListSlice)
    const {backdrop_path, title, overview, genres,  release_date, runtime, budget,} = movie;
    return (
        <div className={css.MovieDetails}>
            <div className={css.title}>
                <img src={`${posterURL}${backdrop_path}`} alt={'poster'} className={css.img}/>
                <h1>{title}</h1>
            </div>
            <div className={theme? css.textInfoLight : css.textInfoDark}>
                <div>{overview}</div>
                <div> Genres: {genres?.map((genre:IGenreModel) => <GenreBadgeComponent key={genre.id} genre={genre}/>)}</div>
                <div>Relise date: {release_date}</div>
                <div>Runtime:{runtime} min.</div>
                <div>Budget: {budget}$</div>
                <button onClick={()=>{
                    navigate(-1)
                }} className={css.button} > Back</button>
            </div>
        </div>
    );
};

export default MovieInfoComponent;