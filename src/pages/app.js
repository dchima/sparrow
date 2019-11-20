import React from 'react';
// import styled from 'styled-components';
import { GlobalStyle } from 'decor';
import {
  Start,
  Nav,
  Socials,
  About,
  Project,
} from 'components';

const App = () => (
    <div>
      <GlobalStyle />
      <Start />
      <About />
      <Project />
      <Nav />
      <Socials />
    </div>
);

export default App;
