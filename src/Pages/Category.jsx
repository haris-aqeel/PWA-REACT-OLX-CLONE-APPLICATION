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
  // useEffect(() => {
    
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
            {mobile !== undefined && mobile.length > 0 ? (
              mobile.map((mobiles) => {
                return (
                  <DisplayCard2
                    title={mobiles.title}
                    img={mobiles.image}
                    description={mobiles.description}
                    price={mobiles.price}
                    category={mobiles.category}
                    number={mobiles.number}
                    name={mobiles.number}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>

          <TabPanel value={value} index={1}>
            {cars !== undefined && cars.length > 0 ? (
              <DisplayCard2
                title={cars.title}
                img={cars.image}
                description={cars.description}
                price={cars.price}
                category={cars.category}
                number={cars.number}
                name={cars.number}
              />
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {motorcycles !== undefined && tablets.length > 0 ? (
              motorcycles.map((motorcycle) => {
                return (
                  <DisplayCard2
                    title={motorcycle.title}
                    img={motorcycle.image}
                    description={motorcycle.description}
                    price={motorcycle.price}
                    category={motorcycle.category}
                    number={motorcycle.number}
                    name={motorcycle.number}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {tablets !== undefined && tablets.length > 0 ? (
              tablets.map((tablet) => {
                return (
                  <DisplayCard2
                    title={tablet.title}
                    img={tablet.image}
                    description={tablet.description}
                    price={tablet.price}
                    category={tablet.category}
                    number={tablet.number}
                    name={tablet.number}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>

          <TabPanel value={value} index={4}>
            {houses !== undefined && houses.length > 0 ? (
              houses.map((house) => {
                return (
                  <DisplayCard2
                    title={house.title}
                    img={house.image}
                    description={house.description}
                    price={house.price}
                    category={house.category}
                    number={house.number}
                    name={house.number}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={5}>
            {tv !== undefined && tv.length > 0 ? (
              tv.map((tvs) => {
                return (
                  <DisplayCard2
                    title={tvs.title}
                    img={tvs.image}
                    description={tvs.description}
                    price={tvs.price}
                    category={tvs.category}
                    number={tvs.number}
                    name={tvs.number}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={6}>
            {land !== undefined && land.length > 0 ? (
              land.map((lands) => {
                return (
                  <DisplayCard2
                    title={lands.title}
                    img={lands.image}
                    description={lands.description}
                    price={lands.price}
                    category={lands.category}
                    number={lands.number}
                    name={lands.number}
                  />
                );
              })
            ) : (
              
                <NotFoundImage />
              
            )}
          </TabPanel>
          <TabPanel value={value} index={7}>
            {database !== undefined && database.length > 0 ? (
              database.map((databases) => {
                return (
                  <DisplayCard2
                    title={databases.title}
                    img={databases.image}
                    description={databases.description}
                    price={databases.price}
                    category={databases.category}
                    number={databases.number}
                    name={databases.number}
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
