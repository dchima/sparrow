import React from 'react';
import styled from 'styled-components';
import { Basics, Paragraph, Screen } from 'decor';
import { SvgGithub, SvgDocument, SvgExternalLink } from 'components/svg';
import { StackFill } from './svg';


const Card = styled.div`
  border: 1px solid white;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 330px;
  width: 280px;
  background-color: ${Basics.colors.chalkRed};
  ${Screen.largeScreen`
   margin: 10px;
  `};
  ${Screen.tablet`
    width: 330px;
  `};
  ${Screen.largePhone`
    width: 100%;
`};

`;

const ContentContainer = styled.div`
  //border: 1px solid blue;
  padding: 10px 20px;
  ${Screen.largeScreen`
  padding: 10px 20px;
  `};
  ${Screen.tablet`
  padding: 40px 20px;
  `};
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
  height: 15vh;
  ${Screen.largeScreen`
  height: 10vh;
`};
${Screen.smallPhone`
  height: 15vh;
`};
  color: ${Basics.colors.fadedRed};
`;

const Redirects = styled.div`
  //border: 1px solid green;
`;
const Link = styled.a`
  position: relative;
  float: left;
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
  //border: 1px solid yellow;
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
        {content.externalLink
          && <Item>
            <Link
              arial-label='link'
              href={content.externalLink}
              target="_blank">
              <SvgExternalLink />
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
