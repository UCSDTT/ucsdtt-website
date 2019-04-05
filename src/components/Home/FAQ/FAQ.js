import './FAQ.css';

import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { faqCol1, faqCol2 } from './data.js';

function FAQ() {
  return (
    <Element name="faq" className="element faq" data-background-image={require('./images/faq-background.svg')}>
      <Title className="title"> FAQ </Title>
      <Container>
        <Column>
          {faqCol1.map((question, i) => (
            <Card key={i}>
              <FaqTitle> {question.title} </FaqTitle>
              <FaqBody> {question.body} </FaqBody>
            </Card>
          ))}
        </Column>
        <Column>
          {faqCol2.map((question, i) => (
            <Card key={i}>
              <FaqTitle> {question.title} </FaqTitle>
              <FaqBody> {question.body} </FaqBody>
            </Card>
          ))}
        </Column>
      </Container>
    </Element>
  )
}

export { FAQ };

const Title = styled.h1`
  color: #fafafa;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 15px 0;

  @media(max-width: 992px) {
    margin-bottom: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  margin: 15px auto;
  border: none;
  border-radius: 0.25rem;
  text-align: left;

  @media(max-width: 992px) {
    max-width: 370px;
  }
`;

const FaqTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  color: var(--secondary-color);
  margin: 0 0 10px;
`;

const FaqBody = styled.p`
  font-size: 18px;
  color: var(--secondary-light);
  margin: 0;
`;
