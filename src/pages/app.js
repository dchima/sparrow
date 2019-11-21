import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from 'decor';
import {
  Start,
  Nav,
  Socials,
  About,
  Project,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  //border: 1px solid white;
`;

const App = () => (
    <AppContainer>
      <GlobalStyle />
      <Start />
      <About />
      <Project />
      <Nav />
      <Socials />
    </AppContainer>
);

export default App;
