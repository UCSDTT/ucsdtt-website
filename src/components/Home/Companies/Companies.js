import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { isChrome } from '../../../shared/helpers.js';
import { largeCompanies, smallCompanies } from './data.js';

function Companies() {
  return (
    <Element name="companies" className="element">
      <h1 className="title">Our Alumni Network </h1>
      <Container>
        <LargeCompanies>
          {largeCompanies.map((company, i) => (
            <LargeCompany key={i}>
              <a href={company.href} target="_blank" rel="noopener noreferrer">
                <CompanyImage
                  className="lozad"
                  data-src={isChrome ? company.image : company.safari}
                  href={company}
                  alt="Large Company"
                />
              </a>
            </LargeCompany>
          ))}
        </LargeCompanies>
        <SmallCompanies>
          {smallCompanies.map((company, i) => (
            <SmallCompany key={i}>
              <a href={company.href} target="_blank" rel="noopener noreferrer">
                <CompanyImage
                  className="lozad"
                  data-src={isChrome ? company.image : company.safari}
                  alt="Small Company"
                />
              </a>
            </SmallCompany>
          ))}
        </SmallCompanies>
      </Container>
    </Element>
  );
}

export { Companies };

const Container = styled.div`
  max-width: 850px;
  margin: 60px auto 0;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 30px 50px;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const LargeCompanies = styled(Grid)`
  grid-template-columns: repeat(auto-fill, 320px);
  max-width: 880px;
  margin: 20px 0 50px;
`;

const SmallCompanies = styled(Grid)`
  grid-template-columns: repeat(auto-fill, 120px);
  max-width: 880px;
`;

const LargeCompany = styled.div`
  width: 320px;

  @media(max-width: 992px) {
    width: 300px;
  }
  @media(max-width: 768px) {
    width: 220px;
  }
`;

const SmallCompany = styled.div`
  width: 120px;

  @media(max-width: 992px) {
    width: 110px;
  }
  @media(max-width: 768px) {
    width: 100px;
  }
`;

const CompanyImage = styled.img`
  width: 100%;
`;
