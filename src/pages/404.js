import React from 'react';
import styled from 'styled-components';
import { Birds } from 'components/svg';
import { GlobalStyle, Basics, Paragraph, Screen } from 'decor';

/**
 * Testing routing on 404 page. This code will change later
 * to reflect a proper 404 error page.
 */
const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Svg = styled.div`
svg {
  fill: ${Basics.colors.fadedRed};
  width: 700px;
  height: 700px;
}

${Screen.largePhone`
svg {
  width: 400px;
  height: 400px;
}
`};
`;
const BodyText = styled(Paragraph)`
  margin-top: -100px;
  text-align: center;
  font-weight: 800;
  font-size: 100px;
  line-height: 80px;
`;
function App() {
  return (
    <PageContainer>
      <GlobalStyle />
      <Svg>
          <Birds />
      </Svg>
      <BodyText>
        Page not found.
      </BodyText>
    </PageContainer>

  );
}

export default App;
