import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import { isChrome } from '../../shared/helpers.js';
import './Members.css';

function BrotherModal({ show, close, brother }) {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>{ brother.name }</Modal.Title>
        <img
          className="lozad modal-image-mobile"
          src={isChrome ? brother.image : brother.safari}
          alt="Active"
        />
      </Modal.Header>
      <Modal.Body>
        <img
          className="lozad modal-image"
          src={isChrome ? brother.image : brother.safari}
          alt="Active"
        />
        <BrotherInfo>
          <Title>Position</Title>
          <Info>{ brother.position }</Info>
          <Title>Class</Title>
          <Info>{ brother.className }</Info>
          <Title>Major</Title>
          <Info>{ brother.majorName }</Info>
          <Title>Year</Title>
          <Info>{ brother.year }</Info>
        </BrotherInfo>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <div>
          <div className="close-footer" onClick={close}>
            Close
          </div>
        </div>
        <a className="linkedin-footer" href={brother.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size="1.5em" />
          &nbsp;Connect
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export { BrotherModal };

const BrotherInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 30px;
  color: var(--secondary-color);

  @media (max-width: 539px) {
    font-size: 20px;
    margin: 0 0 5px;
  }
`;

const Info = styled.p`
  color: #666;
  font-size: 20px;

  @media (max-width: 539px) {
    font-size: 16px;
  }
`;
