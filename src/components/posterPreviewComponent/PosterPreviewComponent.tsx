import React, { FC } from 'react';
import { posterURL } from '../../constants/urls';
import css from './PosterPreview.module.css'
type IProps ={
    posterPath: string
}

const PosterPreviewComponent: FC <IProps>= ({posterPath}) => {

    return (
        <div className={css.PosterPreview}>
            <img src={`${posterURL}${posterPath}`} className={css.Poster}/>
        </div>
    );
};

export default PosterPreviewComponent;