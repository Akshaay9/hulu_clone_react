
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { kids } from "../../Api"
import KidsList from "./TvShowList"
import "../../App.css"

function Kids() {
    const [kidsData, setKidsData] = useState([])

    useEffect(() => {
        kidsMovies()
    }, [])


    const kidsMovies = async () => {
        const kidslMovie = await axios.get(kids)

        setKidsData(kidslMovie.data.results)
    }
    return (
        <div>
            <h1 className="treandingmovies">hulu originals</h1>

            <div className="movie-container">
                <>
                    {kidsData.length > 1 && (
                        kidsData.map((obj) => (

                            <KidsList
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

export default Kids
