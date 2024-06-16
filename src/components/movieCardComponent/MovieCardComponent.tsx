import React, { FC } from 'react';
import { IMoviesListModel } from '../../models/IMoviesListModel';
type IProps ={
    movie: IMoviesListModel
}
const MovieCardComponent :FC <IProps>= ({movie}) => {
    return (
        <div>
            {movie.id}
            {movie.title}
            
        </div>
    );
};

export default MovieCardComponent