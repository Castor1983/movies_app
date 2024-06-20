import React, { useEffect } from 'react';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import SearchByKeyWordsFormComponent from '../../components/searchByKeyWordsFormComponent/SearchByKeyWordsFormComponent';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';

const SearchByKeyWordsPage = () => {
    const [query, setQuery]  = useSearchParams({page: '1'})
    const {keywords} = useAppSelector(state => state.moviesListSlice)
    const dispatch = useAppDispatch();
    useEffect(() => {
        const page = query.get('page')
        if(page)
            dispatch(movieActions.searchByKeyWords({keywords, page}))
    }, [query, keywords]);


    return (
        <div>
            <SearchByKeyWordsFormComponent/>
            <MoviesListComponent/>
            <PaginationComponent setQuery={setQuery}/>
        </div>
    );
};

export default SearchByKeyWordsPage;