import React from 'react';
import styled from 'styled-components';
import { SvgReact } from 'components/svg';
import { Header, GlobalStyle } from 'decor';

/**
 * Testing routing on 404 page. This code will change later
 * to reflect a proper 404 error page.
 */
const Pop = styled(Header)`
  position: relative;
`;
const Svg = styled.div`
svg {
  fill: #000000;
  width: 500px;
  height: 500px;
}
`;
function App() {
  return (
    <div>
    <GlobalStyle />
    <div className="App">
      <Pop>
        <Svg>
          <SvgReact />
        </Svg>
        <p>
          404 error.
        </p>
      </Pop>
    </div>
    </div>
  );
}

export default App;
