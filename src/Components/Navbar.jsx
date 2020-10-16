import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar__component'>
      <nav className="navbar navbar-expand-lg navbar__component__text">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
