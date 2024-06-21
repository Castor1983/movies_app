import React from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../router/appRoutes';
import UserInfoComponent from '../userInfoComponent/UserInfoComponent';
import css from './Header.module.css'
import ThemeComponent from '../themeComponent/ThemeComponent';
import SearchByKeyWordsFormComponent from '../searchByKeyWordsFormComponent/SearchByKeyWordsFormComponent';

const HeaderComponent = () => {
    return (
        <div>
            <div className={css.Header}>
                <h3>The MovieDB</h3>
                <NavLink to={appRoutes.MOVIESLIST} style={{textDecoration: 'none', color: 'yellow'}}>Movies</NavLink>
                <NavLink to={appRoutes.GENRELIST} style={{textDecoration: 'none', color: 'yellow'}}>Genres</NavLink>
                <SearchByKeyWordsFormComponent/>
                <ThemeComponent/>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;