import React from 'react'
import MovieCard from './MovieCard';

const Watchlist = (props) => {
    const movieDisplay = props.watchList.map(movie => {
        return <MovieCard removeMovie={props.removeMovie} watchList={props.watchList} addMovie={props.addMovie} movie={movie} />
    });

    return (
        <div className='watchlist'>
            <h1>My Watchlist</h1>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
};

export default Watchlist;