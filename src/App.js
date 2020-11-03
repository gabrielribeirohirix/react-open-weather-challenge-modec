import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import { Provider } from 'react-redux'
import store from './store/index'

import './App.css'


export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>
  );
}
