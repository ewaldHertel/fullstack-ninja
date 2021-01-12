import React, {useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Work from './components/Work';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Impress from './components/Impress';
import Privacy from './components/Privacy';
import Fullpage from './assets/ext/script.js';
import Footer from './components/Footer';
import './assets/font/fontawesome/css/fontawesome-all.min.css';
import './assets/scss/main.scss';

const App = () => {
  useEffect(() => {
    new Fullpage();
  }, []);
  return (
    <Fragment>
      <Header />
      <Router>
        <Route exact path="/" component={Home}/>{" "}
        <Route exact path="/service/" component={Service}/>{" "}
        <Route exact path="/work/" component={Work}/>{" "}
        <Route exact path="/aboutme/" component={AboutMe}/>{" "}
        <Route exact path="/contact/" component={Contact}/>{" "}
        <Route exact path="/impress/" component={Impress}/>{" "}
        <Route exact path="/privacy/" component={Privacy}/>{" "}
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
