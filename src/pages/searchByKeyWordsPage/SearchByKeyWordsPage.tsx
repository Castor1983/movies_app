import React from 'react';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import SearchByKeyWordsFormComponent from '../../components/searchByKeyWordsFormComponent/SearchByKeyWordsFormComponent';
import PaginationComponent from '../../components/paginationComponent/PaginationComponent';
import { useSearchParams } from 'react-router-dom';

const SearchByKeyWordsPage = () => {
    const [query, setQuery]  = useSearchParams(page: '1')

    return (
        <div>
            <SearchByKeyWordsFormComponent/>
            <MoviesListComponent/>
            <PaginationComponent setQuery={setQuery}/>
        </div>
    );
};

export default SearchByKeyWordsPage;