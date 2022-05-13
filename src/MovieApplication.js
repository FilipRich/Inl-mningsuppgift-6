import AddMovieForm from './AddMovieForm';
import Movies from './Movies';

function MovieApplication() {
  return (
    <div className="container">
      <h1>Min Filmlista</h1>
      <AddMovieForm />
      <Movies />
    </div>
  );
}

export default MovieApplication;
