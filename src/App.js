import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// components
import Nav from "./components/Nav"
import BottomNav from "./components/BottomNav"
import HomeMovie from "./components/moviecomponents/HomeMovie"
import TvShow from "./components/moviecomponents/TvShow"
import ActionMovie from "./components/moviecomponents/ActionMovie"
import OriginalMovie from "./components/moviecomponents/OriginalMovie"
import Kids from "./components/moviecomponents/Kids"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <BottomNav /> <Switch>
          <Route path="/" exact component={HomeMovie} />
          <Route path="/tvshow" exact component={TvShow} />
          <Route path="/movies" exact component={ActionMovie} />
          <Route path="/originals" exact component={OriginalMovie} />
          <Route path="/kids" exact component={Kids} />
        </Switch>

      </Router>
    </div>
  )
}

export default App
