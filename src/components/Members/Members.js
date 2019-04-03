import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
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

    /* Makes the first brothers header image visible */
    image[0].classList.add('selected');

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
      alumni: alumni,
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
      image,
      imageIndex,
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

    if (image) {
      /* Removes visibility of the old brothers header image */
      image[imageIndex].classList.remove('selected');
      /* Makes the new brothers header image visible */
      image[newImage].classList.add('selected');
    }

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
    const { image, imageIndex, dropdownValue, allBrothers } = this.state;
    let updatedList = brothers;

    /* Sets the new brothers header image */
    const newImage = images.findIndex(function(currentImage) {
      const { name } = currentImage;
      const { value } = selected;
      return (name.toLowerCase() === value.toLowerCase()) !== false;
    });

    if (image) {
      /* Removes visibility of the old brothers header image */
      image[imageIndex].classList.remove('selected');
      /* Makes the new brothers header image visible */
      image[newImage].classList.add('selected');
    }

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
        <div className="brothers-header">
          <a className="brothers-logo" role="button" href="/">
            <img
              className="logo"
              src={isChrome ? logoWebp : logoPng}
              alt="Logo"
            />
          </a>
          {specificLabel || 'Our Brothers'}
        </div>
        <div className="brothers-image-container">
          {images.map((image, i) => (
            <img
              className="brothers-image"
              src={isChrome ? image.webp : image.jpg}
              alt="Brothers"
              key={i}
            />
          ))}
        </div>
        <div className="scroll-down" />
        <div id="members" className="scrolling-grid">
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
          <Container className="brothers-grid">
            <Row className="brother-container">
              <BrothersList
                majorOptions={majorOptions}
                classOptions={classOptions}
                dropdownValue={dropdownValue}
                specificValue={specificValue}
                updatedBrothers={updatedBrothers}
                open={this.open}
              />
            </Row>
          </Container>
        </div>
        { this.brotherModal }
      </div>
    );
  }
}
