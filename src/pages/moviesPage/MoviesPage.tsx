import React, { useEffect } from 'react';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import {useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const dispatch = useAppDispatch();
    useEffect(() => {
        const page = query.get('page')
        if(page)
        dispatch(movieActions.getAll(page))
    }, [query]);

    return (
        <div>
            <MoviesListComponent/>
            <PaginationComponent setQuery={setQuery} />

        </div>
    );
};

export default MoviesPage;