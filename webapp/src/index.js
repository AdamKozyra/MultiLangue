
// import needed libraries
import React from 'react'
import App from './App'
import "typeface-roboto";
import {render} from 'react-dom'



import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap by material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// render the editor
render( <App />, document.getElementById('root'))