import React, { useState, useEffect } from 'react'
import axios from "axios"
import { trending } from "../../Api"
import HomeMovieList from "./HomeMovieList"
import "../../App.css"
import Search from "./Search"

function HomeMovie() {
    const [trendingData, setTrendingData] = useState([])

    useEffect(() => {
        trendingMovies()
    }, [])


    const trendingMovies = async () => {
        const data = await axios.get(trending)
        console.log(data.data.results);
        setTrendingData(data.data.results)
    }






    return (
        <>
            <Search

                setTrendingData={setTrendingData}
            />
            <h1 className="treandingmovies">Trending Movies</h1>

            <div className="movie-container">
                <>
                    {trendingData.length > 1 && (
                        trendingData.map((obj) => (

                            <HomeMovieList
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
        </>

    )
}

export default HomeMovie
