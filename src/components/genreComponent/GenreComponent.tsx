import React, { FC } from 'react';
import { IGenreModel } from '../../models/IGenreModel';
import css from './Genre.module.css'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store/store';
import { genreActions } from '../../redux/slices/genreSlice';
type IProps ={
    genre: IGenreModel;
}
const GenreComponent : FC <IProps>= ({genre}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    return (
        <div>
            <button className={css.button} onClick={()=> {
                dispatch(genreActions.genreById(genre.id))
                navigate(`${genre.name}`)
            }}>{genre.name}</button>
        </div>
    );
};

export default GenreComponent;