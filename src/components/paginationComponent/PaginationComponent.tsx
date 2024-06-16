import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type IProps ={
    page: number,
    totalPages: number
}
const PaginationComponent: FC <IProps> = ({page, totalPages}) => {
    const navigate = useNavigate()
    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                page +=1;
                navigate(`/movies/${page}`);
                break;
            case 'prev':
                page -=1;
                navigate(`/movies/${page}`);
                break;

        }

    };

    return (
        <div>
           <button
                disabled={page === 1}
                onClick={() => {
                    changePage('prev');
                }}>prev
            </button>
            <button
                disabled={page === totalPages}
                onClick={() => {
                    changePage('next');

                }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;