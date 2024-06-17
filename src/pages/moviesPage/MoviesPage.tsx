import React, { useEffect } from 'react';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import { useParams } from 'react-router-dom';

const MoviesPage = () => {
    const{page} = useParams()
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (page)
        dispatch(movieActions.getAll(page))
    }, [page]);

    return (
        <div>
            <MoviesListComponent/>

        </div>
    );
};

export default MoviesPage;