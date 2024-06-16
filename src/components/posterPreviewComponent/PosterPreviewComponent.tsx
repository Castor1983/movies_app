import React, { FC } from 'react';
import { posterURL } from '../../constants/urls';
type IProps ={
    posterPath: string
}

const PosterPreviewComponent: FC <IProps>= ({posterPath}) => {

    return (
        <div>
            <img src={`${posterURL}${posterPath}`}/>
        </div>
    );
};

export default PosterPreviewComponent;