import React from 'react';
import styled from 'styled-components';
import { Card, cardTools } from 'decor/card';
import { Basics } from 'decor';
import profile from 'data/images/profile.jpg';

const AboutContainer = styled.div`
  position: relative;
  height: 50vh;
 // border: 1px solid white;
  margin-top: 40vh;
  display: flex;
`;

const ProfileContainer = styled.div`
  position: relative;
  margin: 0px 0px 0px 300px;
  width: 13%;
  height: 50%;
  &:hover #card0{
    transform: translate(60px, 90px);
    transition: ${Basics.transition};
  }
  &:hover #card1{
    transform: translate(40px, 60px);
    transition: ${Basics.transition};
  }
  &:hover #card2{
    transform: translate(20px, 30px);
    transition: ${Basics.transition};
  }
`;
const Dec = styled(Card)`
  position: relative;
  transition: all 0.25s ease-in-out;
`;
const Profile = styled(Card)`
  position: relative;
  overflow: hidden;
  margin: 0px 0px 0px 90px;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
  &:hover #card2{
    transform: translate(10px, 10px);
    transition: ${Basics.transition};
  }
`;

const image = {
  height: '100%',
  width: '100%',
};

const dec = (item) => ({
  margin: `0px 0px -13.9em ${item.margin}`,
  backgroundColor: `${item.color}`,
});

const About = () => {
  const cards = cardTools.style.map(
    (item, i) => <Dec key={i} id={`card${i}`}
      style={dec(item)}
      />,
  );
  return (
    <AboutContainer id='about'>
      <ProfileContainer>
        {cards}
        <Profile id='profile'>
          <img style={image} src={profile} alt='logo' />
        </Profile>
      </ProfileContainer>
    </AboutContainer>
  );
};

export default About;
