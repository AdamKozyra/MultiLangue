import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import the view and the viewModel
import {BookView} from './BookView'
import {BookViewModel} from './BookViewModel'

import './App.css';

// create a viewModel singleton
const model = new BookViewModel()


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">     
        <AppBar
              title={model.book.name}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />  
        </header>
     
          <BookView model={model} />
       
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
