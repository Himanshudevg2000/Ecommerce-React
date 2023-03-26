import React, { useState, Fragment } from "react";
import classes from './Movies.module.css'

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const fetchMoviesHandler = async () => {
        const response = await fetch('https://swapi.dev/api/films')
        const data = await response.json()

        const transformData = data.results.map((movieData) => {
            return {
                id: movieData.episode_id,
                title: movieData.title,
                url: movieData.url,
                description: movieData.opening_crawl
            }
        });
        setMovies(transformData)
        // console.log(transformData)
    }

    const moviesList = movies.map((items) => {
        return (
            <div className={classes.maindiv}>
                <ul className={classes.items} > {items.id} </ul>
                <ul className={classes.items} > {items.title} </ul>
                <ul className={classes.items} > {items.url} </ul>
                <ul className={classes.items} > {items.description} </ul>
            </div>
        )
    })
    // console.log(data)

    return (
        <Fragment>
            <section>
                <button onClick={fetchMoviesHandler} >Fetch Movies</button>
            </section>

            <div>
                {moviesList}
            </div>

        </Fragment>
    )
}

export default Movies;