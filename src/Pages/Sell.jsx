import React, {useState} from "react";
import Header from "../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {writeUserData} from '../Components/Database/SumbitAdd.js'
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "auto",
      padding: '20px 30px'
    },
  },
}));

const Sell = () => {
  const classes = useStyles();
  const history = useHistory();

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0.00);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
 const handleFormSubmit = (e) => {
    e.preventDefault();
    writeUserData(title, price, description, category, image, name, number, email, location);
    alert('Your Add has been Successfully Submited');
    history.push('/')
    
 }





  return (
    <div>
      <Header />
      <div className="container">
        <div className={classes.root}>
        <h4 className='text-center'>Submit An Ad</h4>
        <p className='text-center'><b>OLX</b> Pakistan Largest Market Place</p>
          <Paper elevation={3}>
            <form onSubmit ={handleFormSubmit} autoComplete="off">
                
              <div className="form-group">
                <label htmlFor="title">Add Title</label>
                <input
                  required
                  onChange={(e)=> {settitle(e.target.value)}}
                  value={title}
                  type="text"
                  className="form-control"
                  id="title"
                  min-length = "6"
                  max-length="13"
                />
                <small id="titleHelp" className="form-text text-muted">
                  This will be shown publically
                </small>
              </div>
              
              <div className="form-group">
                <label htmlFor="Price">Price</label>
                <input
                  required
                  onChange={(e)=> {setprice(e.target.value)}}
                  value={price}
                  type="number"
                  className="form-control"
                  id="Price"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  required
                  onChange={(e)=> {setname(e.target.value)}}
                  value={name}
                  type="text"
                  className="form-control"
                  id="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">E-mail</label>
                <input
                  required
                  onChange={(e)=> {setemail(e.target.value)}}
                  value={email}
                  type="text"
                  className="form-control"
                  id="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Phone</label>
                <input
                  required
                  onChange={(e)=> {setnumber(e.target.value)}}
                  value={number}
                  type="number"
                  className="form-control"
                  id="contactNumber"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Phone</label>
                <input
                  required
                  onChange={(e)=> {setlocation(e.target.value)}}
                  value={location}
                  type="text"
                  className="form-control"
                  id="location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Category">Category</label>
                <select className="form-control" placeholder='Category'  onChange={(e) => setcategory(e.target.value)}>
                    <option value='mobile'>Mobile Phones</option>
                    <option value='cars'>Cars</option>
                    <option value='motorcycles'>Motorcycles</option>
                    <option value='tablets'>Tablets</option>
                    <option value='houses'>Houses</option>
                    <option value='tv'>TV-Audio-Video</option>
                    <option value='land'>Land and Plots</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Description">Add Description</label>
                <textarea className="form-control" id="Description" rows="3" required
                onChange={(e)=> {setdescription(e.target.value)}} value={description}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="UploadPhotos">Upload Photos</label>
                <input
                required
                onChange={(e)=> {setimage(e.target.files)}}
                value={image} 
                type="file" className="form-control-file" id="UploadPhotos" />
              </div>

              <div className="form-group form-check">
                <input
                  required
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
            <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Sell;
