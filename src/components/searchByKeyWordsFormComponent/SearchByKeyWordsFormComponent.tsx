import React from 'react';
import {useForm} from 'react-hook-form'
import { IKeyWordsModel } from '../../models/IKeyWordsModel';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import css from './SearchByKeyWords.module.css'

const SearchByKeyWordsFormComponent = () => {
    const {register,handleSubmit, reset} = useForm<IKeyWordsModel>();
    const dispatch = useAppDispatch()

    const search= (querykeywords: IKeyWordsModel) => {
        const{keywords} = querykeywords
        if (keywords)
        dispatch(movieActions.keyWords(keywords))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input  className={css.input} type='text' placeholder={'keyWords'} {...register('keywords')}/>
                <button className={css.button}>Search</button>
            </form>

        </div>
    );
};

export default SearchByKeyWordsFormComponent;


