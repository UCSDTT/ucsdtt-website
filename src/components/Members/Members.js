import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { isChrome, sort } from '../../shared/helpers.js';
import { brothers, images, options } from '../../activeData/data.js';
import { BrotherModal } from './BrotherModal.js';
import { BrothersList } from './BrothersList.js';
import './Members.css';
import { SearchBar } from './SearchBar.js';

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
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
      brotherModal: {},
      showList: false
    };
  }

  /* Runs when component mounts */
  componentDidMount() {
    let actives = [];
    let eboard = [];
    let cabinet = [];
    let alumni = [];
    let allBrothers = [];
    let image = document.getElementsByClassName('brothers-image');

    /* Makes the first brothers header image visible */
    image[0].classList.add('selected');

    brothers.forEach(brother => {
      if (brother.eboard === true) {
        eboard.push(brother);
      } else if (brother.cabinet === true) {
        cabinet.push(brother);
      } else if (brother.position === 'Alumni') {
        alumni.push(brother);
      } else {
        actives.push(brother);
      }
      allBrothers.push(brother);
    });

    sort(cabinet);

    let members = eboard.concat(cabinet).concat(actives);

    this.setState({
      image: image,
      brothers: members,
      alumni: alumni,
      allBrothers: allBrothers,
      updatedBrothers: members,
      filteredBrothers: members
    });
  }

  /* Closes the modal */
  close = () => {
    this.setState({
      showModal: false
    });
  };

  /* Opens the modal */
  open = brother => {
    this.setState({
      showModal: true,
      brotherModal: brother
    });
  };

  /* Filters the list based on the search input */
  filterSearch = event => {
    /* Sets the list to the filtered list of brothers */
    let updatedList = this.state.filteredBrothers;

    /* Sets the displayed list to all actives whose names begin with the input value */
    updatedList = updatedList.filter(function(brother) {
      return brother.name.toLowerCase().startsWith(event.target.value.toLowerCase()) !== false;
    });

    this.setState({
      searchValue: event.target.value,
      updatedBrothers: updatedList
    });
  };

  /* Filters the first dropdown based on the selected value */
  filterDropdown = selected => {
    let updatedList = brothers;
    let options;
    let disabled = false;
    let image = this.state.image;

    /* Sets the new brothers header image */
    let newImage = images.findIndex(function(image) {
      return (image.name.toLowerCase() === selected.value.toLowerCase()) !== false;
    });

    /* Removes visibility of the old brothers header image */
    image[this.state.imageIndex].classList.remove('selected');

    /* Makes the new brothers header image visible */
    image[newImage].classList.add('selected');

    /* Sets the specific dropdown options based on the first selected dropdown value */
    if (selected.value === 'active') {
      updatedList = this.state.brothers.slice();
      options = this.state.activeOptions;
    } else if (selected.value === 'major') {
      //should be actives only
      updatedList = this.state.brothers.slice();
      sort(updatedList);
      options = this.state.majorOptions;
    } else if (selected.value === 'class') {
      updatedList = this.state.allBrothers.slice(); // Sets brothers list to consist of actives and alumni
      options = this.state.classOptions;
    } else if (selected.value === 'alumni') {
      updatedList = this.state.alumni.slice(); // Sets brothers list to consist of only alumni
      disabled = true;
    } else {
      //Shows all brothers actives and alumni
      updatedList = this.state.allBrothers.slice();
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
    let updatedList = brothers;
    let image = this.state.image;

    /* Sets the new brothers header image */
    let newImage = images.findIndex(function(image) {
      return (image.name.toLowerCase() === selected.value.toLowerCase()) !== false;
    });

    /* Removes visibility of the old brothers header image */
    image[this.state.imageIndex].classList.remove('selected');

    /* Makes the new brothers header image visible */
    image[newImage].classList.add('selected');

    /* Filters the brothers list based on eboard or cabinet */
    if (this.state.dropdownValue === 'active') {
      updatedList = updatedList.filter(function(brother) {
        return brother[selected.value.toLowerCase()] === true;
      });
    } else if (this.state.dropdownValue === 'major') {
      /* Filters brothers list based on selected major */
      updatedList = updatedList.filter(function(brother) {
        return (brother.major.toLowerCase() === selected.value.toLowerCase()) !== false;
      });
    } else {
      /* Filters brothers list based on class */
      updatedList = this.state.allBrothers;
      updatedList = updatedList.filter(function(brother) {
        return (brother.class.toLowerCase() === selected.value.toLowerCase()) !== false;
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
    return (
      <div>
        <div className="brothers-header">
          <a className="brothers-logo" role="button" href="/">
            <img
              className="logo"
              src={isChrome ? require('../../shared/logo.webp') : require('../../shared/logo.png')}
              alt="Logo"
            />
          </a>
          {this.state.specificLabel ? this.state.specificLabel : 'Our Brothers'}
        </div>
        <div className="brothers-image-container">
          {images.map((image, i) => (
            <img className="brothers-image" src={isChrome ? image.webp : image.jpg} alt="Brothers" key={i} />
          ))}
        </div>
        <div className="scroll-down" />
        <div id="members" className="scrolling-grid">
          <SearchBar
            searchValue={this.state.searchValue}
            firstSelected={this.state.firstSelected}
            options={this.state.options}
            secondSelected={this.state.secondSelected}
            specificOptions={this.state.specificOptions}
            specificDisabled={this.state.specificDisabled}
            filterSearch={this.filterSearch}
            filterDropdown={this.filterDropdown}
            filterSpecific={this.filterSpecific}
          />
          <Container className="brothers-grid">
            <Row className="brother-container">
              <BrothersList
                majorOptions={this.state.majorOptions}
                classOptions={this.state.classOptions}
                dropdownValue={this.state.dropdownValue}
                specificValue={this.state.specificValue}
                updatedBrothers={this.state.updatedBrothers}
                open={this.open}
              />
            </Row>
          </Container>
        </div>
        <BrotherModal show={this.state.showModal} close={this.close} brother={this.state.brotherModal} />
      </div>
    );
  }
}
