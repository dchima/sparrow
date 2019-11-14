import React from 'react';
import styled from 'styled-components';
import { Basics, Title, Paragraph } from 'decor';
import { config } from 'data';

const StartContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 70%;
  margin: 200px;
  overflow: hidden;
`;
const PreTitle = styled.div`
  background-color: white;
  position: relative;
  height: 4.5vh;
  width: 20vh;
  top: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: ${Basics.fontSize.small};
  transform: rotate(-20deg);
`;
const SubTitle = styled(Title)`
  position: relative;
  margin-top: 0;
  Position: relative;
  color: ${Basics.colors.fadedRed};
`;
const Name = styled(Title)`
  Position: relative;
  margin-bottom: 0;
  top: 20px;
`;
const BodyText = styled(Paragraph)`
  width: 37%;
  position: relative;
  bottom: 50px;
`;
const p = {
  padding: '10px',
};
const Start = () => (
  <StartContainer>
    <PreTitle>
      <p style={p}>Hey there, my name is</p>
    </PreTitle>
    <Name>
      {config.name}
    </Name>
    <SubTitle>
      {config.desc2}
    </SubTitle>
    <BodyText>
      {config.desc}
    </BodyText>
  </StartContainer>
);

export default Start;
