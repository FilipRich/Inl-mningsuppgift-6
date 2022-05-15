
function Movie(props) {
    
    function movieRating(rating) {
        return [...Array(rating)].map((e, i) => <img key={i}src={require('./images/star.png')} alt="Star"></img>);
    }
    
    return(
        <li className="list-group-item" data-grade={props.item.rating} data-title={props.item.title}>
            { props.item.title }
            <img src={require('./images/delete.png')} className="delete-movie-icon" alt="Delete Movie" onClick={() => {props.deleteMovie(props.item.id)}}></img>
            {movieRating(props.item.rating)}
            
        </li>
    );
}


export default Movie;