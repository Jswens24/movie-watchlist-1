import React from 'react';

const MovieCard = (props) => {
    const clickHandler = () => {
        props.addMovie(props.movie)
    };

    const inWatchList = props.watchList.filter((mov) => {
        return mov.id === props.movie.id;
    });

    const button = inWatchList.length === 0 ? (<button onClick={clickHandler}>Add to List</button>) : (<button onClick={() => props.removeMovie(props.movie)}>Remove</button>)

    return (
        <div className='movie-card'>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} />
                <h3>{props.movie.original_title}</h3>
            </div>
            {button}
        </div>
    )
};

export default MovieCard;