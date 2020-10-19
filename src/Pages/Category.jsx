import React from "react";
import Header from "../Components/Header";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import TabletIcon from '@material-ui/icons/Tablet';
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import LandscapeIcon from '@material-ui/icons/Landscape';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

import {FetchData} from '../Components/Database/FetchData'

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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <div className='Categories'>
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
              <Tab label="Mobile Phones" icon={<PhoneAndroidIcon />} {...a11yProps(0)} />
              <Tab label="Cars" icon={<DriveEtaIcon />} {...a11yProps(1)} />
              <Tab
                label="Motorcycles"
                icon={<MotorcycleIcon />}
                {...a11yProps(2)}
              />

              <Tab
                label="Tablets"
                icon={<TabletIcon />}
                {...a11yProps(4)}
              />
              <Tab label="Houses" icon={<HomeIcon />} {...a11yProps(5)} />
              <Tab label="TV-Audio-Video" icon={<TvIcon />} {...a11yProps(6)} />
              <Tab label="Land and Plots" icon={<LandscapeIcon />} {...a11yProps(7)} />
              <Tab label="All Items" icon={<DonutLargeIcon />} {...a11yProps(8)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} >
            =<button onClick={FetchData}>Click to Get Data</button>
          </TabPanel>
          <TabPanel value={value} index={1} >
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={7}>
            Item Eight
          </TabPanel>
    
        </div>
      </div>
    </div>
  );
}

export default Category;
