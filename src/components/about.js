import React from 'react';
import styled from 'styled-components';
import { Card, cardTools } from 'decor/card';
import { Basics, Stick, Paragraph } from 'decor';
import profile from 'data/images/profile.jpg';
import { content, links } from 'data';
import { EduFill, StackFill } from 'components/svg';

const AboutContainer = styled.div`
  position: relative;
  border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  height: 50vh;
  margin-top: 40vh;
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
  border: 1px solid blue;
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
`;
const BodyContainer = styled.div`
  border: 1px solid white;
  margin-left: 50px;
  width: 40%;
`;
const BodyText = styled(Paragraph)`
  border: 1px solid white;
  color: white;
  width: 100%;
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
const Svg = styled.div`
position: relative;
border: 1px solid white;
padding-right: 50px;
&:hover,
&:focus {
  transform: translateY(-10px);
  transition: ${Basics.transition};
}
svg {
  fill: #ffffff;
  width: 100px;
  height: 100px;
}
`;

const Stack = styled.div`
position: relative;
border: 1px solid white;
width: 10%;
height: 10%;
&:hover,
&:focus {
  transform: translateY(-10px);
  transition: ${Basics.transition};
}
svg {
  fill: #ffffff;
  width: 50px;
  height: 50px;
}
`;
const StackLink = styled.a`
position: relative;
padding: 15px;
&:hover,
&:focus {
  svg {
    fill: ${Basics.colors.blueBird};
  }
}
svg {
  fill: #ffffff;
  width: 50px;
  height: 50px;
}
`;
const StackContainer = styled.div`
  border: 1px solid white;
  height: 20vh;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0px 0px 0px;
`;

const EduContainer = styled.div`
  display: flex;
  border: 1px solid white;
  margin: 0;
`;
const Link = styled.a`
position: relative;
color: inherit;
&:hover,
&:focus {
  svg {
    fill: ${Basics.colors.blueBird};
  }
}
svg {
  fill: #ffffff;
  width: 120px;
  height: 120px;
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
  const education = links.eduLinks.map(
    (item, i) => <Svg key={i}>
      <Link
        href={item.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={item.name}>
        <EduFill name={item.name} url={item.url} />
      </Link>
    </Svg>,
  );
  const stacks = links.stackLinks.map(
    (item, i) => <Stack key={i}>
      <StackLink key={i}
    href={item.url}
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label={item.name}>
    <StackFill name={item.name} url={item.url} />
  </StackLink>
      </Stack>,
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
          {content.about.body2}
        </BodyText>
        <StackContainer>
          {stacks}
        </StackContainer>
      </BodyContainer>
    </AboutContainer>
  );
};

export default About;
