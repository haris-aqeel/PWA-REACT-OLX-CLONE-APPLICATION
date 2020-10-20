import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DetailsIcon from '@material-ui/icons/Details';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'inline-block',
    margin: '20px 10px',
    textAlign: 'left'
  },
  media: {
    height: 140,
  },
});

const DisplayCard2 = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
            height="100px"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description.length  > 110 ? props.description.slice(0,110)+ '....': props.description}
          </Typography>
          </CardContent>
          </CardActionArea>
         <CardActions>
          <IconButton aria-label="add to favorites" style={{border: 'none', outline: 'none'}}>
            <FavoriteBorderIcon  style={{border: 'none', outline: 'none'}}/>
          </IconButton>
          <IconButton aria-label="add to favorites" style={{border: 'none', outline: 'none'}}>
            <DetailsIcon  style={{border: 'none', outline: 'none'}}/>
          </IconButton>
         </CardActions>
      </Card>
    )
}

export default DisplayCard2;
