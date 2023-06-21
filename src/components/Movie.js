function Movie(props){
    return(
        <div key={props.details.id} className="card">
            <p>{props.details.title}</p>
            <p>Rating: {props.details.rating}</p>


        { props.details.imgURL 
        ? <img src={props.details.imgURL} /> 
        : <img src="https://dummyimage.com/182x268/ffffff/000000" />
        }


        { props.details.rating > 8 && <p>RECOMMENDED</p>}

            {/* <p>
                <button onClick={ () => {deleteMovie(props.id)}}>Delete this movie</button>
            </p> */}
        </div>
    )
}

export default Movie