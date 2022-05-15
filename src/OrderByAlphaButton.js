
export default function OrderByAlphaButton(props) {
    
    return(
        <button className="btn btn-primary" onClick={() => {props.deleteMovie(props.item.id)}}>Alfabetisk ordning</button>
    )
};