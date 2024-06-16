import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/store/store';
import MovieCardComponent from '../movieCardComponent/MovieCardComponent';
import PaginationComponent from '../paginationComponent/PaginationComponent';


const MoviesListComponent = () => {
    const {movies} =useAppSelector(state => state.moviesListSlice)
const {results, page, total_pages} = movies
    return (
        <div>
            {
                results.map(movie => <MovieCardComponent key={movie.id} movie={movie}/>)
            }
            <PaginationComponent page={page} totalPages={total_pages}/>
        </div>
    );
};

export default MoviesListComponent;