import { createGlobalStyle } from 'styled-components';
import Basics from './basics';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  height: 800vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  color: ${Basics.colors.fadedRed};
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${Basics.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${Basics.colors.white};
    outline: 0;
  }
}
`;

export default GlobalStyle;
