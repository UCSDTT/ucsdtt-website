import './MemberPage.css';
import 'react-select/dist/react-select.css';
import {Grid, Row, Col, Image, FormGroup, FormControl, Modal, ListGroup, ListGroupItem} from 'react-bootstrap';
import Select from 'react-select';
import React, {Component} from 'react';
import {brothers, alumni, options, images} from './data.js'

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

  componentDidMount() {
    let image = document.getElementsByClassName('brothers-image');

    image[0].classList.add('selected');

    this.setState({
      image: image,
    })
  }

  renderFilteredLabel(option) {
    if (this.state.specificValue) {
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

  renderFilteredList(option) {
    let brothers = this.state.updatedBrothers;
    let showList = false;
    
    brothers.forEach((brother) => {
      if (brother[this.state.dropdownValue] === option.value) {
        showList = true;
      }
    })

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

  renderBrothers() {
    let options;

    if (this.state.dropdownValue === 'major') {
      options = this.state.majorOptions;
    }
    else {
      options = this.state.classOptions;
    }

    if (this.state.specificValue) {
      options = options.filter((option) => {
        return (option.value.toLowerCase() ===
          this.state.specificValue.toLowerCase()) !== false;
      });
    }

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

  close() {
    this.setState({
      showModal: false,
    })
  }

  open(brother) {
    this.setState({
      showModal: true,
      brotherModal: brother,
    })
  }

  filterSearch(event) {
    let updatedList = this.state.filteredBrothers;
    updatedList = updatedList.filter(function(brother){
      return brother.name.toLowerCase().startsWith(
        event.target.value.toLowerCase()) !== false;
    });
    this.setState({
      searchValue: event.target.value,
      updatedBrothers: updatedList,
    });
  }

  filterDropdown(selected) {
    let updatedList = this.state.brothers;
    let options;
    let disabled = false;
    let image = this.state.image;
    let newImage = images.findIndex(function(image) {
      return (image.name.toLowerCase() ===
        selected.value.toLowerCase()) !== false;
    });

    image[this.state.imageIndex].classList.remove('selected');

    if (selected.value === 'active') {
      options = this.state.activeOptions;
    }
    else if (selected.value === 'major') {
      options = this.state.majorOptions;
    }
    else if (selected.value === 'class') {
      updatedList = this.state.allBrothers;
      options = this.state.classOptions;
    }
    else {
      updatedList = this.state.alumni;
      disabled = true;
    }

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

  filterSpecific(selected) {
    let updatedList = this.state.brothers;
    let image = this.state.image;
    let newImage = images.findIndex(function(image) {
      return (image.name.toLowerCase() ===
        selected.value.toLowerCase()) !== false;
    });

    image[this.state.imageIndex].classList.remove('selected');
    image[newImage].classList.add('selected');

    if (this.state.dropdownValue === 'active') {
      updatedList = updatedList.filter(function(brother){
        return brother[selected.value.toLowerCase()] === true;
      });
    }
    else if (this.state.dropdownValue === 'major') {
      updatedList = updatedList.filter(function(brother){
        return (brother.major.toLowerCase() ===
          selected.value.toLowerCase()) !== false;
      });
    }
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
            <Image className="logo" src={require('../../components/home/NavBar/images/tt_logo.png')}/>
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
                <Image className="modal-image" src={this.state.brotherModal.url} circle/>
              </Modal.Header>
              <Modal.Body> 
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
