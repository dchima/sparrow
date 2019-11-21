import React from 'react';
import styled from 'styled-components';
import { Basics, Paragraph } from 'decor';
import { SvgGithub, SvgDocument } from 'components/svg';
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
  color: white;
  font-weight: 900;
  font-size: 23px;
  //border: 1px solid white;
  padding-top: 60px;
`;

const BodyText = styled(Paragraph)`
  //border: 1px solid white;
  font-weight: 900;
  font-size: 14px;
  height: 10vh;
  color: ${Basics.colors.fadedRed};
`;

const Redirects = styled.div`
  //border: 1px solid green;
`;
const Link = styled.a`
  position: relative;
  float: right;
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
    width: 25px;
    height: 25px;
  }
`;

const Item = styled.div`
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
    (item, i) => <Item key={i}>
      <Link key={i}
    aria-label={item}>
    <StackFill name={item} />
  </Link>
      </Item>,
  );
  return (
    <Card>
      <ContentContainer>
      <Redirects>
        {content.github
          && <Item>
            <Link
              arial-label='repo'
              href={content.github}
              target="_blank">
              <SvgGithub />
            </Link>
          </Item>
        }
        {content.document
          && <Item>
            <Link
              arial-label='paper'
              href={content.document}
              target="_blank">
              <SvgDocument />
            </Link>
          </Item>
        }
      </Redirects>
        <Title>
            {content.title}
        </Title>
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
