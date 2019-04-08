import React from 'react';
import styled from 'styled-components';

function FilteredLabel({ specificValue, option }) {
  if (specificValue && option.value !== specificValue) {
    return null;
  }
  return (
    <Container>
      <Label>{option.label}</Label>
      <Image src={option.image} alt="Label" />
    </Container>
  );
}

export { FilteredLabel };

const Container = styled.div`
  width: 190px;

  @media (max-width: 768px) {
    margin: 0 0 20px;
  }
`;

const Label = styled.h3`
  font-weight: 700;
  font-style: italic;
  font-size: 28px;
  margin: 0;
`;

const Image = styled.img`
  height: 150px;
  margin: auto;
  border-radius: 50%;

  @media (max-width: 350px) {
    height: 130px;
  }
`;
