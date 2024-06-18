import React, { useEffect } from 'react';
import GenresComponent from '../../components/genresComponent/GenresComponent';
import { useAppDispatch } from '../../redux/store/store';
import { genreActions } from '../../redux/slices/genreSlice';
import { Outlet } from 'react-router-dom';

const GenresPage = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);
    return (
        <div>
            <GenresComponent/>
            <Outlet/>
        </div>
    );
};

export default GenresPage;