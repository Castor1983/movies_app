import { IMoviesListModel } from "./IMoviesListModel";

export interface IResponseMoviesListModel {
       page: number,
       results: IMoviesListModel[],
       total_pages: number,
       total_results: number
}
