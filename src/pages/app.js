import React from 'react';
// import styled from 'styled-components';
import { GlobalStyle } from 'decor';
import { Start, Nav, Socials } from 'components';

const App = () => (
    <div>
      <GlobalStyle />
      <Nav />
      <Socials />
      <Start />
    </div>
);

export default App;
