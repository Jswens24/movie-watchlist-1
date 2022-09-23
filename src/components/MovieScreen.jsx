import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = (props) => {

    const movieDisplay = props.movieList.map((movie) => {
        return <MovieCard movie={movie} addMovie={props.addMovie} />
    })

    return (
        <div className='page'>
            <h1>Jessica's Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
};

export default MovieScreen;