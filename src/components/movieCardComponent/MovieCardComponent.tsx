import React, { FC } from 'react';
import { IMoviesListModel } from '../../models/IMoviesListModel';
import PosterPreviewComponent from '../posterPreviewComponent/PosterPreviewComponent';
import { useNavigate } from 'react-router-dom';
import css from './MovieCard.module.css'
import StarRatingComponent from '../starsRatingComponent/StarsRatingComponent';
import { useAppSelector } from '../../redux/store/store';

type IProps ={
    movie: IMoviesListModel
}

const MovieCardComponent :FC <IProps>= ({movie}) => {
    const navigate = useNavigate()
    const{title, poster_path, id, vote_average} = movie
    const {theme} = useAppSelector(state => state.moviesListSlice)
    return (
        <div className={css.MovieCard} onClick={()=>navigate(`/movieinfo/${id}`)}>
            <PosterPreviewComponent posterPath={poster_path}/>
            <StarRatingComponent rating={vote_average}/>
            <h3 className={theme? css.titleLight : css.titleDark}>{title}</h3>

        </div>
    );
};

export default MovieCardComponent