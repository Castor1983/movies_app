import React, {useEffect } from 'react';
import css from '../paginationComponent/Pagination.module.css'
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';

const ThemeComponent = () => {
    const dispatch =useAppDispatch()
   const {theme} = useAppSelector(state => state.moviesListSlice)
    const handleclick = () => {
        dispatch(movieActions.toggleValue())
    }
    useEffect(() => {
        if (theme == true){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
    return (
        <div>
            <button onClick={handleclick} className={css.button}>{theme?'Light theme' : 'Dark theme'}</button>
        </div>
    );
};

export default ThemeComponent;