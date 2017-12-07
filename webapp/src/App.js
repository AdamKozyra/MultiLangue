import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import the view and the viewModel
import {TodoView} from './TodoView'
import {TodoViewModel} from './TodoViewModel'

import './App.css';

// create a viewModel singleton
const model = new TodoViewModel()


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">     
        <AppBar
              title="Lord Jim"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />   
          <h1 className="App-title">Multi language Books</h1>
        </header>
        <p className="App-intro">
          <TodoView model={model} />
        </p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
