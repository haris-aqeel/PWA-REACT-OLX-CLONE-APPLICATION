import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Sell from './Pages/Sell'
import Category from './Pages/Category'
import { useStateValue } from './GlobalState/ContextProvider';

function App() {

  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/'>
            <Home/>
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
