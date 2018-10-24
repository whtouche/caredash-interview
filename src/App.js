import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HeadlineCmp from './HeadlineCmp';
import SignupForm from './SignupForm';
import SubPage from './SubPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <div className="main">
            <div className="content">
              <div className="contentBody">
                <Route
                  path="/(pcp|pediatricians|optometrists|dentists|about|contact|review)"
                  component={SubPage}
                />
              </div>
            </div>
            <div className="signup">
              <SignupForm />
            </div>
          </div>

          <div className="reasons">
            <h3 className="reasonsHeader">
              Reasons to Sign Up as a Provider on CareDash
            </h3>
            <div className="headlines">
              <HeadlineCmp />
              <HeadlineCmp />
              <HeadlineCmp />
            </div>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
