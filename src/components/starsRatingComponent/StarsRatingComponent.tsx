import React, { FC } from 'react';
import {Rating} from "@mui/material";

type IProps={
    rating: number
}
const StarsRatingComponent : FC <IProps>= ({ rating }) => {
rating.toFixed(1)
    return (
        <div>
            <Rating name="customized-10" defaultValue={rating} max={10} precision={0.1} readOnly size="small"/>
        </div>
    );
};


export default StarsRatingComponent;