import './MemberPage.css';

import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';

class SearchBar extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const input = document.querySelector('.search-input');
    input.focus();
  }

  render() {
    const {
      searchValue,
      filterSearch,
      firstSelected,
      options,
      filterDropdown,
      secondSelected,
      specificOptions,
      specificDisabled,
      filterSpecific
    } = this.props;

    return (
      <div className="search-bar-container">
        <div className="search-bar-flex">
          <form className="search-input-container">
            <FormGroup controlId="formBasicText">
              <FormControl
                className="search-input"
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={filterSearch}
                autoFocus
              />
            </FormGroup>
          </form>
          <h3> Filters: </h3>
          <Select
            className="search-dropdown"
            value={firstSelected}
            options={options}
            clearable={false}
            onChange={filterDropdown}
            backspaceRemoves={false}
            searchable={false}
          />
          <Select
            className="search-dropdown"
            value={secondSelected}
            options={specificOptions}
            clearable={false}
            disabled={specificDisabled}
            onChange={filterSpecific}
            backspaceRemoves={false}
            searchable={false}
          />
        </div>
      </div>
    );
  }
}

export { SearchBar };
