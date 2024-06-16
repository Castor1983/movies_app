import React, { useEffect } from 'react';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieActions.getAll())
    }, []);

    return (
        <div>
            <MoviesListComponent/>
        </div>
    );
};

export default MoviesPage;