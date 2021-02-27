import React from 'react';
import { connect } from "react-redux";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { storeAPIData, setChartData } from '../actions'
import Comparison from './Comparison'
import Card from './Card'
import SearchBar from './SearchBar'

// As using another API, There are no multiple API's. So on every nav bar item, getting different pages API data by using this mapping
const mapping = {
  '/planets': 1,
  '/species': 2,
  '/people': 3,
  '/starship': 4,
  '/vehicle': 5
}

// Implemented Tab section by using material UI. So installed package and used required component from material UI
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  // getting data from api and storing to redux
  componentDidMount() {
    const pageNumber = mapping[this.props.location.pathname] || 1
    const promise = fetch(`https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`)
    promise.then(response => response.json())
    .then(pageDetails => {
      this.props.storeAPIData(pageDetails.data)
      this.props.setChartData(pageDetails.data)
    })
  }

  handleChange = (newValue) => {
    this.setState({ value: newValue})
  }

  handleChangeIndex = (index) => {
    this.setState({value: index})
  }

    render() {
        return (
          <div className='app-bar main-container'>
      <AppBar position="static" color="default" className='app-bar-2' >
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Summary" />
          <Tab label="Comparison"  />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={this.state.value}
        onChangeIndex={this.handleChangeIndex}
      >
        <TabPanel value={this.state.value} index={0} >
          <div className='card-holder'>
            <div className='searchbar-container'>
            <SearchBar/>
            </div>
        {
          this.props.items && this.props.items.length
          ? this.props.items.map((country) => <Card key={country.alpha2Code} countryDetails={country} />)
          : <div> No results found</div>
        }
        </div>
        </TabPanel>
        <TabPanel value={this.state.value} index={1} >
        {this.props.chartItems && this.props.chartItems.length && <Comparison chartItems={this.props.chartItems} />}
        </TabPanel>
        
      </SwipeableViews>
    </div>
        )
    }
}

const mapDispatchToProps = {
  storeAPIData,
  setChartData
}

const mapStateToProps = (state) => {
  return {
    items: state.itemsState.items,
    chartItems: state.chartItemsState.chartItems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
