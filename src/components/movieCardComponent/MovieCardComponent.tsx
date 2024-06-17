import React, { FC } from 'react';
import { IMoviesListModel } from '../../models/IMoviesListModel';
import PosterPreviewComponent from '../posterPreviewComponent/PosterPreviewComponent';
import { useNavigate } from 'react-router-dom';
import css from './MovieCard.module.css'
type IProps ={
    movie: IMoviesListModel
}
const MovieCardComponent :FC <IProps>= ({movie}) => {
    const navigate = useNavigate()
    const{title, poster_path, id} = movie
    return (
        <div className={css.MovieCard} onClick={()=>navigate(`/movieinfo/${id}`)}>
            <PosterPreviewComponent posterPath={poster_path}/>
            <h2>{title}</h2>
            
        </div>
    );
};

export default MovieCardComponent