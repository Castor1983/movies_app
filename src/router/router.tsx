import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layout/MainLayout";


const routes: RouteObject[] = [{
    path: '', element: <MainLayout/>

}]

const router = createBrowserRouter(routes);

export default router;