import React from 'react';
import MoviesListComponent from '../../components/moviesListComponent/MoviesListComponent';
import SearchByKeyWordsFormComponent from '../../components/searchByKeyWordsFormComponent/SearchByKeyWordsFormComponent';

const SearchByKeyWordsPage = () => {
    return (
        <div>
            <SearchByKeyWordsFormComponent/>
           <MoviesListComponent/>
        </div>
    );
};

export default SearchByKeyWordsPage;