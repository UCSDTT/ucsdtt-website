import './MemberPage.css';
import 'react-select/dist/react-select.css';
import {Grid, Row, Col, Image, FormGroup, FormControl, Modal, ListGroup, ListGroupItem} from 'react-bootstrap';
import Select from 'react-select';
import React, {Component} from 'react';
import {brothers, alumni, options, images} from '../../activeData/data.js'

export default class MemberPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      imageIndex: 0,
      searchValue: '',
      brothers: brothers,
      alumni: alumni,
      allBrothers: brothers.concat(alumni),
      updatedBrothers: brothers,
      filteredBrothers: brothers,
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
    };
    this.filterSearch = this.filterSearch.bind(this);
    this.filterDropdown = this.filterDropdown.bind(this);
    this.filterSpecific = this.filterSpecific.bind(this);
    this.close = this.close.bind(this);
  }

  /* Runs when component mounts */
  componentDidMount() {
    let image = document.getElementsByClassName('brothers-image');

    /* Autofocuses the search bar */
    document.querySelector('.search-bar').autofocus = true;
    
    /* Makes the first brothers header image visible */
    image[0].classList.add('selected');

    this.setState({
      image: image,
    })
  }

  /* Renders the filtered label for major or class */
  renderFilteredLabel(option) {
    /* Checks if specfic dropdown value is set */
    if (this.state.specificValue) {
      /* If option is major or class, displays the labels */
      if (option.value === this.state.specificValue) {
        return (
          <Col xs={12} md={2} className="brother-info">
            <h3 className="option-label"> {option.label} </h3>
            <Image className="option-image" src={option.image} circle></Image>
          </Col>
        );
      }
    }
    else {
      return (
        <Col xs={12} md={2} className="brother-info">
          <h3 className="option-label"> {option.label} </h3>
          <Image className="option-image" src={option.image} circle></Image>
        </Col>
      );
    }
  }

  /* Renders the filtered list */
  renderFilteredList(option) {
    let brothers = this.state.updatedBrothers;
    let showList = false;

    /* Checks if there exists a brother in the specified major or class */
    brothers.forEach((brother) => {
      if (brother[this.state.dropdownValue] === option.value) {
        showList = true;
      }
    })

    /* 
      If there exists a brother in the specific major or class, 
      display the brothers of that specified major or class 
    */
    if (showList) {
      return (
        <Col xs={12} md={10}>
          {brothers.map((brother, i) => {
            if (brother[this.state.dropdownValue] === option.value) {
              return (
                <Col xs={6} sm={4} md={3} className="brother-info" key={i}>
                  <div onClick={() => this.open(brother)}>
                    <Image className="brother-image" src={brother.url} responsive rounded/>
                    <h4> {brother.name} </h4>
                    <p> {brother.position} </p>
                    <p> {brother.className} </p>
                  </div>
                </Col>
              );
            }
            else {
              return false;
            }
          })}
        </Col>
      )
    }
    else {
      return false;
    }
  }

  /* Renders the brothers */
  renderBrothers() {
    let options;

    /* Sets label to major or class depending on which one is selected */
    if (this.state.dropdownValue === 'major') {
      options = this.state.majorOptions;
    }
    else {
      options = this.state.classOptions;
    }

    /* Sets the specific label based on which is selected */
    if (this.state.specificValue) {
      options = options.filter((option) => {
        return (option.value.toLowerCase() ===
          this.state.specificValue.toLowerCase()) !== false;
      });
    }

    /* Displays labels if the first dropdown value is major or class */
    if (this.state.dropdownValue === 'major' || this.state.dropdownValue === 'class') {
      return (
        options.map((option, i) => {
          if (this.renderFilteredList(option) !== false) {
            return (
              <div key={i}>
                {this.renderFilteredLabel(option)}
                {this.renderFilteredList(option)}
              </div>
            )
          }
          else {
            return false;
          }
        })
      );
    }
    else {
      return (
        this.state.updatedBrothers.map((brother, i) => (
          <Col xs={6} sm={3} className="brother-info col-md-5th" key={i}>
            <Image
              className="brother-image"
              src={brother.url}
              onClick={() => this.open(brother)}
              responsive
              rounded
            />
            <h4> {brother.name.toUpperCase()} </h4>
            <p> {brother.position.toUpperCase()} </p>
            <p> {brother.className.toUpperCase()} </p>
          </Col>
        ))
      );
    }
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

  /* Filters the first dropdown based on the selected value */
  filterDropdown(selected) {
    let updatedList = this.state.brothers;
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

    /* Sets the specific dropdown options based on the first selected dropdown value */
    if (selected.value === 'active') {
      options = this.state.activeOptions;
    }
    else if (selected.value === 'major') {
      options = this.state.majorOptions;
    }
    else if (selected.value === 'class') {
      updatedList = this.state.allBrothers;  // Sets brothers list to consist of actives and alumni
      options = this.state.classOptions;
    }
    else {
      updatedList = this.state.alumni;  // Sets brothers list to consist of only alumni
      disabled = true;
    }

    /* Makes the new brothers header image visible */
    image[newImage].classList.add('selected');

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
    let updatedList = this.state.brothers;
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
    return (
      <div>
        <div className="brothers-header">
          <a className="brothers-logo" role="button" href="/">
            <Image className="logo" src={require('../../components/home/NavBar/images/logo.webp')}/>
          </a>
          OUR BROTHERS
        </div>
        <div className="brothers-image-container">
          {images.map((image, i) => (
            <Image className="brothers-image" src={image.url} key={i} responsive/>
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
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header>
                <Modal.Title> {this.state.brotherModal.name} </Modal.Title>
                <Image className="modal-image-mobile" src={this.state.brotherModal.url} circle/>
              </Modal.Header>
              <Modal.Body>
                <Image className="modal-image" src={this.state.brotherModal.url} rounded/>
                <ListGroup>
                  <ListGroupItem header="Position"> {this.state.brotherModal.position} </ListGroupItem>
                  <ListGroupItem header="Class"> {this.state.brotherModal.className} </ListGroupItem>
                  <ListGroupItem header="Major"> {this.state.brotherModal.majorName} </ListGroupItem>
                  <ListGroupItem header="Year"> {this.state.brotherModal.year} </ListGroupItem>
                </ListGroup>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <div>
                  <div className="close-footer" onClick={this.close}>
                    Close
                  </div>
                </div>
                <a className="linkedin-footer" href={this.state.brotherModal.linkedin} target="_blank">
                  Connect
                  <i className="icon-linkedin-squared" aria-hidden="true"></i>
                </a>
              </Modal.Footer>
            </Modal>
            {this.renderBrothers()}
  				</Row>
  			</Grid>
      </div>
    );
  }
}
