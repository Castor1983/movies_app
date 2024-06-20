import React, { FC } from 'react';
import css from './Pagination.module.css'
import { useAppSelector } from '../../redux/store/store';
import { SetURLSearchParams } from 'react-router-dom';



type IProps ={
    setQuery: SetURLSearchParams
}
const PaginationComponent: FC <IProps> = ({setQuery}) => {
    const {movies:{total_pages, page}} = useAppSelector(state => state.moviesListSlice)
    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                setQuery({page: (page + 1).toString()
        })
                break;

            case 'prev':
                setQuery({page: (page - 1).toString()
        })
                break;

        }

    };

    return (
        <div>
           <button className={css.button}
                disabled={page === 1}
                onClick={() => {
                    changePage('prev');
                }}>Previous
            </button>
            <button className={css.button}
                disabled={page === total_pages}
                onClick={() => {
                    changePage('next');

                }}>Next
            </button>
        </div>
    );
};

export default PaginationComponent;