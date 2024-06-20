import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';

const MoviesFilterByGenrePage = () => {
    const dispatch = useAppDispatch()
    const{id} = useParams()
    const [query, setQuery] = useSearchParams({page: '1'})
    useEffect(() => {
        const page = query.get('page')
        if(id && page)
        dispatch(movieActions.getFilterByGenre({id, page}))
    }, [id, query]);

    return (
        <div>
            <MoviesListComponent/>
            <PaginationComponent setQuery={setQuery}/>
        </div>
    );
};

export default MoviesFilterByGenrePage;