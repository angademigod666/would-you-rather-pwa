/**
* index.js - root file of the WOULD YOU RATHER application
*/ 

import registerServiceWorker from './registerServiceWorker';


/* REACT related imports*/
import React from 'react'
import ReactDOM from 'react-dom'

/* REDUX related imports*/
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middlewares from './middleware'

/* Styling and App's React components related imports*/
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import WYRApp from './wyr-components/App-WYR'




/*
* Creating the REDUX STORE const store
*/
const store = createStore(reducer, middlewares)

/*
* Loading the <WYRApp/> root view-component of the app
* <Provided/> by the {store}
* inside ReactDOM.render()
*/
ReactDOM.render(
  <Provider store={store}>
	<WYRApp />
  </Provider>,
document.getElementById('root')
)

registerServiceWorker(); 