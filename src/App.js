import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Sell from './Pages/Sell'
import Category from './Pages/Category'
import Add from './Pages/Add'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <div>
      <Router>
        
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/sell'>
            <Sell/>
        </Route>
        <Route exact path='/category'>
            <Category/>
        </Route>
        <Route path='/add/'>
            <Add/>
        </Route>
        <Route path='/notfound'>
            <NotFound/>
        </Route>
        
      </Router>
    </div>

  );
}

export default App;
