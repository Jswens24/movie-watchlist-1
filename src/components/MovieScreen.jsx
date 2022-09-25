import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = (props) => {

    const movieDisplay = props.movieList.map((movie) => {
        return <MovieCard movie={movie} watchList={props.watchList} addMovie={props.addMovie} removeMovie={props.removeMovie} />
    });

    const decrement = () => {
        props.setPage(-1)
    };

    const increment = () => {
        props.setPage(+1)
    }

    return (
        <div className='page'>
            <h1>Jessica's Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className='btn-container'>
                <button onClick={props.page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className='movie-container'>{movieDisplay}</div>
        </div>
    )
};

export default MovieScreen;