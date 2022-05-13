
function AddMovieForm() {
    return (
        <form id="add-movie-form">
            <fieldset>
                <legend>Lägg till en film</legend>
                <label for="title-field">Titel</label>
                <input type="text" id="title-field" className="form-control" placeholder="Ange titel..."></input>

                <label for="rating-field">Betyg:</label>

                <select type="text" id="rating-field" class="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" class="btn btn-success mt-3" value="Spara film"></input>

            </fieldset>
        </form>
    );
}

export default AddMovieForm;
