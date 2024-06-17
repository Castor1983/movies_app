import React, { FC } from 'react';
import { IGenreModel } from '../../models/IGenreModel';
import css from './Genre.module.css'
type IProps ={
    genre: IGenreModel;
}
const GenreComponent : FC <IProps>= ({genre}) => {
    return (
        <div>
            <button className={css.button}>{genre.name}</button>
        </div>
    );
};

export default GenreComponent;