import React, { useState, useRef } from 'react';
import Movie from './Movie';


export default function Movies() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "Star wars",
        rating: 4
    }]);

    const titleRef = useRef();
    const ratingRef = useRef();

    function addMovie() {
        if (titleRef.current.value === "" && ratingRef.current.value === "0") {
            alert("You need to add title and rating before submitting")
        }
        else if (titleRef.current.value === "") {
            alert('You need to add a title before submitting');
        }
        else if (ratingRef.current.value === '0') {
            alert('You need to rate the movie before submitting');
        }
        else {
            let large = findLargestId();
            const newId = large + 1;
            setMovies([...movies, {
                id: newId,
                title: titleRef.current.value,
                rating: parseInt(ratingRef.current.value)
            }]);
            titleRef.current.value = "";
            ratingRef.current.value = "0";
        }
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    function sortMoviesAlpha() {
        const movieList = [].concat(movies)
            .sort((a, b) => a.title > b.title ? 1 : -1);
        setMovies(movieList);
    }

    function sortMoviesNum() {
        const movieList = [].concat(movies)
            .sort((a, b) => a.rating < b.rating ? 1 : -1);
        setMovies(movieList);
    }

    function findLargestId() {
        const listOfId = [];
        for (let i = 0; i < movies.length; i++) {
            listOfId.push(movies[i].id);
        }
        let largest = Math.max(...listOfId);
        return largest;
    }

    return (
        <div>
            <form id="add-movie-form" >
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <label htmlFor="title-field">Titel</label>
                    <input type="text" id="title-field" className="form-control" placeholder="Ange titel..." ref={titleRef}></input>

                    <label htmlFor="rating-field">Betyg:</label>

                    <select type="text" id="rating-field" className="form-control" ref={ratingRef}>
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="button" className="btn btn-success mt-3" value="Spara film" onClick={addMovie}></input>

                </fieldset>
            </form>

            <h2>Filmer</h2>

            <ul className="list-group" id="movie-list">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
            <button className="btn btn-primary" onClick={() => {sortMoviesAlpha()}}>Alfabetisk ordning</button>
            <button className="btn btn-primary" onClick={() => {sortMoviesNum()}}>Betygsordning</button>
        </div>
    );
}