import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Sell from './Pages/Sell'
import Category from './Pages/Category'


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path='/'>
            <Home/>
        </Route>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/sell'>
            <Sell/>
        </Route>
        <Route path='/category'>
            <Category/>
        </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
