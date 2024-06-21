import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';

const MoviesFilterByGenrePage = () => {
    const {genreId} = useAppSelector(state=> state.genresListSlice)
    const dispatch = useAppDispatch()
    const [query, setQuery] = useSearchParams({page: '1'})
    useEffect(() => {
        const page = query.get('page')
        if(genreId && page)
        dispatch(movieActions.getFilterByGenre({genreId, page}))
    }, [genreId, query]);

    return (
        <div>
            <MoviesListComponent/>
            <PaginationComponent setQuery={setQuery}/>
        </div>
    );
};

export default MoviesFilterByGenrePage;