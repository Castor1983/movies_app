import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/store/store';
import MovieCardComponent from '../movieCardComponent/MovieCardComponent';
import PaginationComponent from '../paginationComponent/PaginationComponent';
import css from './MoviesList.module.css'


const MoviesListComponent = () => {
    const {movies} =useAppSelector(state => state.moviesListSlice)
const {results, page, total_pages} = movies
    return (
        <div className={css.MoviesList}>
            {
                results.map(movie => <MovieCardComponent key={movie.id} movie={movie}/>)
            }
            <PaginationComponent page={page} totalPages={total_pages}/>
        </div>
    );
};

export default MoviesListComponent;