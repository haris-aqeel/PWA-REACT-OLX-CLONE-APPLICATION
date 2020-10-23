import React from "react";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import { useStateValue } from "../../GlobalState/ContextProvider";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { black, white } from '@material-ui/core/colors';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
const emails = [
  {text: 'WhatsApp', icon: <WhatsAppIcon/>},
  {text: 'Facebook',  icon: <FacebookIcon/>}, 
  {text: 'Linkeden',  icon: <LinkedInIcon/>}
  ];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#000',
    color: '#fff',
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Share on Social Media Platforms</DialogTitle>
      <List>
        {emails.map(({text, icon}) => (
          <ListItem button onClick={() => handleListItemClick(text)} key={text}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


const DisplayAdd = (props) => {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };



  const {
    id,
    title,
    price,
    description,
    category,
    image,
    name,
    time,
    number,
  } = props;
  const [{ basket }, dispatch] = useStateValue();

  const ToggleFavourite = (prop) => {
    basket.filter(({ id }) => {
      return +id === +prop.id;
    }).length === 0
      ? dispatch({
          type: "Add_To_Basket",
          item: prop,
        })
      : 
      dispatch({
        type: "Remove_From_Basket",
        item: prop,
      })
  };

  return (
    <div className="displayAdd">
      <div className="row">
        <div className="col col-lg-7 col-md-12 col-sm-12 col-12 ">
          <div
            id="carouselExampleControls"
            className="carousel slide main bg_set"
            data-ride="carousel"
          >
            <div
              className="carousel-inner "
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              <div
                className="carousel-item active"
                style={{ width: "70%", margin: "10%", backgroundColor: "#fff" }}
              >
                <img
                  className="d-block w-100"
                  src={image}
                  alt="First slide"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>

          <Paper elevation={3} style={{ margin: "100px 0" }} className="paper">
            <div style={{ marginTop: "20px" }}>
              <h1>Description</h1>
              <br />
              <hr />
              <p>{description}</p>
            </div>
          </Paper>
        </div>
        <div className="col col-lg-4 col-md-12 col-sm-12 col-12">
          <Paper elevation={3} className="paper">
            <div className="d-flex align-items-center justify-content-between">
              <h2 style={{ display: "inline" }}>Rs. {price * 100}</h2>
              <span>
                <IconButton style={{ margin: "0 4px", outline: 'none', border: 'none' }} onClick={()=>ToggleFavourite(props)} >
                  {basket.filter(({ id }) => {
                    return +id === +props.id;
                  }).length > 0 ? (
                    <FavoriteIcon style={{ border: "none", outline: "none" }} />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ border: "none", outline: "none" }}
                    />
                  )}
                </IconButton>
                <IconButton style={{ margin: "0 4px" , outline: 'none', border: 'none' }} onClick={handleClickOpen}>
                  <ShareIcon />
                </IconButton>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
              </span>
            </div>
            <div>
              <p className="text-secondary">{title}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between text-secondary">
              <span>
                <small>University Road, Karachi, Sindh</small>
              </span>
              <span>
                <small>{time !== undefined ? time : "Oct 12th 2019"}</small>
              </span>
            </div>
          </Paper>
          <Paper elevation={3} className="paper" style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "18px" }}>
              <h4 style={{ display: "inline", marginBottom: "18px" }}>
                Seller Description
              </h4>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <p style={{ display: "inline", marginRight: "10px" }}>
                <Avatar src="/broken-image.jpg" />
              </p>
              <p className="d-flex flex-column align-items-start justify-content-start">
                <span>{name !== undefined ? name : "Unknown"}</span>
                <span>
                  <small>Member since Feb 2019</small>
                </span>
              </p>
            </div>

            <div>
              <Button
                href={ `mailto:${emails}`}
                variant="contained"
                style={{
                  width: "100%",
                  backgroundColor: "#002f34",
                  color: "#fff",
                  border: "none",
                }}
              >
                Chat with Seller
              </Button>
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ marginTop: "20px" }}
            >
              <PhoneIcon />
              {number ? number : "+92334567782"}
            </div>
          </Paper>
          <div style={{ marginTop: "20px" }}>Add Id: 12572882829{id}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAdd;
