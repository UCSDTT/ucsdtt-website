import './Brothers.css';
import 'react-select/dist/react-select.css';
import {Grid, Row, Col, Image, FormGroup, FormControl, Modal} from 'react-bootstrap';
import Select from 'react-select';
import React, {Component} from 'react';
import {brothers, alumni, options, majorOptions, classOptions, images} from './data.js'

class Brothers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      imageIndex: 0,
      value: '',
      brothers: brothers,
      alumni: alumni,
      updatedBrothers: brothers,
      filteredBrothers: brothers,
      dropdownValue: 'position',
      options: options,
      specificValue: '',
      specificOptions: [],
      majorOptions: majorOptions,
      classOptions: classOptions,
      specificDisabled: true,
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
      value: event.target.value,
      updatedBrothers: updatedList,
    });
  }

  filterDropdown(selected) {
    let updatedList = this.state.brothers;
    let options;
    let value;
    let disabled;
    let image = this.state.image;
    let newImage = images.findIndex(function(image) {
      return (image.name.toLowerCase() ===
        selected.value.toLowerCase()) !== false;
    });

    image[this.state.imageIndex].classList.remove('selected');

    if (selected.value === 'alumni') {
      updatedList = this.state.alumni;
      images.indexOf(selected.value)
      disabled = true;
    }
    else if (selected.value === 'major') {
      options = this.state.majorOptions;
      value = 'cs';
      updatedList = updatedList.filter(function(brother){
        return (brother.major.toLowerCase() ===
          value.toLowerCase()) !== false;
      });
      newImage = images.findIndex(function(image) {
        return (image.name.toLowerCase() ===
          value.toLowerCase()) !== false;
      });
      disabled = false;
    }
    else if (selected.value === 'class') {
      options = this.state.classOptions;
      value = 'Charter Class';
      updatedList = updatedList.filter(function(brother){
        return (brother.class.toLowerCase() ===
          value.toLowerCase()) !== false;
      });
      newImage = images.findIndex(function(image) {
        return (image.name.toLowerCase() ===
          value.toLowerCase()) !== false;
      });
      disabled = false;
    }
    else {
      disabled = true;
    }

    image[newImage].classList.add('selected');

    this.setState({
      imageIndex: newImage,
      dropdownValue: selected.value,
      updatedBrothers: updatedList,
      filteredBrothers: updatedList,
      specificValue: value,
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

    if (this.state.dropdownValue === 'major') {
      updatedList = updatedList.filter(function(brother){
        return (brother.major.toLowerCase() ===
          selected.value.toLowerCase()) !== false;
      });
    }
    else {
      updatedList = updatedList.filter(function(brother){
        return (brother.class.toLowerCase() ===
          selected.value.toLowerCase()) !== false;
      });
    }
    this.setState({
      imageIndex: newImage,
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
            <Image className="logo" src={require('../NavBar/images/tt_logo.png')}/>
          </a>
          OUR BROTHERS
        </div>
        <div className="brothers-image-container">
          {images.map((image, i) => (
            <Image className="brothers-image" src={image.url} key={i} responsive/>
          ))}
        </div>
        <Grid className="brothers-grid">
  				<Row className="search-group">
  					<Col xsOffset={1} xs={10} md={4} className="search-bar">
  						<form>
          			<FormGroup controlId="formBasicText">
            			<FormControl
            				className="search-border"
  			            type="text"
  			            value={this.state.value}
  			            onChange={this.filterSearch}
           				 />
          			</FormGroup>
       			 	</form>
  					</Col>
  					<Col xs={5} md={2}>
  						<h3> SEARCH BY </h3>
  					</Col>
  					<Col xs={4} md={2}>
  						<Select
                className="search-dropdown"
                value={this.state.dropdownValue}
                options={this.state.options}
                clearable={false}
                onChange={this.filterDropdown}
              />
  					</Col>
            <Col xs={3} md={2}>
              <Select
                className="search-dropdown"
                value={this.state.specificValue}
                options={this.state.specificOptions}
                clearable={false}
                disabled={this.state.specificDisabled}
                onChange={this.filterSpecific}
              />
            </Col>
  				</Row>
  				<Row className="brother-container">
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title> {this.state.brotherModal.name} </Modal.Title>
                <Modal.Body> {this.state.brotherModal.position} </Modal.Body>
              </Modal.Header>
            </Modal>
            {this.state.updatedBrothers.map((brother, i) => {                                        
              return (
              	<Col xs={6} sm={3} md={2} className="brother-info" key={i}>
                  <div onClick={() => this.open(brother)}>
                  	<Image className="brother-image" src={brother.url} responsive rounded/>
                  	<p> {brother.name} </p>
                    <p> {brother.position} </p>
                  	<p> {brother.class} </p>
                  </div>
                </Col>
            	);                
            })}
  				</Row>
  			</Grid>
      </div>
    );
  }
}

export {Brothers};
