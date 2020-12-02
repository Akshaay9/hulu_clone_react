
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { action } from "../../Api"
import ActionMovieList from "./TvShowList"
import "../../App.css"

function ActionMovie() {
    const [actionData, setActionData] = useState([])

    useEffect(() => {
        actionMovies()
    }, [])


    const actionMovies = async () => {
        const actionMovie = await axios.get(action)

        setActionData(actionMovie.data.results)
    }
    return (
        <div>
            <h1 className="treandingmovies">Movies</h1>

            <div className="movie-container">
                <>
                    {actionData.length > 1 && (
                        actionData.map((obj) => (

                            <ActionMovieList
                                poster_path={obj.poster_path}
                                title={obj.original_title}
                                release_date={obj.release_date}
                                vote_average={obj.vote_average}
                                overview={obj.overview}
                            />
                        ))
                    )}
                </>
            </div>
        </div>
    )
}

export default ActionMovie
