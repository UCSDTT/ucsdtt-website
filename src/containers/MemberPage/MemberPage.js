import './MemberPage.css';
import 'react-select/dist/react-select.css';
import {Grid, Row, Col, FormGroup, FormControl} from 'react-bootstrap';
import Select from 'react-select';
import React, {Component} from 'react';
import {BrothersList} from './BrothersList.js';
import {BrotherModal} from './BrotherModal.js';
import {brothers, options, images} from '../../activeData/data.js';

export default class MemberPage extends Component {
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
      options: options.general,
      specificValue: '',
      specificOptions: options.active,
      activeOptions: options.active,
      majorOptions: options.major,
      classOptions: options.class,
      specificDisabled: false,
      showModal: false,
      brotherModal: {},
      showList: false,
    };
    this.filterSearch = this.filterSearch.bind(this);
    this.filterDropdown = this.filterDropdown.bind(this);
    this.filterSpecific = this.filterSpecific.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  /* Runs when component mounts */
  componentDidMount() {
    let actives = [];
    let eboard = [];
    let cabinet = [];
    let alumni = [];
    let allBrothers = [];
    let image = document.getElementsByClassName('brothers-image');

    /* Autofocuses the search bar */
    document.querySelector('.search-bar').autofocus = true;
    
    /* Makes the first brothers header image visible */
    image[0].classList.add('selected');

    brothers.forEach((brother) => {
      if (brother.eboard === true) {
        eboard.push(brother);
      }
      else if (brother.cabinet === true) {
        cabinet.push(brother);
      }
      else if (brother.position === 'Alumni') {
        alumni.push(brother);
      }
      else {
        actives.push(brother);
      }
      allBrothers.push(brother);
    });

    this.sort(actives);
    this.sort(alumni);
    this.sort(cabinet);
    this.sort(allBrothers);

    let members = eboard.concat(cabinet).concat(actives);

    this.setState({
      image: image,
      brothers: members,
      alumni: alumni,
      allBrothers: allBrothers,
      updatedBrothers: members,
      filteredBrothers: members
    })
  }

  /* Closes the modal */
  close() {
    this.setState({
      showModal: false,
    })
  }

  /* Opens the modal */
  open(brother) {
    this.setState({
      showModal: true,
      brotherModal: brother,
    })
  }

  sort(brothers) {
    brothers.sort(function(a, b){
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  /* Filters the list based on the search input */
  filterSearch(event) {
    /* Sets the list to the filtered list of brothers */
    let updatedList = this.state.filteredBrothers;

    /* Sets the displayed list to all actives whose names begin with the input value */
    updatedList = updatedList.filter(function(brother) {
      return brother.name.toLowerCase().startsWith(
        event.target.value.toLowerCase()) !== false;
    });

    this.setState({
      searchValue: event.target.value,
      updatedBrothers: updatedList,
    });
  }

  /* Filters the first dropdown based on the selected value */
  filterDropdown(selected) {
    let updatedList = brothers;
    let options;
    let disabled = false;
    let image = this.state.image;

    /* Sets the new brothers header image */
    let newImage = images.findIndex(function(image) {
      return (image.name.toLowerCase() ===
        selected.value.toLowerCase()) !== false;
    });

    /* Removes visibility of the old brothers header image */
    image[this.state.imageIndex].classList.remove('selected');

    /* Makes the new brothers header image visible */
    image[newImage].classList.add('selected');

    /* Sets the specific dropdown options based on the first selected dropdown value */
    if (selected.value === 'active') {
      updatedList = this.state.brothers;
      options = this.state.activeOptions;
    }
    else if (selected.value === 'major') { //should be actives and alumni
      updatedList = this.state.allBrothers;
      this.sort(updatedList);
      options = this.state.majorOptions;
    }
    else if (selected.value === 'class') {
      updatedList = this.state.allBrothers;  // Sets brothers list to consist of actives and alumni
      this.sort(updatedList);
      options = this.state.classOptions;
    }
    else if (selected.value === 'alumni') {
      updatedList = this.state.alumni;  // Sets brothers list to consist of only alumni
      this.sort(updatedList);
      disabled = true;
    }
    else { //Shows all brothers actives and alumni
      updatedList = this.state.allBrothers;
      this.sort(updatedList);
      disabled = true;
    }

    this.setState({
      imageIndex: newImage,
      searchValue: '',
      dropdownValue: selected.value,
      updatedBrothers: updatedList,
      filteredBrothers: updatedList,
      specificValue: null,
      specificOptions: options,
      specificDisabled: disabled,
    })
  }

  /* Filters the specific dropdown based on the selected value */
  filterSpecific(selected) {
    let updatedList = brothers;
    let image = this.state.image;

    /* Sets the new brothers header image */
    let newImage = images.findIndex(function(image) {
      return (image.name.toLowerCase() ===
        selected.value.toLowerCase()) !== false;
    });

    /* Removes visibility of the old brothers header image */
    image[this.state.imageIndex].classList.remove('selected');

    /* Makes the new brothers header image visible */
    image[newImage].classList.add('selected');

    /* Filters the brothers list based on eboard or cabinet */
    if (this.state.dropdownValue === 'active') {
      updatedList = updatedList.filter(function(brother){
        return brother[selected.value.toLowerCase()] === true;
      });
    }
    /* Filters brothers list based on selected major */
    else if (this.state.dropdownValue === 'major') {
      updatedList = updatedList.filter(function(brother){
        return (brother.major.toLowerCase() ===
          selected.value.toLowerCase()) !== false;
      });
    }
    /* Filters brothers list based on class */
    else {
      updatedList = this.state.allBrothers;
      updatedList = updatedList.filter(function(brother){
        return (brother.class.toLowerCase() ===
          selected.value.toLowerCase()) !== false;
      });
    }

    this.setState({
      imageIndex: newImage,
      searchValue: '',
      updatedBrothers: updatedList,
      filteredBrothers: updatedList,
      specificValue: selected.value,
    });
  }

  render() {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return (
      <div>
        <div className="brothers-header">
          <a className="brothers-logo" role="button" href="/">
            <img 
              className="logo" 
              src={isSafari ? (require('../../components/home/NavBar/images/logo.png')) :
              (require('../../components/home/NavBar/images/logo.webp'))}
              alt="Logo"
            />
          </a>
          OUR BROTHERS
        </div>
        <div className="brothers-image-container">
          {images.map((image, i) => (
            <img 
              className="brothers-image" 
              src={isSafari ? image.jpg : image.webp} 
              alt="Brothers"
              key={i}
            />
          ))}
        </div>
        <Grid className="brothers-grid">
  				<Row className="search-bar-row">
  					<Col xsOffset={1} xs={10} mdOffset={1} md={4} className="search-bar-col">
  						<form>
          			<FormGroup controlId="formBasicText">
            			<FormControl
            				className="search-bar"
  			            type="text"
                    placeholder="Search..."
  			            value={this.state.searchValue}
  			            onChange={this.filterSearch}
           				 />
          			</FormGroup>
       			 	</form>
  					</Col>
  					<Col xs={12} md={2}>
  						<h3> SEARCH BY </h3>
  					</Col>
  					<Col xs={6} md={2}>
  						<Select
                className="search-dropdown"
                value={this.state.dropdownValue}
                options={this.state.options}
                clearable={false}
                onChange={this.filterDropdown}
                backspaceRemoves={false}
                searchable={false}
              />
  					</Col>
            <Col xs={6} md={3}>
              <Select
                className="search-dropdown"
                value={this.state.specificValue}
                options={this.state.specificOptions}
                clearable={false}
                disabled={this.state.specificDisabled}
                onChange={this.filterSpecific}
                backspaceRemoves={false}
                searchable={false}
              />
            </Col>
  				</Row>
  				<Row className="brother-container">
            <BrotherModal 
              show={this.state.showModal}
              close={this.close}
              brother={this.state.brotherModal} 
            />
            <BrothersList 
              majorOptions={this.state.majorOptions}
              classOptions={this.state.classOptions}
              dropdownValue={this.state.dropdownValue}
              specificValue={this.state.specificValue}
              updatedBrothers={this.state.updatedBrothers}
              open={this.open}
            />
  				</Row>
  			</Grid>
      </div>
    );
  }
}
