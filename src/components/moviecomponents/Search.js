import React, { useState, useEffect } from 'react'
import axios from "axios"
import { trending } from "../../Api"

import "../../App.css"


function Search({ setTrendingData }) {
    const [type, setType] = useState("")

    const searchHandler = (e) => {
        setType(e.target.value)
        search()
    }
    useEffect(() => {
        trendingMovies()
    }, [!type])


    const search = async () => {
        const searchData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d426d6313a2fa8be90e8499b017bdfe4&language=en-US&query=${type}&page=1&include_adult=false`)
        console.log(searchData.data.results);
        setTrendingData(searchData.data.results)

    }

    const trendingMovies = async () => {
        const data = await axios.get(trending)
        console.log(data.data.results);
        setTrendingData(data.data.results)
    }





    return (
        <div className="searchdiv" >
            <input type="text" value={type} onChange={searchHandler} placeholder="Search movies.." className="search" />
        </div>
    )
}

export default Search
