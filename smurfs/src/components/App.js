import React, { Component } from "react";
import "./App.css";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Reducer } from '../reducers/Reducers';
import SmurfList from './Smurfs/SmurfList';
import SmurfForm from './Smurfs/SmurfForm';

export const store = createStore(Reducer, applyMiddleware(thunk, logger));
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <SmurfList / >
      </div>
    );
  }
}

export default App;
