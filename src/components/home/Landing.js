import React, {Component} from 'react';
import * as BS from 'react-bootstrap';


class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <BS.PageHeader className="title">WHO WE ARE</BS.PageHeader>
	      <BS.Image className="picture" src={require('../../../public/images/BR.jpg')} thumbnail/>     
      </div>
    );
  }
}

export {Landing};
