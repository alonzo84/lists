import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from './components/Login';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/list" component={List} />
          <Route exact path="/" render={()=> (
            <Redirect to="/login"/>
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
