import React, {useState, useEffect}  from 'react'
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

const UserAdds = () => {

    const [id, setid] = useState('....')
    const [title, settitle] = useState('....')
    const [price, setprice] = useState('....')
    const [description, setdescription] = useState('....')
    const [category, setcategory] = useState('....')
    const [location, setlocation] = useState('....')
    const [email, setemail] = useState('....')
    const [name, setname] = useState('....')
    const [number, setnumber] = useState('....')
    
    const [count, setcount] = useState(0)
    const classes = useStyles();
    const link = window.location.href;
    const addNumber = link.split('/add_users/')[1]



    const takeData = () => {

    let firebaseRef = firebase.database().ref("users");  
    firebaseRef.once("value", (snapshot) => {
      
    const {id, title, price, description, category, location, email, name, number} =snapshot.val()[addNumber]
      
    setid(id)
    settitle(title)
    setlocation(location)
    setprice(price)
    setdescription(description)
    setcategory(category)
    setemail(email)
    setnumber(number)
    setname(name)      
   
    })


    
  
    }
    
    

    useEffect(() => {
       
      takeData();  
    }, [])
 
    return (
        <div>
        <Header />
       
        <Navbar />
      
        <DisplayAdd 
        id={id}
        title={title}
        price={price}
        description = {description}
        category={category}
        location = {location}
        email = {email}
        name={name}
        number={number}
        image = {`https://firebasestorage.googleapis.com/v0/b/pwa-olx-clone-application.appspot.com/o/${id.toString()}?alt=media&token=4dede770-68f6-4c7e-879f-da97e126463a`}


        />  
       
      
        <Footer/>
    </div>
    )
}

export default UserAdds
  