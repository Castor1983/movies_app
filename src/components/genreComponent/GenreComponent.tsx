import React, { FC } from 'react';
import { IGenreModel } from '../../models/IGenreModel';
import css from './Genre.module.css'
import { useNavigate } from 'react-router-dom';
type IProps ={
    genre: IGenreModel;
}
const GenreComponent : FC <IProps>= ({genre}) => {
    const navigate = useNavigate()
    return (
        <div>
            <button className={css.button} onClick={()=> {
                navigate(`${genre.id}`)
            }}>{genre.name}</button>
        </div>
    );
};

export default GenreComponent;