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
import {useStateValue} from '../../GlobalState/ContextProvider' 
import FavoriteIcon from '@material-ui/icons/Favorite';
import {storage} from '../../Pages/Login'
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 260,
    display: 'inline-block',
    margin: '20px 10px',
    textAlign: 'left'
  },
  media: {
    textAlign: 'center',


  },
  price: {
    fontSize: '25px',
    textAlign: 'left',
    fontWeight: '700'
  },
  title: {
    fontSize: '14px',
    textAlign: 'left',
    fontWeight: '500',
    height: '20px',
    overflow: 'hidden'
  },
  desc: {
    fontSize: '14px',
    textAlign: 'left',
    fontWeight: '400',
    height: '22px',
    overflow: 'hidden'
  }
});

const DisplayCard2 = (props) => {

    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    const ToggleFavourite = (prop) => {
      (basket.filter(({id})=> {
        return +id === +props.id
      } 
        )).length === 0 ? 
      dispatch({
        type: 'Add_To_Basket',
        item: prop
      }): 
      dispatch({
        type: "Remove_From_Basket",
        item: prop,
      })
    }
    console.log(props.id)

    return (
        <Card className={classes.root}>

          <CardActions >
          <IconButton aria-label="add to favorites" style={{border: 'none', outline: 'none'}} onClick={()=>ToggleFavourite(props)}>
          {(basket.filter(({id})=> {
            return +id === +props.id
          }
            )).length > 0 ? <FavoriteIcon  style={{border: 'none', outline: 'none'}}/>
          : <FavoriteBorderIcon  style={{border: 'none', outline: 'none'}}/>
        }
              
          </IconButton>
          <IconButton aria-label="add to favorites" style={{border: 'none', outline: 'none'}}>
            <DetailsIcon  style={{border: 'none', outline: 'none'}}/>
          </IconButton>
         </CardActions>
          <CardActionArea component={Link} to={`/add_users/${props.id.toString()}`}  style={{textDecoration: 'none', color: 'black'}}>
          <CardMedia
            className={classes.media}
          >
          <img 
          src={`https://firebasestorage.googleapis.com/v0/b/pwa-olx-clone-application.appspot.com/o/${props.id.toString()}?alt=media&token=4dede770-68f6-4c7e-879f-da97e126463a`}
          alt={props.title}
          className='img'
          style ={{width: '280px', height: '200px', minWidth: '100px'}}
          />
          </CardMedia>
          <CardContent>
          <Typography gutterBottom variant="p" component="p" className={classes.price}>
            Rs. {props.price}
          </Typography>
          <Typography gutterBottom variant="p" component="p" className={classes.title}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {props.description+ '....'}
          </Typography>
          </CardContent>
          </CardActionArea>
         
      </Card>
    )
}

export default DisplayCard2
