import React, {useState} from "react";
import Header from "../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {writeUserData} from '../Components/Database/SumbitAdd.js'



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

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0.00);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");

 const handleFormSubmit = (e) => {
    e.preventDefault();
    writeUserData(title, price, description, category, image, name, number);
    alert('Your Add has been Successfully Submited')
 }





  return (
    <div>
      <Header />
      <div className="container">
        <div className={classes.root}>
        <h4 className='text-center'>Submit An Ad</h4>
        <p className='text-center'><b>OLX</b> Pakistan Largest Market Place</p>
          <Paper elevation={3}>
            <form onSubmit ={handleFormSubmit}>
                
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Add Title</label>
                <input
                  required
                  onChange={(e)=> {settitle(e.target.value)}}
                  value={title}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
                <small id="emailHelp" className="form-text text-muted">
                  This will be shown publically
                </small>
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Price</label>
                <input
                  required
                  onChange={(e)=> {setprice(e.target.value)}}
                  value={price}
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input
                  required
                  onChange={(e)=> {setname(e.target.value)}}
                  value={name}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Phone</label>
                <input
                  required
                  onChange={(e)=> {setnumber(e.target.value)}}
                  value={number}
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label htmlFor="exampleInputPassword1">Category</label>
                <select className="form-control" placeholder='Category' value={category}
                onChange={(e)=> setcategory(e.target.value)}>
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
                <label for="exampleFormControlTextarea1">Add Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required
                onChange={(e)=> {setdescription(e.target.value)}} value={description}></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Upload Photos</label>
                <input
                required
                onChange={(e)=> {setimage(e.target.value)}}
                value={image} 
                type="file" class="form-control-file" id="exampleFormControlFile1" />
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
