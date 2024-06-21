import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form'
import { IKeyWordsModel } from '../../models/IKeyWordsModel';
import { useAppDispatch } from '../../redux/store/store';
import { movieActions } from '../../redux/slices/movieSlice';
import css from './SearchByKeyWords.module.css'
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../router/appRoutes';

const SearchByKeyWordsFormComponent = () => {
    const {register,handleSubmit, reset} = useForm<IKeyWordsModel>();
    const dispatch = useAppDispatch()
const navigate = useNavigate()

    const search: SubmitHandler<IKeyWordsModel> = (query ) => {
        const{keywords} = query
        if (keywords) {
            dispatch(movieActions.keyWords(keywords))
            navigate(appRoutes.SEARCH)
        }
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input  className={css.input} type='text' placeholder={'Search movie'} {...register('keywords')}/>
                <button className={css.button}>Search</button>
            </form>
        </div>
    );
};

export default SearchByKeyWordsFormComponent;


