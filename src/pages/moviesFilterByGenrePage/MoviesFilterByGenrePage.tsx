import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import { useParams } from 'react-router-dom';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';

const MoviesFilterByGenrePage = () => {
    const dispatch = useAppDispatch()
    const{id, page} = useParams()
    useEffect(() => {
        if(id && page)
        dispatch(movieActions.getFilterByGenre({id, page}))
    }, [id, page]);

    return (
        <div>
            <MoviesListComponent/>
        </div>
    );
};

export default MoviesFilterByGenrePage;