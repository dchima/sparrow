import React from 'react';
import styled from 'styled-components';
import { Basics, Paragraph } from 'decor';
import { StackFill } from './svg';

const Card = styled.div`
  border: 1px solid white;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 330px;
  width: 300px;
  background-color: ${Basics.colors.chalkRed};
`;

const ContentContainer = styled.div`
  //border: 1px solid blue;
  padding: 0px 20px;
  height: 100%;
`;

const Title = styled.h1`
  color: ${Basics.colors.bloodRed};
  font-weight: 900;
  font-size: 23px;
  //border: 1px solid white;
  padding-top: 60px;
`;

const BodyText = styled(Paragraph)`
  //border: 1px solid white;
  font-weight: 900;
  font-size: 14px;
  height: 15vh;
  color: ${Basics.colors.fadedRed};
`;

const Redirects = styled.div`
  //border: 1px solid green;
`;
const StackLink = styled.a`
  position: relative;
  display: flex;
  padding: 5px;
  &:hover,
  &:focus {
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${Basics.colors.deepRed};
    width: 30px;
    height: 30px;
  }
`;

const StackItem = styled.div`
  position: relative;
  &:hover,
  &:focus {
    transform: translateY(-5px);
    transition: ${Basics.transition};
  }
`;

const StackContainer = styled.div`
  display: flex;
  //border: 1px solid yellow;
  bottom: 0;
`;

const ProjectCard = ({ content }) => {
  const stacks = content.tools.map(
    (item, i) => <StackItem key={i}>
      <StackLink key={i}
    aria-label={item}>
    <StackFill name={item} />
  </StackLink>
      </StackItem>,
  );
  return (
    <Card>
      <ContentContainer>
        <Title>
            {content.title}
        </Title>
        <Redirects />
        <BodyText>
          {content.body}
        </BodyText>
        <StackContainer>
        {stacks}
        </StackContainer>
      </ContentContainer>
    </Card>
  );
};

export default ProjectCard;
