import React, { Component } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Flipper } from './Flipper.js';
import { brothers } from '../../../activeData/data.js';

class Messenger extends Component {
  state = {
    activeList: [],
    actives: [],
    flipped: false
  };

  /* Runs when the component mounts */
  componentDidMount() {
    const actives = [
      {
        front: {},
        back: {}
      },
      {
        front: {},
        back: {}
      },
      {
        front: {},
        back: {}
      }
    ];

    /* Filters out active without a messenger link (those who don't want to be messaged) and alumni */
    const activeList = brothers.filter(function(brother) {
      return brother.messenger && brother.position !== 'Alumni';
    });

    const shuffled = this.shuffle(activeList);

    /* Sets the front panel to the shuffled actives */
    actives.forEach((active, i) => {
      active.front = shuffled[i];
    });

    this.setState({ actives });
  }

  /* Shuffles the actives and removes the 3 chosen from the total active list */
  shuffle = (list) => {
    const shuffled = list.sort(() => 0.5 - Math.random()); // shuffle
    const activeList = shuffled.slice(3);

    this.setState({ activeList });
    return shuffled.slice(0, 3); //get sub-array of first n elements AFTER shuffle
  }

  /* Flips the messenger card */
  flip = () => {
    const { actives, activeList, flipped } = this.state;
    const shuffled = this.shuffle(activeList);

    /* Stops flipping if there are less than 3 actives left in the active list */
    if (shuffled.length !== 3) {
      return;
    }

    /* Sets the front panel to the shuffled actives */
    if (flipped) {
      actives.forEach((active, i) => {
        active.front = shuffled[i];
      });
    } else {
      /* Sets the back panel to the shuffled actives */
      actives.forEach((active, i) => {
        active.back = shuffled[i];
      });
    }

    this.setState({ actives, flipped: !flipped });
  }

  render() {
    return (
      <Section name="messenger" className="element messenger">
        <h1 className="title">Get to Know Us!</h1>
        <FlipperContainer>
          {this.state.actives.map((active, i) => (
            <Flipper
              flipped={this.state.flipped}
              frontActive={active.front}
              backActive={active.back}
              index={i}
              key={i}
            />
          ))}
        </FlipperContainer>
        <ButtonsContainer>
          <ShuffleButton onClick={this.flip}>
            Shuffle Actives
          </ShuffleButton>
          <a href="/members">
            <MembersButton>
              Meet the Fraternity
            </MembersButton>
          </a>
        </ButtonsContainer>
      </Section>
    );
  }
}

export { Messenger };

const Section = styled(Element)`
  position: relative;
  background-color: #fafafa;

  & button {
    transition: background-color 0.2s ease-in-out;
  }
`;

const Grid = styled.div`
  display: grid;
  justify-content: center;
`;

const FlipperContainer = styled(Grid)`
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 30px;
  justify-items: center;
  margin: 60px auto;
`;

const ButtonsContainer = styled(Grid)`
  grid-template-columns: repeat(auto-fit, 260px);
  grid-gap: 20px;
  margin: 30px 0 0;
`;

const MessengerAction = styled.button`
  height: 50px;
  color: #fff;
  font-size: 20px;
  padding: 10px 0;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;

const ShuffleButton = styled(MessengerAction)`
  background-color: var(--primary-color);

  &:hover {
    background-color: var(--primary-dark);
  }
`;

const MembersButton = styled(MessengerAction)`
  width: 100%;
  background-color: var(--secondary-color);

  &:hover {
    background-color: var(--secondary-dark);
  }
`;
