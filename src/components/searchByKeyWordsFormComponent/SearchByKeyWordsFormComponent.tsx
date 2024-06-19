import React from 'react';
import {useForm} from 'react-hook-form'
import { IKeyWordsModel } from '../../models/IKeyWordsModel';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';

const SearchByKeyWordsFormComponent = () => {
    const {register,handleSubmit, reset} = useForm<IKeyWordsModel>();
    const dispatch = useAppDispatch()

    const search= (keywords: IKeyWordsModel) => {
        const{with_keywords} = keywords
        const page = '1'
        if (with_keywords && page)
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


