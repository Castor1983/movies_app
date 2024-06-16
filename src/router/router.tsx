import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { appRoutes } from "./appRoutes";
import MoviesPage from "../pages/moviesPage/MoviesPage";


const routes: RouteObject[] = [{
    path: appRoutes.MAIN, element: <MainLayout/>, children: [

        {
            path: appRoutes.MOVIESLIST,
            element: <MoviesPage/>
        },
    ]

}]

const router = createBrowserRouter(routes);

export default router;