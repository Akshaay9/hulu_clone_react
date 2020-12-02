
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { original } from "../../Api"
import OriginalMovieData from "./TvShowList"
import "../../App.css"

function OriginalMovie() {
    const [originalData, setOriginalData] = useState([])

    useEffect(() => {
        originalMovies()
    }, [])


    const originalMovies = async () => {
        const originalMovie = await axios.get(original)

        setOriginalData(originalMovie.data.results)
    }
    return (
        <div>
            <h1 className="treandingmovies">hulu originals</h1>

            <div className="movie-container">
                <>
                    {originalData.length > 1 && (
                        originalData.map((obj) => (

                            <OriginalMovieData
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

export default OriginalMovie
