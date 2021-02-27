import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="mainpage-container">
        <div className='header-container'>
          <Header />      
        </div>
        <div className="section-cards-container">
          <NavBar />
          <Route exact path="/planets" component={MainPage} />
          <Route exact path="/species" component={MainPage} />
          <Route exact path="/people" component={MainPage} />
          <Route exact path="/starship" component={MainPage} />
          <Route exact path="/vehicle" component={MainPage} />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
