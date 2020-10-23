import React from "react";
import OlxLogo from "../Images/olx-logo-1.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "../GlobalState/ContextProvider";
import {
  Fb_auth_login,
  Fb_auth_logout,
} from "../Components/Authentication/Fb_auth";
import {
  Google_auth_login,
  Google_auth_logout,
} from "../Components/Authentication/Google-auth";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  button: {
    width: 250,
    marginBottom: 10,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "40px 0px",
    height: 300,
    width: 300,
    textAlign: "center",
  },
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 35,
    right: 0,
    zIndex: 1,
    border: "1px solid",
    width: "auto",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    margin: "0 auto",
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {
  const [openFull, setOpenFull] = React.useState(false);

  const handleClickOpen = () => {
    setOpenFull(true);
  };

  const handleCloseFull = () => {
    setOpenFull(false);
  };

  const history = useHistory();
  const [{ userdata, basket }, dispatch] = useStateValue();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    Fb_auth_logout(dispatch);
    Google_auth_logout(dispatch);
  };
  const loginfb = () => {
    Fb_auth_login(dispatch);
    handleClose();
  };

  const logingoogle = () => {
    Google_auth_login(dispatch);
    handleClose();
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen1((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen1(false);
  };

  const handleOpenSell = () => {
    handleOpen();
    if (userdata.user === true) {
      history.push("/sell");
    }
  };

  const defaultProps = {
    color: "secondary",
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
          inputProps={{
            "aria-label": "Find Cars, Mobile Phones and much more ....",
          }}
          className="header__controlSearchBar__inputBase"
        />
        <span className="header__controlSearchBar__icon">
          <IconButton
            type="submit"
            aria-label="search"
            style={{ color: "#fff" }}
          >
            <SearchIcon />
          </IconButton>
        </span>
      </div>
      <div className="header__sell">
        <div className="header__sell__div">
          {userdata.user === true ? (
            <Link to="/sell" style={{ textDecoration: "none" }}>
              <span className="header__sell__text">
                <AddIcon /> Sell
              </span>
            </Link>
          ) : (
            <span className="header__sell__text" onClick={handleOpenSell}>
              <AddIcon /> Sell
            </span>
          )}
        </div>
      </div>
      <div className="header__login">
        {userdata.user === false ? (
          <button
            onClick={handleOpen}
            style={{
              textDecoration: "none",
              outline: "none",
              border: "none",
              backgroundColor: "inherit",
            }}
          >
            <span className="header__login__text">Login</span>
          </button>
        ) : (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
              <button
                onClick={handleClick}
                type="button"
                style={{
                  textDecoration: "none",
                  outline: "none",
                  border: "none",
                  backgroundColor: "inherit",
                }}
              >
                <img
                  src={userdata.userphoto}
                  alt={userdata.username}
                  title={userdata.username}
                  className="user__image"
                />
              </button>
              {open1 ? (
                <div className={classes.dropdown}>
                  <div className="user__avatar">
                    <Avatar className={classes.large}>
                      {userdata.username[0]}
                    </Avatar>
                  </div>
                  <div className="user__avatar__text">
                    <p>{userdata.username}</p>
                    <h6>{userdata.email}</h6>
                  </div>

                  <div className="Badge" style={{ margin: "20px 0px" }}>
                    <Button onClick={handleClickOpen} style={{border: 'none', outline: 'none'}}>
                      <Badge badgeContent={basket?.length} {...defaultProps} />
                      View Favourite Adds
                    </Button>
                    <Dialog
                      fullScreen
                      open={openFull}
                      onClose={handleCloseFull}
                      TransitionComponent={Transition}
                    >
                      <AppBar className={classes.appBar}>
                        <Toolbar>
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseFull}
                            aria-label="close"
                          >
                            <CloseIcon />
                          </IconButton>
                          <Typography variant="h6" className={classes.title}>
                            Favourite Adds
                          </Typography>
                          <Button
                            autoFocus
                            color="inherit"
                            onClick={handleCloseFull}
                          >
                            save
                          </Button>
                        </Toolbar>
                      </AppBar>
                      <List>
                        {basket?.map((current)=>{
                         return <>
                          <ListItem button component = {Link} to = {`/add/${current.id}`}>
                          <ListItemText
                            primary={current.title}
                            secondary={`$ ${current.price}`}
                            
                          />
                          </ListItem>
                          <Divider />
                        </>
                        })}
                        
                        
                        
                      </List>
                    </Dialog>
                  </div>
                  <div>
                    <Button variant="contained" onClick={logout}>
                      Sign Out from Olx
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </ClickAwayListener>
        )}

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
              <h2 id="transition-modal-title" style={{ marginBottom: "80px" }}>
                OLX Sign In
              </h2>
              <Button
                variant="contained"
                onClick={loginfb}
                color="primary"
                className={classes.button}
                startIcon={<FacebookIcon />}
              >
                Sign In With Facebook
              </Button>
              <Button
                variant="contained"
                onClick={logingoogle}
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
