import React from 'react';
import { Col } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';
import './Footer.css';

// TODO: Replace react-bootstrap components with custom components
function ChapterInfo() {
  return (
    <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 0 }} md={4} className="widget">
      <WidgetHeader>Want to Learn More?</WidgetHeader>
      <br />
      <p>
        Outside of the Epsilon Delta chapter at UCSD, Theta Tau is the oldest and largest professional engineering
        fraternity in the United States, with chapters everywhere from coast to coast!
      </p>
      <p>
        For more information, visit Theta Tau&apos;s national site:{' '}
        <Link href="http://thetatau.org/" target="_blank" rel="noopener noreferrer">
          thetatau.org
        </Link>
      </p>
    </Col>
  );
}

function ContactInfo() {
  return (
    <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 0 }} md={4} className="widget">
      <WidgetHeader>Contact Us</WidgetHeader>
      <br />
      <p>
        For any questions or queries, you can find our FAQS and contact details
        <Link href="#null" onClick={() => scroller.scrollTo('faq', { smooth: true })}>
          &nbsp;here
        </Link>
      </p>
      <Icons>
        <a href="https://www.facebook.com/thetatau.ucsd/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/ucsdthetatau/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </Icons>
    </Col>
  );
}

function WebsiteCredits() {
  return (
    <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 0 }} className="widget">
      <WidgetHeader>Website Credits</WidgetHeader>
      <br />
      <ul>
        <li>
          <Link href="https://github.com/bchann/" target="_blank" rel="noopener noreferrer">
            Brian Chan
          </Link>
        </li>
        <li>
          <Link href="https://github.com/hillary/" target="_blank" rel="noopener noreferrer">
            Hillary Fan
          </Link>
        </li>
        <li>
          <Link href="https://github.com/3605031/" target="_blank" rel="noopener noreferrer">
            Blake Huynh
          </Link>
        </li>
        <li>
          <Link href="https://github.com/kaiserpk/" target="_blank" rel="noopener noreferrer">
            Kaiser Kim
          </Link>
        </li>
        <li>
          <Link href="https://github.com/jeffreyzlee/" target="_blank" rel="noopener noreferrer">
            Jeffrey Lee
          </Link>
        </li>
        <li>
          <Link href="https://joshchao.herokuapp.com" target="_blank" rel="noopener noreferrer">
            Joshua Chao
          </Link>
        </li>
        <li>
          <Link href="http://clarkphan.com/" target="_blank" rel="noopener noreferrer">
            Clark Phan
          </Link>
        </li>
      </ul>
    </Col>
  );
}

function Footer() {
  return (
    <Section>
      <Row>
        <ChapterInfo />
        <ContactInfo />
        <WebsiteCredits />
      </Row>
    </Section>
  );
}

export { Footer };

const Section = styled.div`
  width: 100%;
  background-color: var(--primary-color);

  & p {
    font-size: 15px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  & ul {
    font-size: 15px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px 20px;
  margin: 0 auto;

  @media (min-width: 576px)
    max-width: 570px;
  }
  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 990px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

const WidgetHeader = styled.div`
  font-size: 20px;
  border-bottom: 1px dotted white;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const Link = styled.a`
  color: var(--accent-color);
`;

const Icons = styled.div`
  & svg {
    color: #fff;
    font-size: 3em;
    margin: 0 20px;
    transition: color 0.3s, background-color 0.3s;
  }
`;
