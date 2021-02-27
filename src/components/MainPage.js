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

  handleChange = (event, newValue) => {
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
          <Tab label="Item One" />
          <Tab label="Item Two"  />
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


/**
 * While using given API I am getting cors error.  Tried to add header and mode. But no luck. 
 * Because of that, I have implemented with some other API (https://jsonmock.hackerrank.com/api/countries?page=1)
 * From this API we can get countries list.
 * 
 * I have named given excercise name as sample-project. I am mentioning this as a practice project 
 * (I don't want to let my teammates know this as a interview task)
 * 
 * Technologies Used: 
 * React
 * Redux
 * Router
 * HTML
 * CSS
 * Fluent UI - Charting package
 * 
 * 
 * Plan - Learning practice project
 * 1. Created a project
 * 2. Implemented router (added <NavLink/> routes to the navbar clicks)
 * 3. Implemented Redux
 * 4. While changing routes, fetching above mentioned API, storing the data in Redux store and getting data from store to implement UI
 * 5. Here, As I don't have multiple API's to his on different navlinks, I had taken same API with different pages and diferent data.
 * 6. In Summary Page, Based on data, shown every single country details on individual card.
 * 7. Given 'delete' option on card, by clicking on this, that card will be deleted from store and UI.
 * Note: Refreshing the page will add that card again, as I am not changing any API data. Just managing store.
 * 8. Implemented searchBox
 * a. TODO: Need to implement as like github search (Now not implemented)
 * b. Search will work when we hit enter button only (Triggering the search only on enter)
 * c. It will only search county name - full name search only.
 * 9. Comparison Tab
 * a. TODO: Need to implement a dropdown to select 
 * b. TODO: Implementation of chart - Radar chart
 * c. Instead of radar chart - implemented Vertical bar chart for countries list
 * d. Vertical bar chart imported from - fluentUI charting (Currently working on this open source package).
 * 10. Used material UI to implement Tab section
 * 11. Used Flexbox and tried best to make app responsive
 * 11. Added some random styles copied from google.
 * 
 * 
 * Future developement Plan:
 * 1. Implementing test cases
 * 2. Implementing with hooks
 * 
 */
