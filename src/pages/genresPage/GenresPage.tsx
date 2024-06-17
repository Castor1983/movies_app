import React, { useEffect } from 'react';
import GenresComponent from '../../components/genresComponent/GenresComponent';
import { useAppDispatch } from '../../redux/store/store';
import { genreActions } from '../../redux/slices/genreSlice';

const GenresPage = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(genreActions.getAll)
    }, []);
    return (
        <div>
            <GenresComponent/>
        </div>
    );
};

export default GenresPage;