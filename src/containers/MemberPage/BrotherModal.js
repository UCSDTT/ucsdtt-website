import './MemberPage.css';

import React from 'react';
import {Modal, ListGroup, ListGroupItem, Image} from 'react-bootstrap';


class BrotherModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header>
          <Modal.Title> {this.props.brother.name} </Modal.Title>
          <Image className="modal-image-mobile" src={this.props.brother.professional} circle/>
        </Modal.Header>
        <Modal.Body>
          <Image className="modal-image" src={this.props.brother.professional} rounded/>
          <ListGroup>
            <ListGroupItem header="Position"> {this.props.brother.position} </ListGroupItem>
            <ListGroupItem header="Class"> {this.props.brother.className} </ListGroupItem>
            <ListGroupItem header="Major"> {this.props.brother.majorName} </ListGroupItem>
            <ListGroupItem header="Year"> {this.props.brother.year} </ListGroupItem>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <div>
            <div className="close-footer" onClick={this.props.close}>
              Close
            </div>
          </div>
          <a className="linkedin-footer" href={this.props.brother.linkedin} target="_blank">
            Connect
            <i className="icon-linkedin-squared" aria-hidden="true"></i>
          </a>
        </Modal.Footer>
      </Modal>
    )
  }
}

export {BrotherModal};