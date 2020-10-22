import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import TabletIcon from "@material-ui/icons/Tablet";
import HomeIcon from "@material-ui/icons/Home";
import TvIcon from "@material-ui/icons/Tv";
import LandscapeIcon from "@material-ui/icons/Landscape";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import DisplayCard2 from "../Components/Widgets/DisplayCard2";
import { NotFoundImage } from "./NotFound";
import {storage} from './Login'
import firebase from "firebase";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function Category() {
  
  const [database, setdatabase] = useState([]);
  const [mobile, setmobile] = useState([]);
  const [cars, setcars] = useState([]);
  const [motorcycles, setmotorcycles] = useState([]);
  const [houses, sethouses] = useState([]);
  const [tv, settv] = useState([]);
  const [land, setland] = useState([]);
  const [tablets, settablets] = useState([]);
  
    
    const takeData = () => {

      let firebaseRef = firebase.database().ref("users");
      firebaseRef.on("child_added", (snapshot) => {
        
        const { category } = snapshot.val();        
        switch (category) {
          case "mobile":
            setmobile([...mobile, snapshot.val()]);
            break;
          case "cars":
            setcars([...cars, snapshot.val()]);
            break;
          case "motorcycles":
            setmotorcycles([...motorcycles, snapshot.val()]);
            break;
          case "tablets":
            settablets([...tablets, snapshot.val()]);
            break;
          case "houses":
            sethouses([...houses, snapshot.val()]);
            break;
          case "tv":
            settv([...tv, snapshot.val()]);
            break;
          case "land":
            setland([...land, snapshot.val()]);
            break;
          default:
            break;
        }

        setdatabase([...database, snapshot.val()]);
        

      });
    };
    
  useEffect(() => {
    takeData();
  }, []);

  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <div className="Categories">
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="Mobile Phones"
                icon={<PhoneAndroidIcon />}
                {...a11yProps(0)}
              />
              <Tab label="Cars" icon={<DriveEtaIcon />} {...a11yProps(1)} />
              <Tab
                label="Motorcycles"
                icon={<MotorcycleIcon />}
                {...a11yProps(2)}
              />
              <Tab label="Tablets" icon={<TabletIcon />} {...a11yProps(4)} />
              <Tab label="Houses" icon={<HomeIcon />} {...a11yProps(5)} />
              <Tab label="TV-Audio-Video" icon={<TvIcon />} {...a11yProps(6)} />
              <Tab
                label="Land and Plots"
                icon={<LandscapeIcon />}
                {...a11yProps(7)}
              />
              <Tab
                label="All Items"
                icon={<DonutLargeIcon />}
                {...a11yProps(8)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            {mobile?.length > 0 ? (
              mobile.map((mobiles) => {
                return (
                  <DisplayCard2
                    id={mobiles.id}
                    title={mobiles.title}
                    img={mobiles.image}
                    description={mobiles.description}
                    price={mobiles.price}
                    category={mobiles.category}
                    number={mobiles.number}
                    name={mobiles.number}
                    email = {mobiles.email}
                    location = {mobiles.location}

                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>

          <TabPanel value={value} index={1}>
            {cars?.length > 0 ? (
              cars.map((car)=>{
              return <DisplayCard2
                id={car.id}
                title={car.title}
                img={car.image}
                description={car.description}
                price={car.price}
                category={car.category}
                number={car.number}
                name={car.number}
                email = {car.email}
                location = {car.location}
              />
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {tablets?.length > 0 ? (
              motorcycles.map((motorcycle) => {
                return (
                  <DisplayCard2
                    id={motorcycle.id}
                    title={motorcycle.title}
                    img={motorcycle.image}
                    description={motorcycle.description}
                    price={motorcycle.price}
                    category={motorcycle.category}
                    number={motorcycle.number}
                    name={motorcycle.number}
                    email = {motorcycle.email}
                    location = {motorcycle.location} 
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {tablets?.length > 0 ? (
              tablets.map((tablet) => {
                return (
                  <DisplayCard2
                    id={tablet.id}
                    title={tablet.title}
                    img={tablet.image}
                    description={tablet.description}
                    price={tablet.price}
                    category={tablet.category}
                    number={tablet.number}
                    name={tablet.number}
                    email = {tablet.email}
                    location = {tablet.location}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>

          <TabPanel value={value} index={4}>
            {houses?.length > 0 ? (
              houses.map((house) => {
                return (
                  <DisplayCard2
                    id={house.id}
                    title={house.title}
                    img={house.image}
                    description={house.description}
                    price={house.price}
                    category={house.category}
                    number={house.number}
                    name={house.number}
                    email = {house.email}
                    location = {house.location}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={5}>
            {tv?.length > 0 ? (
              tv.map((tvs) => {
                return (
                  <DisplayCard2
                    id={tvs.id}
                    title={tvs.title}
                    img={tvs.image}
                    description={tvs.description}
                    price={tvs.price}
                    category={tvs.category}
                    number={tvs.number}
                    name={tvs.number}
                    email = {tvs.email}
                    location = {tvs.location}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={6}>
            {land?.length > 0 ? (
              land.map((lands) => {
                return (
                  <DisplayCard2
                    id={lands.id}
                    title={lands.title}
                    img={lands.image}
                    description={lands.description}
                    price={lands.price}
                    category={lands.category}
                    number={lands.number}
                    name={lands.number}
                    email = {lands.email}
                    location = {lands.location}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={7}>
            {database?.length > 0 ? (
              
              database.map((databases) => {
                return (
                  <DisplayCard2
                    id={databases.id}
                    title={databases.title}
                    img={databases.image}
                    description={databases.description}
                    price={databases.price}
                    category={databases.category}
                    number={databases.number}
                    name={databases.number}
                    email = {databases.email}
                    location = {databases.location}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default Category;
