import "./App.css";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './components/Home.js'
import NavBar from './components/NavBar.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="navBar">
        <NavBar />
        <Switch>
          <Route exact path="/Home" render={(props) => <Home {...props} />} />
        </Switch>
        </div>
        <div className="publicLanding">
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </div>
      </div>
    );
  }
}

export default App;
