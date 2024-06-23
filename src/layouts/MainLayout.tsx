import React from 'react';
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import css from './MainLayout.module.css'
import { useAppSelector } from '../redux/store/store';

const MainLayout = () => {
   const {theme} = useAppSelector(state=> state.moviesListSlice)
    return (
        <div className={ theme? css.MainLayoutLight : css.MainLayoutDark}>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;