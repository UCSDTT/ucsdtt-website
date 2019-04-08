import React from 'react';
import styled from 'styled-components';
import { FilteredLabel } from './FilteredLabel.js';
import { MemberInfo } from './MemberInfo.js';

class BrothersList extends React.Component {
  get brothersList() {
    const { updatedBrothers } = this.props;
    return (
      <BrothersGrid>
        {updatedBrothers.map((brother, i) => (
          <MemberInfo brother={brother} open={this.props.open} key={i} />
        ))}
      </BrothersGrid>
    );
  }

  /* Displays labels if the selected filter is major or class */
  get brothersListWithLabels() {
    const { dropdownValue, majorOptions, classOptions, specificValue, updatedBrothers } = this.props;
    /* Sets label to major or class depending on which one is selected */
    let options = dropdownValue === 'major' ? majorOptions : classOptions;

    /* Sets the specific label based on which is selected */
    if (specificValue) {
      options = options.filter(option => {
        return (option.value.toLowerCase() === specificValue.toLowerCase()) !== false;
      });
    }
    return options.map((option, i) => {
      if (!this.showLabelsList(option)) {
        return null;
      }
      return (
        <Flex key={i}>
          <FilteredLabel option={option} specificValue={specificValue} />
          <BrothersWithLabelsGrid>
            {updatedBrothers.map((brother, j) => {
              if (brother[dropdownValue] !== option.value) {
                return null;
              }
              return <MemberInfo brother={brother} open={this.props.open} key={j} />;
            })}
          </BrothersWithLabelsGrid>
        </Flex>
      );
    });
  }

  /*
    If there exists a brother in the specific major or class,
    display the brothers of that specified major or class
  */
  showLabelsList(option) {
    const { dropdownValue, updatedBrothers } = this.props;
    let showList = false;
    /* Checks if there exists a brother in the specified major or class */
    updatedBrothers.forEach(brother => {
      if (brother[dropdownValue] === option.value) {
        showList = true;
      }
    });
    return showList;
  }

  render() {
    const { dropdownValue } = this.props;
    if (dropdownValue === 'major' || dropdownValue === 'class') {
      return this.brothersListWithLabels;
    }
    return this.brothersList;
  }
}

export { BrothersList };

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 190px);
  grid-gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 150px);
  }
`;

const BrothersGrid = styled(Grid)`
  margin: 50px auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Flex = styled.div`
  display: flex;
  margin: 50px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const BrothersWithLabelsGrid = styled(Grid)`
  width: calc(100% - 190px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
