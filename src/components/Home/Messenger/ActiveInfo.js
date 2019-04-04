import { isChrome } from '../../../shared/helpers.js';
import React, { Fragment } from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import styled from 'styled-components';

/* All the active information inside the messenger card */
function ActiveInfo({ active }) {
  const { image, safari, name, year, majorName, className, messenger } = active
  return (
    <Fragment>
      <Info>
        <Image
          src={isChrome ? image : safari}
          role="presentation"
          alt="Messenger"
        />
        <Name>{name}</Name>
        <Body>
          { year }
          <br />{ majorName }
          <br />{ className }
        </Body>
      </Info>
      <Link href={messenger} target="_blank" rel="noopener noreferrer">
        <Button>
          <MessengerIcon />
          Message
        </Button>
      </Link>
    </Fragment>
  );
}

export { ActiveInfo };

const Info = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: 50% 35%;
  height: 180px;
  width: 180px;
  margin: 0 0 20px;
  border-radius: 50%;
`;

const Name = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--secondary-color);
`;

const Body = styled.p`
  color: var(--secondary-light);
  line-height: 1.8;
`;

const Link = styled.a`
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 18px;
  padding: 5px 0;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-dark);
  }
`;

const MessengerIcon = styled(FaFacebookMessenger)`
  font-size: 24px;
  margin: 3px 0px;
  margin-right: 5px;
`;
