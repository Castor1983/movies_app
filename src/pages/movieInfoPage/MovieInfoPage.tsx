import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import MovieInfoComponent from '../../components/movieInfoComponent/MovieInfoComponent';

const MovieInfoPage = () => {
    const{id} = useParams()
    const dispatch =useAppDispatch()
    useEffect(()=> {
        if(id) {
            dispatch(movieActions.getById(id))
        }
    }, [id])
    return (
        <div>
            <MovieInfoComponent key={id}/>

        </div>
    );
};

export default MovieInfoPage;