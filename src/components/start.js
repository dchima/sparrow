import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUpBig, fadeInDownBig } from 'react-animations';
import {
  Basics, Title, Paragraph, Screen,
} from 'decor';
import { content } from 'data';

const animateFadeUp = keyframes`${fadeInUpBig}`;
const animateFadeDown = keyframes`${fadeInDownBig}`;

const StartContainer = styled.div`
  position: relative;
  height: 50vh;
  margin: 200px;
  ${Screen.tablet`
    margin: 200px 50px;
    width: 90%;
  `};
  ${Screen.miniTablet`
    margin: 200px 30px;
    width: 90%;
  `};
`;
const PreTitle = styled.div`
  animation: 2s ${animateFadeDown};
  background-color: white;
  position: relative;
  height: 4.5vh;
  width: 200px;
  top: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: ${Basics.fontSize.small};
  // transform: rotate(-20deg);
  ${Screen.miniTablet`
    font-size: ${Basics.fontSize.xsmall};
    width: 160px;
  `};
  ${Screen.phone`
    font-size: ${Basics.fontSize.xsmall};
  `};
  ${Screen.smallPhone`
    font-size: ${Basics.fontSize.xxsmall};
    width: 140px;
  `};
  ${Screen.largeScreen`
    width: 160px;
  `};
`;
const Name = styled(Title)`
  animation: 3s ${animateFadeUp};
  Position: relative;
  margin: 40px 0px;
  margin-bottom: 0;
  top: 20px;
  ${Screen.largeScreen`
    font-size: 130px;
  `};
  ${Screen.tablet`
    font-size: 100px;
  `};
  ${Screen.largePhone`
    font-size: 55px;
  `};
  ${Screen.phone`
  font-size: 50px;
  `};
  ${Screen.smallPhone`
  font-size: 44px;
  padding-top: 10px;
  `};
`;
const SubTitle = styled(Title)`
  animation: 3s ${animateFadeUp};
  position: relative;
  margin-top: 0;
  Position: relative;
  color: ${Basics.colors.fadedRed};
  line-height: 80%;
  padding-top: 20px;
  ${Screen.largeScreen`
  font-size: 130px;
  `};
  ${Screen.tablet`
    font-size: 100px;
  `};
  ${Screen.largePhone`
    font-size: 58px;
  `};
  ${Screen.phone`
  font-size: 56px;
  `};
  ${Screen.smallPhone`
  font-size: 44px;
  `};
`;
const BodyText = styled(Paragraph)`
  animation: 3s ${animateFadeUp};
  width: 37%;
  position: relative;
  bottom: 50px;
  padding-top: 40px;
  ${Screen.largeScreen`
    font-size: 50px;
    width: 100%;
  `};
  ${Screen.tablet`
    font-size: 30px;
    width: 80%;
  `};
  ${Screen.largePhone`
    font-size: 16px;
    width: 80%;
  `};
`;
const p = {
  padding: '10px',
};

const Start = () => (
  <StartContainer id='start'>
    <PreTitle>
      <p style={p}>Hey there, my name is</p>
    </PreTitle>
    <Name>
      {content.name}
    </Name>
    <SubTitle>
      {content.desc2}
    </SubTitle>
    <BodyText>
      {content.desc}
    </BodyText>
  </StartContainer>
);

export default Start;
