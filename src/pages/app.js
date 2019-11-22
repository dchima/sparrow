import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from 'decor';
import {
  Start,
  Nav,
  Socials,
  About,
  Project,
  Contact,
  Footer,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const App = () => (
    <AppContainer>
      <GlobalStyle />
      <Start />
      <About />
      <Project />
      <Contact />
      <Footer />
      <Nav />
      <Socials />
    </AppContainer>
);

export default App;
