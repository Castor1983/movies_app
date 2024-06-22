import React, { FC } from 'react';
import { IGenreModel } from '../../models/IGenreModel';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import css from './GenreBadge.module.css'
import { useAppSelector } from '../../redux/store/store';

type IProps = {
    genre: IGenreModel
}
const GenreBadgeComponent: FC <IProps> = ({genre}) => {
const {movies:{total_results}} = useAppSelector(state => state.moviesListSlice)
    const navigate= useNavigate()
    return (
        <div>
            <Badge badgeContent={total_results} color="success">
                <button className={css.button} onClick={()=> navigate(`/genres/${genre.name}`)}>{genre.name}</button>
            </Badge>

        </div>
    );
};

export default GenreBadgeComponent;

function usAppSelector(arg0: any) {
    throw new Error('Function not implemented.');
}
