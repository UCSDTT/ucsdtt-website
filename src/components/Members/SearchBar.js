import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

class SearchBar extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.current.focus();
    }
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
      <Container>
        <FlexWrapper>
          <SearchInputContainer>
            <SearchInput
              ref={this.inputRef}
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={filterSearch}
              autoFocus
            />
          </SearchInputContainer>
          <Dropdown
            className="search-dropdown"
            value={firstSelected}
            options={options}
            clearable={false}
            onChange={filterDropdown}
            backspaceRemoves={false}
            searchable={false}
          />
          <Dropdown
            className="search-dropdown"
            value={secondSelected}
            options={specificOptions}
            clearable={false}
            disabled={specificDisabled}
            onChange={filterSpecific}
            backspaceRemoves={false}
            searchable={false}
          />
        </FlexWrapper>
      </Container>
    );
  }
}

export { SearchBar };

const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 85.3px;
  background-color: #fff;
  padding: 20px 0;
  margin: auto;
  border-bottom: 1px solid #ddd;
  z-index: 10;

  @media (min-width: 768px) {
    position: sticky;
    top: 85.3px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

const SearchInputContainer = styled.form`
  width: 33%;

  @media (max-width: 768px) {
    max-width: 500px;
    width: 80%;
    margin: 10px 0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 0.375rem 0.75rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid hsl(0, 0%, 70%);
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Dropdown = styled(Select)`
  width: 25%;
  font-size: 20px;
  font-weight: 700;
  text-align: left;

  @media (max-width: 768px) {
    min-width: 160px;
    width: 35%;
    margin: 10px;
  }
`;
