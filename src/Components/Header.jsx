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
import Avatar from '@material-ui/core/Avatar';
import {useStateValue} from '../GlobalState/ContextProvider'
import {Fb_auth_login, Fb_auth_logout} from '../Components/Authentication/Fb_auth'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 35,
    right: 0,
    zIndex: 1,
    border: '1px solid',
    width: 'auto',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    margin: '0 auto'
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

  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen1((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen1(false);
  };

  const defaultProps = {
    color: 'secondary',
    children: <FavoriteIcon />,
  };

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
      <div className="header__login">
          {userdata.user === false ? 
          <button onClick={handleOpen} style={{textDecoration: 'none', outline: 'none', border: 'none', backgroundColor: 'inherit'}}>
         <span className='header__login__text'>Login</span>
          </button>: 
          <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.root}>
            <button onClick={handleClick} type='button' style={{textDecoration: 'none', outline: 'none', border: 'none', backgroundColor: 'inherit'}}>
            <img src={userdata.userphoto} alt={userdata.username} title={userdata.username}  className='user__image'/>
           </button>
            {open1 ? (
              <div className={classes.dropdown}>
                <div className='user__avatar'>
                <Avatar className='user__avatar__pic'>{userdata.username[0]}</Avatar>
                </div>
                <div className='user__avatar__text'>
                <p>{userdata.username}</p>
                <h6>{userdata.email}</h6>
                </div>
                
                <div className='Badge' style={{margin: '20px 0px'}}>
                  <Button>
                  <Badge badgeContent={1} {...defaultProps} />View Favourite Adds
                  </Button>
                </div>
                <div>
                <Button variant="contained" onClick={()=> Fb_auth_logout(dispatch)}>Sign Out from Olx</Button>
                </div>
              </div>
            ) : null}
          </div>
        </ClickAwayListener>
          
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
        
    </div>
  );
}

export default Header;
