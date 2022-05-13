import React, { useState, useRef } from 'react';
import Movie from './Movie';

function Movies() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "Star wars",
        rating: 0
    }]);

    return (
        <div>
            <h2>Filmer</h2>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} />) }
            </ul>
        </div>
    );
}

export default Movies;