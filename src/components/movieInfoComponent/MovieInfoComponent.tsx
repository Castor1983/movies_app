import React from 'react';
import { useAppSelector } from '../../redux/store/store';
import { NavLink, useNavigate } from 'react-router-dom';
import { posterURL } from '../../constants/urls';
import css from './MovieInfo.module.css'

const MovieInfoComponent = () => {
    const navigate = useNavigate()
    const{movie, movies} = useAppSelector(state => state.moviesListSlice)
    const {backdrop_path, title, overview, genres, vote_average, release_date, runtime, budget,} = movie;
    const {page} = movies
    return (
        <div className={css.MovieDetails}>
            <div className={css.title}>
                <img src={`${posterURL}${backdrop_path}`} alt={'poster'} className={css.img}/>
                <h1>{title}</h1>
            </div>
            <div className={css.textInfo}>
                <div>{overview}</div>
                <div> Genres: {genres?.map(genre => (<div><NavLink to={`/genre/${genre.id}`} key={genre.id}
                                                                   style={{textDecoration: 'none', color: 'yellow',}}>
                    {genre.name}
                </NavLink></div>))}</div>
                <div>Relise date: {release_date}</div>
                <div>Runtime:{runtime} min.</div>
                <div>Budget: {budget}$</div>
                <button onClick={()=>{
                    navigate(`/movies/${page}`)
                }} className={css.button} > Back</button>
            </div>
        </div>
    );
};

export default MovieInfoComponent;