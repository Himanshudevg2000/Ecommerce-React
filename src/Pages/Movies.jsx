import React, { useState, Fragment } from "react";
import classes from './Movies.module.css'

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = async () => {
        setIsLoading(true);
        setError(null)
        try {
            const response = await fetch('https://swapi.dev/api/film')

            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()

            const transformData = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    releaseDate: movieData.release_date,
                    description: movieData.opening_crawl,
                }
            });
            setMovies(transformData)
            setIsLoading(false);
        }
        catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
        // console.log(transformData)
    }

    const moviesList = movies.map((items) => {
        return (
            <div className={classes.maindiv}>
                <ul className={classes.items} > {items.id} </ul>
                <ul className={classes.items} > {items.title} </ul>
                <ul className={classes.items} > {items.releaseDate} </ul>
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
                {!isLoading && moviesList}
                {isLoading && <p className={classes.maindiv}>Loading.....</p>}
                {!isLoading && error && <p>{error}</p>}
            </div>

        </Fragment>
    )
}

export default Movies;