import React from 'react';
import { ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { isChrome } from 'shared/helpers.js';
import './Members.css';

class BrotherModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header>
          <Modal.Title> {this.props.brother.name} </Modal.Title>
          <img
            className="lozad modal-image-mobile"
            src={isChrome ? this.props.brother.image : this.props.brother.safari}
            alt="Active"
          />
        </Modal.Header>
        <Modal.Body>
          <img
            className="lozad modal-image"
            src={isChrome ? this.props.brother.image : this.props.brother.safari}
            alt="Active"
          />
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
          <a className="linkedin-footer" href={this.props.brother.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="1.5em" />
            &nbsp;Connect
          </a>
        </Modal.Footer>
      </Modal>
    );
  }
}

export { BrotherModal };
