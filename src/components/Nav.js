import React from 'react'
import "../App.css"
import { Link, link } from 'react-router-dom';


function Nav() {

    return (
        <div className="nav">
            {/* font-family: 'Oswald', sans-serif; */}

            <ul className="left-nav" >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="hulu">hulu</li>
                </Link>
                <Link to="/tvshow" style={{ textDecoration: 'none' }}>
                    <li>Tv Shows</li>
                </Link>
                <Link to="/movies" style={{ textDecoration: 'none' }} >
                    <li>Movies</li>
                </Link>
                <Link to="/originals" style={{ textDecoration: 'none' }}>
                    <li>Originals</li>
                </Link>
                <Link to="/kids" style={{ textDecoration: 'none' }}>
                    <li>Kids</li>
                </Link>
            </ul>



            <div className="right-nav">

                <button className="trial">
                    Start Your Free Trial
           </button>
                <div className="log-in">
                    Log-In
           </div>
            </div>
        </div>
    )
}

export default Nav
