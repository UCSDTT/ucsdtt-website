import React, { Component } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Grid } from '../../../shared/components';
import { isChrome } from '../../../shared/helpers.js';
import { largeCompanies, smallCompanies } from './data.js';

class Companies extends Component {
  render() {
    return (
      <Section name="companies" className="element companies">
        <h1 className="title">Our Alumni Network </h1>

        <Container>
          <LargeCompanies cw={320} cg={50} rg={30} justify align>
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
          <SmallCompanies cw={120} cg={50} rg={30} justify align>
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
      </Section>
    );
  }
}

export { Companies };

const Section = styled(Element)`
  padding-left: 10%;
  padding-right: 10%;
`;

const Container = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

const LargeCompanies = styled(Grid)`
  max-width: 880px;
  margin: 20px 0 50px;
`;

const SmallCompanies = styled(Grid)`
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
