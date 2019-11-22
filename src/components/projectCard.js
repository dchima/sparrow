import React from 'react';
import styled from 'styled-components';
import { Basics, Paragraph, Screen } from 'decor';
import { SvgGithub, SvgDocument, SvgExternalLink } from 'components/svg';
import { StackFill } from './svg';


const Card = styled.div`
  border: 2px solid ${Basics.colors.fadedRed};
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 330px;
  width: 280px;
  background-color: ${Basics.colors.black};
  &:hover,
  &:focus {
    transform: translateY(-10px);
    transition: ${Basics.transition};
  }
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
  color: ${Basics.colors.chalkRed};
  font-weight: 900;
  font-size: 23px;
  //border: 1px solid white;
  padding-top: 60px;
`;

const BodyText = styled(Paragraph)`
  //border: 1px solid white;
  font-weight: 900;
  font-size: 14px;
  ${Screen.largeScreen`
`};
${Screen.smallPhone`
`};
  color: ${Basics.colors.fadedRed};
`;

const Redirects = styled.div`
  //border: 1px solid green;
`;
const Link = styled.a`
  position: relative;
  float: left;
  padding: 5px;
  &:hover,
  &:focus {
    svg {
      fill: ${Basics.colors.white};
    }
  }
  svg {
    fill: ${Basics.colors.fadedRed};
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
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  bottom: 5px;
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
