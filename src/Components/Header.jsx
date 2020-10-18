import React, {useState, useEffect} from "react";
import OlxLogo from "../Images/olx-logo-1.png";
import { Link } from "react-router-dom";
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
// import {auth, provider} from '../Pages/Login'
import {useStateValue} from '../GlobalState/ContextProvider'
import {Fb_auth_login, Fb_auth_logout} from '../Components/Authentication/Fb_auth'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button: {
    width: 250,
    marginBottom: 10
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
   padding: '40px 0px',
    height: 300,
    width: 300,
    textAlign: 'center'
  },
}));


function Header() {

  const [{userdata}, dispatch] = useStateValue();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const login =() => {
    Fb_auth_login(dispatch);
    handleClose();  
  }

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
          {userdata.user === false ? 
          <button onClick={handleOpen} style={{textDecoration: 'none', outline: 'none'}}>
         <span className='header__login__text'>Login</span>
          </button>: 
           <button onClick={()=> Fb_auth_logout(dispatch)} style={{textDecoration: 'none', outline: 'none'}}>
            <p>{userdata.username}</p><span className='header__login__text'>Logout</span>
           </button>
          }
          
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
          >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title" style={{marginBottom: '80px'}}>OLX Sign In</h2>
              <Button
              variant="contained"
              onClick={login}
              color="primary"
              className={classes.button}
              startIcon={< FacebookIcon />}
              >
              Sign In With Facebook
            </Button>
            <Button
              variant="contained"
              onClick={login}
              color="secondary"
              className={classes.button}
              startIcon={<i className="fab fa-google"></i>}
              >
              Sign In With Google
            </Button>
            </div>
          </Fade>
          </Modal>
        </div>
        <div className="header__sell">
            <div className='header__sell__div'>
            {userdata.user === true ? 
                <Link to='/sell'  style={{textDecoration: 'none'}}>
                  <span className='header__sell__text'> 
                      <AddIcon/>  Sell
                  </span>
                </Link>
                :  <span className='header__sell__text' onClick={handleOpen}> 
                    <AddIcon/>  Sell
                  </span>}
            </div>
        </div>
    </div>
  );
}

export default Header;
