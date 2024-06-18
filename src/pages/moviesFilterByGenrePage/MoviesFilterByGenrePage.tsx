import React, { useEffect } from 'react';
import MoviesFilterByGenreComponent from '../../components/moviesFilterByGenreComponent/MoviesFilterByGenreComponent';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import { useParams } from 'react-router-dom';

const MoviesFilterByGenrePage = () => {
    const dispatch = useAppDispatch()
    const{id, page} = useParams()
    useEffect(() => {
        if(id && page)
        dispatch(movieActions.getFilterByGenre({id, page}))
    }, [id, page]);

    return (
        <div>
            <MoviesFilterByGenreComponent/>
        </div>
    );
};

export default MoviesFilterByGenrePage;