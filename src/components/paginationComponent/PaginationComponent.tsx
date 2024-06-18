import React, { FC } from 'react';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import css from './Pagination.module.css'


type IProps ={
    page: number,
    totalPages: number
}
const PaginationComponent: FC <IProps> = ({page, totalPages}) => {
    const navigate = useNavigate()
    const {pathname} =useLocation()

    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                page +=1;
                navigate(`${pathname}/${page}`);
                break;
            case 'prev':
                page -=1;
                navigate(`${pathname}/${page}`);
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
                disabled={page === totalPages}
                onClick={() => {
                    changePage('next');

                }}>Next
            </button>
        </div>
    );
};

export default PaginationComponent;