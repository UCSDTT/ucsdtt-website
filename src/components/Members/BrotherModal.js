import './Members.css';

import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import { isChrome } from '../../shared/helpers.js';

function BrotherModal({ show, close, brother }) {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>{brother.name}</Modal.Title>
        <img className="lozad modal-image-mobile" src={isChrome ? brother.image : brother.safari} alt="Active" />
      </Modal.Header>
      <Modal.Body>
        <img className="lozad modal-image" src={isChrome ? brother.image : brother.safari} alt="Active" />
        <BrotherInfo>
          <Info>
            <Title>Position</Title>
            {brother.position}
          </Info>
          <Info>
            <Title>Class</Title>
            {brother.className}
          </Info>
          <Info>
            <Title>Major</Title>
            {brother.majorName}
          </Info>
          <Info>
            <Title>Year</Title>
            {brother.year}
          </Info>
        </BrotherInfo>
      </Modal.Body>
      <Footer>
        <CloseButton onClick={close}>Close</CloseButton>
        <LinkedinButton href={brother.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
          Connect
        </LinkedinButton>
      </Footer>
    </Modal>
  );
}

export { BrotherModal };

const BrotherInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Info = styled.div`
  color: #666;
  font-size: 20px;
  margin: 0 0 1em;

  @media (max-width: 539px) {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  color: var(--secondary-color);

  @media (max-width: 539px) {
    font-size: 20px;
    margin: 0 0 5px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 0;
  border-top: 1px solid #dee2e6;
  cursor: pointer;

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

const FooterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled(FooterButton)`
  width: 50%;
  height: 60px;
  color: #9a0000;
  border-right: 1px solid #dee2e6;

  &:hover {
    background-color: #eee;
  }
`;

const LinkedinButton = styled(FooterButton)`
  width: 50%;
  height: 60px;
  color: #007bb6;

  &:hover {
    background-color: #eee;
  }
`;

const LinkedinIcon = styled(FaLinkedin)`
  width: 1.5em;
  height: 1.5em;
  margin-right: 5px;
`;
