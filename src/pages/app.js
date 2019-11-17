import React from 'react';
// import styled from 'styled-components';
import { GlobalStyle } from 'decor';
import {
  Start,
  Nav,
  Socials,
  About,
} from 'components';

const App = () => (
    <div>
      <GlobalStyle />
      <Start />
      <About />
      <Nav />
      <Socials />
    </div>
);

export default App;
