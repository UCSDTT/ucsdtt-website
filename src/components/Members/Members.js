import React, { Component } from 'react';
import styled from 'styled-components';
import { isChrome, sort } from '../../shared/helpers.js';
import { brothers, images, options } from '../../activeData/data.js';
import { BrotherModal } from './BrotherModal.js';
import { BrothersList } from './BrothersList.js';
import './Members.css';
import { SearchBar } from './SearchBar.js';

export default class Members extends Component {
  state = {
    image: null,
    imageIndex: 0,
    searchValue: '',
    brothers: [],
    alumni: [],
    allBrothers: [],
    updatedBrothers: [],
    filteredBrothers: [],
    dropdownValue: 'active',
    firstSelected: { value: 'active', label: 'Active' },
    secondSelected: '',
    options: options.general,
    specificValue: '',
    specificLabel: '',
    specificOptions: options.active,
    activeOptions: options.active,
    majorOptions: options.major,
    classOptions: options.class,
    specificDisabled: false,
    showModal: false,
    selectedBrother: null,
    showList: false
  };

  /* Runs when component mounts */
  componentDidMount() {
    const image = document.getElementsByClassName('brothers-image');
    let actives = [];
    let eboard = [];
    let cabinet = [];
    let alumni = [];
    let allBrothers = [];

    brothers.forEach(brother => {
      if (brother.eboard) {
        eboard.push(brother);
      } else if (brother.cabinet) {
        cabinet.push(brother);
      } else if (brother.position === 'Alumni') {
        alumni.push(brother);
      } else {
        actives.push(brother);
      }
      allBrothers.push(brother);
    });

    sort(cabinet);

    const members = eboard.concat(cabinet).concat(actives);

    this.setState({
      image,
      brothers: members,
      alumni,
      allBrothers: allBrothers,
      updatedBrothers: members,
      filteredBrothers: members
    });
  }

  get brotherModal() {
    const brother = this.state.selectedBrother || {}
    return (
      <BrotherModal
        show={this.state.showModal}
        close={this.close}
        brother={brother}
      />
    )
  }

  /* Closes the modal */
  close = () => this.setState({ showModal: false });

  /* Opens the modal */
  open = brother => {
    this.setState({
      showModal: true,
      selectedBrother: brother
    });
  };

  /* Filters the list based on the search input */
  filterSearch = event => {
    /* Sets the list to the filtered list of brothers */
    const searchValue = event.target.value;
    let updatedBrothers = this.state.filteredBrothers;

    /* Sets the displayed list to all actives whose names begin with the input value */
    updatedBrothers = updatedBrothers.filter(function(brother) {
      return brother.name.toLowerCase().startsWith(event.target.value.toLowerCase()) !== false;
    });

    this.setState({ searchValue, updatedBrothers });
  };

  /* Filters the first dropdown based on the selected value */
  filterDropdown = selected => {
    const {
      brothers,
      allBrothers,
      alumni,
      activeOptions,
      majorOptions,
      classOptions
    } = this.state;
    let updatedList = brothers;
    let options;
    let disabled = false;

    /* Sets the new brothers header image */
    const newImage = images.findIndex(function(currentImage) {
      const { name } = currentImage;
      const { value } = selected;
      return (name.toLowerCase() === value.toLowerCase()) !== false;
    });

    /* Sets the specific dropdown options based on the first selected dropdown value */
    switch (selected.value) {
      case 'active':
        updatedList = brothers.slice();
        options = activeOptions;
        break;
      case 'major':
        //should be actives only
        updatedList = brothers.slice();
        sort(updatedList);
        options = majorOptions;
        break;
      case 'class':
        // Sets brothers list to consist of actives and alumni
        updatedList = allBrothers.slice();
        options = classOptions;
        break;
      case 'alumni':
        // Sets brothers list to consist of only alumni
        updatedList = alumni.slice();
        disabled = true;
        break;
      default:
        //Shows all brothers actives and alumni
        updatedList = allBrothers.slice();
        sort(updatedList);
        disabled = true;
    }

    this.setState({
      imageIndex: newImage,
      searchValue: '',
      dropdownValue: selected.value,
      updatedBrothers: updatedList,
      filteredBrothers: updatedList,
      specificValue: null,
      specificLabel: null,
      specificOptions: options,
      specificDisabled: disabled,
      firstSelected: selected,
      secondSelected: ''
    });
  };

  /* Filters the specific dropdown based on the selected value */
  filterSpecific = selected => {
    const { dropdownValue, allBrothers } = this.state;
    let updatedList = brothers;

    /* Sets the new brothers header image */
    const newImage = images.findIndex(function(currentImage) {
      const { name } = currentImage;
      const { value } = selected;
      return (name.toLowerCase() === value.toLowerCase()) !== false;
    });

    switch (dropdownValue) {
      /* Filters the brothers list based on eboard or cabinet */
      case 'active':
        updatedList = updatedList.filter(function(brother) {
          return brother[selected.value.toLowerCase()] === true;
        });
        break;
      case 'major':
        /* Filters brothers list based on selected major */
        updatedList = updatedList.filter(function(brother) {
          const { major } = brother;
          const { value } = selected;
          return (major.toLowerCase() === value.toLowerCase()) !== false;
        });
        break;
      default:
        /* Filters brothers list based on class */
        updatedList = allBrothers;
        updatedList = updatedList.filter(function(brother) {
          const { class: className } = brother;
          const { value } = selected;
          return (className.toLowerCase() === value.toLowerCase()) !== false;
        });
    }

    this.setState({
      imageIndex: newImage,
      searchValue: '',
      updatedBrothers: updatedList,
      filteredBrothers: updatedList,
      specificValue: selected.value,
      specificLabel: selected.label,
      secondSelected: selected
    });
  };

  render() {
    const {
      imageIndex,
      specificLabel,
      searchValue,
      options,
      firstSelected,
      secondSelected,
      specificOptions,
      specificDisabled,
      majorOptions,
      classOptions,
      dropdownValue,
      specificValue,
      updatedBrothers
    } = this.state;
    const logoWebp = require('../../shared/logo.webp');
    const logoPng = require('../../shared/logo.png');
    return (
      <div>
        <BrothersHeader>
          <LogoAnchor role="button" href="/">
            <img
              className="logo"
              src={isChrome ? logoWebp : logoPng}
              alt="Logo"
            />
          </LogoAnchor>
          {specificLabel || 'Our Brothers'}
        </BrothersHeader>
        <MainImageContainer>
          {images.map((image, i) => (
            <MainImage
              src={isChrome ? image.webp : image.jpg}
              alt="Brothers"
              selected={imageIndex === i}
              key={i}
            />
          ))}
        </MainImageContainer>
        <ScrollDown />
        <ScrollingGrid>
          <SearchBar
            searchValue={searchValue}
            firstSelected={firstSelected}
            options={options}
            secondSelected={secondSelected}
            specificOptions={specificOptions}
            specificDisabled={specificDisabled}
            filterSearch={this.filterSearch}
            filterDropdown={this.filterDropdown}
            filterSpecific={this.filterSpecific}
          />
          <BrothersList
            majorOptions={majorOptions}
            classOptions={classOptions}
            dropdownValue={dropdownValue}
            specificValue={specificValue}
            updatedBrothers={updatedBrothers}
            open={this.open}
          />
        </ScrollingGrid>
        { this.brotherModal }
      </div>
    );
  }
}

const BrothersHeader = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(46, 47, 51, 1);
  color: #fff;
  font-size: 45px;
  padding: 10px 0;
  text-align: initial;
  font-family: 'Helvetica Neue Condensed' !important;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 25px;
    padding: 5px 0;
  }
`;

const LogoAnchor = styled.a`
  margin: 0 25px;
`;

const MainImageContainer = styled.div`
  position: relative;
  background-color: #000;
  height: 100vh;
  min-height: 100vh;
  z-index: -1;

  @media (max-width: 992px) {
    height: calc(100vh - 199px);
  }
`;

const MainImage = styled.img`
  display: block;
  position: fixed;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  z-index: -1;

  ${props => props.selected && `
    opacity: 1;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    filter: alpha(opacity=1);
  `}
`;

const ScrollDown = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 40px;
  display: block;
  text-decoration: none;
  width: 30px;
  height: 30px;
  border-bottom: 4px solid #fff;
  border-right: 4px solid #fff;
  z-index: 1;
  transform: translate(-50%, 0%) rotate(45deg);
  animation: fadeMoveDown 4s ease-in-out infinite;

  /*animated scroll arrow animation*/
  @-webkit-keyframes fadeMoveDown {
    0% {
      -webkit-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @-moz-keyframes fadeMoveDown {
    0% {
      -moz-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes fadeMoveDown {
    0% {
      transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
`;

const ScrollingGrid = styled.div`
  background-color: #fff;
  position: relative;
  height: 100%;
  min-height: 100%;
  width: 100%;
  z-index: 1;
`;
