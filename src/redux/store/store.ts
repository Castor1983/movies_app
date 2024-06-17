import {configureStore} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { movieSlice } from "../slices/movieSlice";
import { genreSlice } from "../slices/genreSlice";

export const store = configureStore({
    reducer: {
        moviesListSlice: movieSlice.reducer,
        genresListSlice: genreSlice.reducer
    }
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();