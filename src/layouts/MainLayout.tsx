import React from 'react';
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
const MainLayout = () => {
    return (
        <div className={css.MainLayout}>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;