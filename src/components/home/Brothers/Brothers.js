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
      allBrothers: brothers.concat(alumni),
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

  renderFilteredLabel(option) {
    if (this.state.specificValue) {
      if (option.value === this.state.specificValue) {
        return (
          <Col xs={12} md={2} className="brother-info">
            <h3 className="option-label"> {option.label} </h3>
            <Image className="option-image" src={option.image}></Image>
          </Col>
        );
      }
    }
    else {
      return (
        <Col xs={12} md={2} className="brother-info">
          <h3 className="option-label"> {option.label} </h3>
          <Image className="option-image" src={option.image}></Image>
        </Col>
      );
    }
  }

  renderFilteredList(option) {
    if (this.state.dropdownValue === 'major') {
      return (
        <Col xs={12} md={10}>
          {this.state.updatedBrothers.map((brother, i) => {                                  
            if (brother['major'] === option.value) {
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
            }
            else {
              return;
            }             
          })}
        </Col>
      )
    }
    else {
      return (
        <Col xs={12} md={10}>
          {this.state.allBrothers.map((brother, i) => {                                       
            if (brother['class'] === option.value) {
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
            }
            else {
              return;
            }             
          })}
        </Col>
      )
    }
  }

  renderBrothers() {
    let options;

    if (this.state.dropdownValue === 'major') {
      options = majorOptions;
    }
    else {
      options = classOptions;
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
          return (
            <div key={i}>
              {this.renderFilteredLabel(option)}
              {this.renderFilteredList(option)}
            </div>
          )
        })
      );
    }
    else {
      return (
        this.state.updatedBrothers.map((brother, i) => {                                        
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
        })
      )
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
      value: event.target.value,
      updatedBrothers: updatedList,
    });
  }

  filterDropdown(selected) {
    let updatedList = this.state.brothers;
    let options;
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
      disabled = false;
    }
    else if (selected.value === 'class') {
      options = this.state.classOptions;
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
            {this.renderBrothers()}
  				</Row>
  			</Grid>
      </div>
    );
  }
}

export {Brothers};
