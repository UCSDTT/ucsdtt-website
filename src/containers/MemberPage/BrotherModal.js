import './MemberPage.css';
import { isChrome } from '../../helpers/helpers.js';

import React from 'react';
import { Modal, ListGroup, ListGroupItem } from 'react-bootstrap';

class BrotherModal extends React.Component {
  componentDidUpdate() {
    const observer = window.lozad('.lozad', {
      load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
          el.classList.add('fadeIn');
        };
      },
      rootMargin: '200px 0px'
    }); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  }

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
            Connect
            <i className="icon-linkedin-squared" aria-hidden="true" />
          </a>
        </Modal.Footer>
      </Modal>
    );
  }
}

export { BrotherModal };
