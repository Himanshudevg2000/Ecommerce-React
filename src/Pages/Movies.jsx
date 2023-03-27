import React, { useState, useEffect, Fragment, useCallback } from "react";
import classes from './Movies.module.css'

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [openingArea, setOpeningArea] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [addData, setAddData] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(title,openingArea,releaseDate)
        setAddData(true);
        setTitle("")
        setOpeningArea("")
        setReleaseDate("")
    }

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null)
        try {
            const response = await fetch('https://swapi.dev/api/films')

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
    }, [])

    useEffect(() => {
        fetchMoviesHandler()
    }, [fetchMoviesHandler])


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
            <form className={classes.form} onSubmit={submitHandler} >
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea type="textarea" value={openingArea} onChange={(e) => setOpeningArea(e.target.value)} placeholder="Opening Text" />
                <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} placeholder="Releasedate" />
                <button type='submit'>Add</button>
            </form>
            <section className={classes.buttonsection}>
                <button onClick={fetchMoviesHandler} >Fetch Movies</button>
            </section>

            <div>
                {addData && <div className={classes.maindiv}>
                    <ul className={classes.items} > {title} </ul>
                    <ul className={classes.items} > {releaseDate} </ul>
                    <ul className={classes.items} > {openingArea} </ul>
                </div>}
                {!isLoading && moviesList}
                {isLoading && <p className={classes.maindiv}>Loading.....</p>}
                {!isLoading && error && <p>{error}</p>}
            </div>

        </Fragment>
    )
}

export default Movies;