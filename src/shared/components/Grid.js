import React from 'react';
import styled from 'styled-components';

export const Grid = styled(({
  cw,
  gap,
  cg,
  rg,
  justify,
  align,
  w,
  maxWidth,
  my,
  mt,
  mb,
  ...rest
}) => <div {...rest} />)`
  display: grid;

  ${props => props.cw && `
    grid-template-columns: repeat(auto-fill, ${props.cw}px);
  `}

  ${props => props.gap && `
    grid-gap: ${props.gap}px;
  `}

  ${props => props.cg && `
    grid-column-gap: ${props.cg}px;
  `}

  ${props => props.rg && `
    grid-row-gap: ${props.rg}px;
  `}

  ${props => props.justify && `
    justify-content: center;
    justify-items: center;
  `}

  ${props => props.align && `
    align-items: center;
  `}

  ${props => {
    if (!props.w) {
      return
    }
    if (props.w === 1) {
      return `
        width: 100%;
      `
    } else {
      return `
        width: ${props.w}px;
      `
    }
  }}
`;
