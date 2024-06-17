import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { appRoutes } from "./appRoutes";
import MoviesPage from "../pages/moviesPage/MoviesPage";
import MovieInfoPage from "../pages/movieInfoPage/MovieInfoPage";
import GenresPage from "../pages/genresPage/GenresPage";


const routes: RouteObject[] = [{
    path: appRoutes.MAIN, element: <MainLayout/>, children: [

        {
            path: appRoutes.MOVIESLIST,
            element: <MoviesPage/>
        },
        {
            path: appRoutes.MOVIEINFO,
            element: <MovieInfoPage/>
        },
        {
            path: appRoutes.GENRELIST,
            element: <GenresPage/>
        },
    ]

}]

const router = createBrowserRouter(routes);

export default router;