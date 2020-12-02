
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { tv } from "../../Api"
import TvShowList from "./TvShowList"
import "../../App.css"

function TvShow() {
    const [tvData, setTvData] = useState([])

    useEffect(() => {
        TvShows()
    }, [])


    const TvShows = async () => {
        const dataTv = await axios.get(tv)

        setTvData(dataTv.data.results)
    }
    return (
        <div>
            <h1 className="treandingmovies">Tv Series</h1>

            <div className="movie-container">
                <>
                    {tvData.length > 1 && (
                        tvData.map((obj) => (

                            <TvShowList
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

export default TvShow
