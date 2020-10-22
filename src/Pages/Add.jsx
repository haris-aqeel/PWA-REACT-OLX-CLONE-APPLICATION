import React, {useEffect, useState}  from 'react'
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import Data from '../Services/Data';
import DisplayAdd from '../Components/Widgets/DisplayAdd'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import firebase from 'firebase'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '90vh',
      marginTop: theme.spacing(8),
      '& > * + *': {
        marginTop: theme.spacing(8),
        
      },
    },
  }));
  
const Add = () => {
    const [data, setData] = useState([])
    const classes = useStyles();
    const link = window.location.href;
    const addNumber = +link.split('/add/')[1]

    useEffect(()=>{

        let collectData = async() => {
        let data = await Data();
        setData(data)
        }

      collectData()
    },[])

    return (
        <div>
            <Header />
           
            <Navbar />
            {data?.length > 0?
            <DisplayAdd 
            id={data[addNumber].id}
            title={data[addNumber].title}
            price={data[addNumber].price}
            description = {data[addNumber].description}
            category={data[addNumber].category}
            image = {data[addNumber].image}
            />
            : 
            <div className={classes.root}>
                 <LinearProgress />
            </div>
            }
            <Footer/>
        </div>
        
    )
}

export default Add
