import React from 'react';
import styled from 'styled-components';
import { content } from 'data';
import ProjectCard from './projectCard';


const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 60vh;
  //border: 1px solid white;
  margin-top: 30vh;
`;

const FirstCardContainer = styled.div`
  //border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 160px;
  width: 100%;
`;

const Project = () => {
  const firstbatch = content.project1.map(
    (item, i) => <ProjectCard key={i}
    content={item} />,
  );
  return (
    <ProjectContainer>
      <FirstCardContainer>
        {firstbatch}
      </FirstCardContainer>
    </ProjectContainer>
  );
};

export default Project;
