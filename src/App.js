import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import Launchpad from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Layout } />
            <Route exact path='/launchpad' component={ Launchpad } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

