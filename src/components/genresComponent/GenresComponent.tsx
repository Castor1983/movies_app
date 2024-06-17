import React from 'react';
import GenreComponent from '../genreComponent/GenreComponent';
import { useAppSelector } from '../../redux/store/store';

const GenresComponent = () => {
    const{genres:{genres}} =useAppSelector(state => state.genresListSlice)

    return (
        <div>
            {
                genres.map(genre => <GenreComponent key={genre.id} genre={genre}/>)

            }

        </div>
    );
};

export default GenresComponent;