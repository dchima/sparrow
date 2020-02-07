import React from 'react';
import styled from 'styled-components';
import { Card, cardTools } from 'decor/card';
import {
  Basics,
  Stick,
  Paragraph,
  Screen,
} from 'decor';
import profile from 'data/images/profile.jpeg';
import { content, links } from 'data';
import { EduFill, StackFill } from 'components/svg';

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  //border: 1px solid blue;
  flex-wrap: wrap;
  padding-top: 40vh;
  width: 100%;
  ${Screen.tablet`
    padding-top: 10vh;
    width: 100%;
  `};
  ${Screen.largePhone`
  width: 99%;
`};
`;
const VerticalLine = styled(Stick)`
  postition: relative;
  opacity: 0;
  height: 40vh;
  margin: 50px 0px 0px 120px; 
`;
const ProfileContainer = styled.div`
  position: relative;
  margin: 0px 0px 0px 300px;
  width: 13%;
  height: 50%;
  &:hover #card0{
    transform: translate(60px, 120px);
    transition: ${Basics.transition};
  }
  &:hover #card1{
    transform: translate(40px, 80px);
    transition: ${Basics.transition};
  }
  &:hover #card2{
    transform: translate(20px, 40px);
    transition: ${Basics.transition};
  }
  ${Screen.tablet`
    margin: -60px 0px 0px 150px;
    #card0{ transform: translate(60px, 120px); }
    #card1{ transform: translate(40px, 80px); }
    #card2{ transform: translate(20px, 40px); }
  `};
  ${Screen.largePhone`
  margin: -80px 0px 0px 15px;
  `};
  ${Screen.smallPhone`
  margin: -80px 0px 0px -15px;
  `};
`;
const BodyContainer = styled.div`
  margin-left: 50px;
  text-align: center;
  width: 40%;
  ${Screen.largeScreen`
    margin: -80px 0px 0px 50px;
    width: 80%;
  `};
  ${Screen.largePhone`
    margin: 50px 0px 0px 0px;
    text-align: center;
    width: 88%;
    padding: 0px 20px;
  `};
`;
const BodyText = styled(Paragraph)`
  text-align: left;
  width: 100%;
  ${Screen.largeScreen`
    font-size: 20px;
  `};
  ${Screen.largePhone`
  font-size: 16px;
`};
`;
const Dec = styled(Card)`
  position: relative;
  border: 2px solid white;
  border-radius: 10px;
  transition: all 0.25s ease-in-out;
`;
const Profile = styled(Card)`
  position: relative;
  border: 2px solid white;
  border-radius: 10px;
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
const EduItem = styled.div`
  position: relative;
  padding-right: 50px;
  &:hover,
  &:focus {
    transform: translateY(-10px);
    transition: ${Basics.transition};
  }
`;

const StackItem = styled.div`
  position: relative;
  &:hover,
  &:focus {
    transform: translateY(-10px);
    transition: ${Basics.transition};
  }
`;
const StackLink = styled.a`
  position: relative;
  display: flex;
  padding: 15px;
  &:hover,
  &:focus {
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${Basics.colors.fadedRed};
    width: 50px;
    height: 50px;
  }
  ${Screen.tablet`
    svg {
      width: 50px;
      height: 50px;
    }
  `};
  ${Screen.largePhone`
    svg {
      width: 55px;
      height: 60px;
    }
  `};

  ${Screen.phone`
    svg {
      width: 45px;
      height: 45px;
    }
  `};

  ${Screen.smallPhone`
    svg {
      width: 60px;
      height: 60px;
    }
  `};
`;
const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0px 0px 0px;
  ${Screen.largePhone`
    width: 100%;
  `};
`;

const EduContainer = styled.div`
  display: flex;
  margin: 0;
  ${Screen.phone`
    padding: 0px;
  `};
`;
const EduLink = styled.a`
  position: relative;
  &:hover,
  &:focus {
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${Basics.colors.fadedRed};
    width: 120px;
    height: 120px;
  }
  ${Screen.tablet`
    svg {
      width: 100px;
      height: 100px;
    }
  `};
  ${Screen.largePhone`
    svg {
      width: 90px;
      height: 90px;
    }
  `};

  ${Screen.phone`
    svg {
      width: 62px;
      height: 74px;
    }
  `};
  ${Screen.smallPhone`
  svg {
    width: 50px;
    height: 74px;
  }
`};

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
  const education = links.eduLinks.map(
    (item, i) => <EduItem key={i}>
      <EduLink
        href={item.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={item.name}>
        <EduFill name={item.name}/>
      </EduLink>
    </EduItem>,
  );
  const stacks = links.stackLinks.map(
    (item, i) => <StackItem key={i}>
      <StackLink key={i}
    href={item.url}
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label={item.name}>
    <StackFill name={item.name} />
  </StackLink>
      </StackItem>,
  );

  return (
    <AboutContainer id='about'>
      <ProfileContainer>
        {cards}
        <Profile id='profile'>
          <img style={image} src={profile} alt='logo' />
        </Profile>
      </ProfileContainer>
      <VerticalLine />
      <BodyContainer>
        <BodyText>
          {content.about.body1}
        </BodyText>
        <EduContainer>
          {education}
        </EduContainer>
        <BodyText>
          {content.about.body3}
        </BodyText>
        <StackContainer>
          {stacks}
        </StackContainer>
      </BodyContainer>
    </AboutContainer>
  );
};

export default About;
