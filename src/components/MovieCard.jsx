import React from 'react';

const MovieCard = (props) => {
    const clickHandler = () => {
        props.addMovie(props.movie)
    };

    return (
        <div className='movie-card'>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} />
                <h3>{props.movie.original_title}</h3>
            </div>
            <button onClick={clickHandler}>Add to List</button>
        </div>
    )
};

export default MovieCard;