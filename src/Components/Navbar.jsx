import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import {Link} from 'react-router-dom';  
import DehazeIcon from '@material-ui/icons/Dehaze';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar__component container'>
      <nav className="navbar navbar-expand-lg navbar__component__text">
      <button className="navbar-toggler navbar__component__button" type="button"  data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><DehazeIcon/></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to='/category' className="nav-link" style={{color: '#000', opacity: '0.9'}}>
                Mobile Phones <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/category' className="nav-link" style={{color: '#000', opacity: '0.9'}}>
                Cars <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/category' className="nav-link" style={{color: '#000', opacity: '0.9'}}>
                Motorcycles <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/category' className="nav-link" style={{color: '#000', opacity: '0.9'}}>
                Tablets <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/category' className="nav-link" style={{color: '#000', opacity: '0.9'}}>
                Houses <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/category' className="nav-link" style={{color: '#000', opacity: '0.9'}}>
                TV-Audio-Video <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/category' className="nav-link" style={{color: '#000', opacity: '0.9'}}>
                Land and Plots <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
