import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/store/store';
import MovieCardComponent from '../movieCardComponent/MovieCardComponent';


const MoviesListComponent = () => {
    const {movies} =useAppSelector(state => state.moviesListSlice)

    return (
        <div>
            {
                movies.results.map(movie => <MovieCardComponent key={movie.id} movie={movie}/>)
            }

        </div>
    );
};

export default MoviesListComponent;