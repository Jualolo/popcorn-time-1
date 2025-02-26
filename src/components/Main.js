import { useState } from "react";
import movies from "../data/movies.json";
import Movie from "../components/Movie"

import "./Main.css";

function Main() {


    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
    

    const deleteMovie = (movieId) => {
        // console.log("deleting movie with id....", movieId)

        // moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

        const newList = moviesToDisplay.filter( (element) => {
            return element.id !== movieId;
        });

        setMoviesToDisplay(newList);

    }


    // Conditional Rendering: option A (Element Variables)
    let message = "";
    if(moviesToDisplay.length > 0){
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>;
    } else {
        message = <h1>Sorry, no movies to display</h1>;
    }


    return (
        <div className="Main">

            {message}

            {moviesToDisplay.map((movieObj) => {
                return(
                    <Movie details={movieObj}/>
                )
            })}
        </div>
    );
}

export default Main;