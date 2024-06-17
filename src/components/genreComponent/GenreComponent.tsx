import React, { FC } from 'react';
import { IGenreModel } from '../../models/IGenreModel';
type IProps ={
    genre: IGenreModel;
}
const GenreComponent : FC <IProps>= ({genre}) => {
    return (
        <div>
            <button>{genre.name}</button>
        </div>
    );
};

export default GenreComponent;