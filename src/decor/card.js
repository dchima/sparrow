import styled from 'styled-components';
import Basics from './basics';

export const Card = styled.div`
  height: 265px;
  width: 210px;
`;

export const cardTools = {
  style: [
    {
      margin: '0px',
      color: Basics.colors.black,
    },
    {
      margin: '30px',
      color: Basics.colors.blackRed,
    },
    {
      margin: '60px',
      color: Basics.colors.fadedRed,
    },
  ],
};
