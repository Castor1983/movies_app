import React from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../router/appRoutes';
import UserInfoComponent from '../userInfoComponent/UserInfoComponent';
import css from './Header.module.css'
import ThemeComponent from '../themeComponent/ThemeComponent';
import SearchByKeyWordsFormComponent from '../searchByKeyWordsFormComponent/SearchByKeyWordsFormComponent';
import { useAppSelector } from '../../redux/store/store';

const HeaderComponent = () => {
    const {theme} = useAppSelector(state=> state.moviesListSlice)
    return (
        <div>
            <div className={theme? css.HeaderLight : css.HeaderDark}>
                <h3>The MovieDB</h3>
                <NavLink to={appRoutes.MOVIESLIST} style={{textDecoration: 'none', color: 'white'}}>Movies</NavLink>
                <NavLink to={appRoutes.GENRELIST} style={{textDecoration: 'none', color: 'white'}}>Genres</NavLink>
                <SearchByKeyWordsFormComponent/>
                <ThemeComponent/>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;