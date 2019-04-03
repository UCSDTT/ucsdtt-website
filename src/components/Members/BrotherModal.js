import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import { isChrome } from '../../shared/helpers.js';
import './Members.css';

function BrotherModal({ show, close, brother }) {
  const {
    name,
    image,
    safari,
    position,
    className,
    majorName,
    year,
    linkedin
  } = brother;
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>{ name }</Modal.Title>
        <img
          className="lozad modal-image-mobile"
          src={isChrome ? image : safari}
          alt="Active"
        />
      </Modal.Header>
      <Modal.Body>
        <img
          className="lozad modal-image"
          src={isChrome ? image : safari}
          alt="Active"
        />
        <BrotherInfo>
          <Title>Position</Title>
          <Info>{ position } </Info>
          <Title>Class</Title>
          <Info>{ className } </Info>
          <Title>Major</Title>
          <Info>{ majorName } </Info>
          <Title>Year</Title>
          <Info>{ year } </Info>
        </BrotherInfo>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <div>
          <div className="close-footer" onClick={close}>
            Close
          </div>
        </div>
        <a className="linkedin-footer" href={linkedin} target="_blank" rel="noopener noreferrer">
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
