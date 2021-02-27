import React from 'react';
import { connect } from "react-redux";
import { clearSearchAction, getSearchDataAction } from '../actions'

class SeachBar extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        }
    }

    onChange = (event) => {
        let searchString = event.target.value;
        // searchValue = searchValue.trim();
        this.setState({ searchValue: searchString });
        this.timer = setTimeout(() => {
			this.props.getSearchDataAction(searchString);
		}, 2000);
    }

    onResetSearch = () => {
        this.setState({ searchValue: '' })
        this.props.clearSearchAction()
    }

    render() {
        return (
            <div className='search-container'>
                <label name='label'>Search</label>
                <input
                    type='text' 
                    name='searchBox' 
                    placeholder='Type here to search'
                    value={this.state.searchValue}
                    onChange={this.onChange} 
                    >    
                </input>
                <button className='search-remove' onClick={this.onResetSearch}>Reset</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, { getSearchDataAction, clearSearchAction })(SeachBar);
  
