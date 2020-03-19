import React from 'react';
import styled from 'styled-components';
import { Screen, Basics } from 'decor';
import { content } from 'data';
import ProjectCard from './projectCard';


const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  //border: 1px solid green;
  padding-top: 30vh;
  ${Screen.tablet`
    width: 100%;
  `};

  ${Screen.smallPhone`
  margin-top: 90vh;
  `}
`;

const Batch = styled.div`
  //border 1px solid blue;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 60px 0px 60px 200px;
  ${Screen.largeScreen`
    padding: 60px 0px 60px 40px;
  `};
  ${Screen.tablet`
    padding: 100px 20px;
  `};

`;
const Batch2 = styled.div`
  //border 1px solid orange;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 60px 0px 60px 100px;
  ${Screen.largeScreen`
    padding: 60px 0px 60px 40px;
  `};
  ${Screen.tablet`
  padding: 10px 20px;
`};
`;

const Title = styled.h1`
  color: ${Basics.colors.chalkRed};
  font-weight: 900;
  line-height: 45px;
  font-size: 50px;
  //border: 1px solid white;

  ${Screen.smallPhone`
    font-size: 30px;
  `};
`;
const CardContainer = styled.div`
  position: relative;   
  //border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  ${Screen.tablet`
  width: 100%;
  `};
`;

const Project = () => {
  const firstbatch = content.project1.map(
    (item, i) => <ProjectCard key={i}
    content={item} />,
  );
  const secondbatch = content.project2.map(
    (item, i) => <ProjectCard key={i}
    content={item} />,
  );
  return (
    <ProjectContainer id='project'>
      <Batch>
        <Title>
          API’s, <br/> WEB &<br/> iOS APPS
        </Title>
        <CardContainer>
          {firstbatch}
        </CardContainer>
      </Batch>
      <Batch2>
        <Title>
          MICROCHIPS <br/> &<br/> ROBOTICS
        </Title>
        <CardContainer>
          {secondbatch}
        </CardContainer>
      </Batch2>
    </ProjectContainer>
  );
};

export default Project;
