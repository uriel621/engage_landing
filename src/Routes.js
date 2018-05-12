import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Main';
import Footer from './components/Footer';

import About from './components/MainComponents/About';
import Resources from './components/MainComponents/Resources';
import FAQ from './components/MainComponents/FAQ';


const Routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route exact path="/engage_landing" component={ Home } />
          <Route path="/engage_landing/about" component={ About } />
          <Route path="/engage_landing/resources" component={ Resources } />
          <Route path="/engage_landing/faq" component={ FAQ } />
        </main>
        <Footer />           
      </div>
    </Router>
  )
};

export default Routes;