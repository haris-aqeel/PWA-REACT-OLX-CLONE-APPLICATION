import React from "react";
import OlxLogo from "../Images/olx-logo-1.png";
import { Link } from "react-router-dom";
import './Header.css'

import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

function Header() {
  return (
    <div className="header_component">
      <div className="header__controlLogo">
        <Link to="/">
          <img src={OlxLogo} alt="Olx-Logo" width="50" height="50" />
        </Link>
      </div>
      <div className="header__controlSearchBar">
        <InputBase
          placeholder="Find Cars, Mobile Phones and much more ...."
          inputProps={{ "aria-label": "Find Cars, Mobile Phones and much more ...." }}
          className='header__controlSearchBar__inputBase'
        />
        <span className='header__controlSearchBar__icon'>
        <IconButton
          type="submit"
          aria-label="search"
          style={{color: '#fff'}}
        >
          <SearchIcon />
        </IconButton>
        </span>
      </div>
      <div className="header__login">
          <Link to ='/login' style={{textDecoration: 'none'}}>
              <span className='header__login__text'>Login</span>
          </Link>
      </div>
      <div className="header__sell">
          <div className='header__sell__div'>
              <Link to='/sell'  style={{textDecoration: 'none'}}>
                <span className='header__sell__text'> 
                    <AddIcon/>  Sell
                </span>
              </Link>
          </div>
      </div>
    </div>
  );
}

export default Header;
