import './MemberPage.css';

import {FormGroup, FormControl} from 'react-bootstrap';
import React from 'react';

class SearchBar extends React.Component {
  /* Filters the list based on the search input */
  filterSearch(event) {
    /* Sets the list to the filtered list of brothers */
    let updatedList = this.state.filteredBrothers;

    /* Sets the displayed list to all actives whose names begin with the input value */
    updatedList = updatedList.filter(function(brother){
      return brother.name.toLowerCase().startsWith(
        event.target.value.toLowerCase()) !== false;
    });

    this.setState({
      searchValue: event.target.value,
      updatedBrothers: updatedList,
    });
  }
  
  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={this.props.searchValue}
            onChange={this.filterSearch}
           />
        </FormGroup>
      </form>
    )
  }
}

export {SearchBar};