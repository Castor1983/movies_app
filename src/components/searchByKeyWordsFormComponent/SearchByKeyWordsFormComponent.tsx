import React from 'react';
import {useForm} from 'react-hook-form'
import { IKeyWordsModel } from '../../models/IKeyWordsModel';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import { useParams } from 'react-router-dom';

const SearchByKeyWordsFormComponent = () => {
    const {register,handleSubmit, reset} = useForm<IKeyWordsModel>();
    const dispatch = useAppDispatch()
    const{page} =useParams()
    const search= (keywords: IKeyWordsModel) => {
        const{with_keywords} = keywords
        dispatch(movieActions.searchByKeyWords({with_keywords, page}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type='text' placeholder={'keyWords'} {...register('with_keywords')}/>
                <button>Search</button>
            </form>

        </div>
    );
};

export default SearchByKeyWordsFormComponent;


