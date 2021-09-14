import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// { Switch, Route, Redirect }

import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Reservations from './components/Reservations.js'
import Corporate from './components/Corporate.js'
import FAQ from './components/FAQ.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Reviews from './components/Reviews.js'
import Waiver from './components/Waiver.js'


class App extends Component {

  state = {}

  render() {
    return (
      <div className="App">
        <div className="landing">
            <Navbar />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route exact path="/reservations" render={(props) => <Reservations {...props} />} />
              <Route exact path="/corporate" render={(props) => <Corporate {...props} />} />
              <Route exact path="/faq" render={(props) => <FAQ {...props} />} />
              <Route exact path="/contact" render={(props) => <Contact {...props} />} />
              <Route exact path="/about" render={(props) => <About {...props} />} />
            </Switch>
              <Route exact path="/waiver" render={(props) => <Waiver {...props} />} />
            <Reviews />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
