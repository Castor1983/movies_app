import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/store/store';
import MovieCardComponent from '../movieCardComponent/MovieCardComponent';
import css from './MoviesList.module.css'


const MoviesListComponent = () => {
    const {movies: {results}} =useAppSelector(state => state.moviesListSlice)

    return (
        <div className={css.MoviesList}>
            {
                results.map(movie => <MovieCardComponent key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default MoviesListComponent;