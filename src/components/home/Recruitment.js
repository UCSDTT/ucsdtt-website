import React, {Component} from 'react';
import * as BS from 'react-bootstrap';

class Recruitment extends Component {



  render() {

  	const infoStyle = {
      backgroundColor: '#F8A9DA',
      marginLeft: 'inherit',
      marginRight: 'inherit'
    };

    const imageStyle = {
      paddingLeft: '15px',
      paddingRight: '0px'
    };

    const adStyle = {
      marginTop: '15px'
    };

    const adImgRStyle = {
      paddingLeft: '7.5px'
    };

    const adImgMStyle = {
      paddingLeft: '7.5px',
      paddingRight: '7.5px'
    };

    const adImgLStyle = {
      paddingRight: '7.5px'
    };

    return (
      <div className="recruitment">
        <BS.PageHeader className="title">Why Rush</BS.PageHeader>
        <BS.Row style={infoStyle}>
          <BS.Col xs={6} style={imageStyle}>
            <BS.Image className="picture" src={require('../../../public/images/WhoWeAre.jpg')} responsive/>
          </BS.Col>
          <BS.Col xs={6} className="about">
            <h1>Why Rush</h1>
            <p>
              Reasons why everyone rushed
            </p>
          </BS.Col>
        </BS.Row>
        <BS.Row style={adStyle}>
          <BS.Col xs={4} style={adImgLStyle}>
            <BS.Image src={require('../../../public/images/OMICRONS.jpg')} responsive thumbnail/>
          </BS.Col>
          <BS.Col xs={4} style={adImgMStyle}>
            <BS.Image src={require('../../../public/images/BubbleSoccer.jpg')} responsive thumbnail/>
          </BS.Col>
          <BS.Col xs={4} style={adImgRStyle}>
            <BS.Image src={require('../../../public/images/Claude.jpg')} responsive thumbnail/>
          </BS.Col>
        </BS.Row>
      </div>
    );
  }
}

export {Recruitment};
