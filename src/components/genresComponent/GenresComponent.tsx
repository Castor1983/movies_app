import React from 'react';
import GenreComponent from '../genreComponent/GenreComponent';
import { useAppSelector } from '../../redux/store/store';
import css from './Genres.module.css'

const GenresComponent = () => {
    const{genres:{genres}} =useAppSelector(state => state.genresListSlice)

    return (
        <div className={css.Genres}>
            {
                genres.map(genre => <GenreComponent key={genre.id} genre={genre}/>)

            }

        </div>
    );
};

export default GenresComponent;