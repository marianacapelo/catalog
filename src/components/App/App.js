import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './../../pages/Home';
import Details from './../../pages/Details';
import Login from './../../pages/Login';
import Dashboard from './../../pages/Dashboard';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

class App extends Component {
  render() {
    return (
        <div className="container-fluid app-main-container">
           <Header /> 
            <div className="main-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/view/:id" component={Details} />
            </div>
           <Footer /> 
        </div>
    )
  }
}

export default App;
