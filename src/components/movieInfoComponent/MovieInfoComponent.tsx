import React from 'react';
import { useAppSelector } from '../../redux/store/store';
import { NavLink } from 'react-router-dom';
import { posterURL } from '../../constants/urls';

const MovieInfoComponent = () => {
    const{movie} = useAppSelector(state => state.moviesListSlice)
    const {backdrop_path, title, overview, genres, vote_average, release_date, runtime, budget} = movie;
    return (
        <div>
            <div >
                <img src={`${posterURL}${backdrop_path}`} alt={'poster'} />
                <h1>{title}</h1>
            </div>
            <div >
                <div>{overview}</div>
                <div> Genres: {genres?.map(genre => (<div><NavLink to={`/genre/${genre.id}`} key={genre.id}
                                                                   style={{textDecoration: 'none', color: 'yellow',}}>
                    {genre.name}
                </NavLink></div>))}</div>
                <div>Relise date: {release_date}</div>
                <div>Runtime:{runtime} min.</div>
                <div>Budget: {budget}$</div>
            </div>
        </div>
    );
};

export default MovieInfoComponent;