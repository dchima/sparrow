import React from 'react';
import styled from 'styled-components';
import { Basics, Paragraph, Screen } from 'decor';
import { content } from 'data';

const ContactContainer = styled.div`
  position: relative;
  //border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 650px;
  padding: 100px 30px;
  ${Screen.largeScreen`
    margin: 0;
  `};
`;

const Title = styled.h1`
  color: ${Basics.colors.chalkRed};
  font-weight: 800;
  font-size: 100px;
  line-height: 80px;

  ${Screen.tablet`
    font-size: 80px;
`};
`;

const BodyText = styled(Paragraph)`
  text-align: center;
`;


const Link = styled.a`
  border: 2px solid ${Basics.colors.fadedRed};
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  padding: 20px 30px;
  height: 20px;
  width: 200px;
  margin-top: 50px;
  &:hover,
  &:focus {
    border: 2px solid ${Basics.colors.white};
  }
`;
const Contact = () => (
  <ContactContainer id='contact'>
    <Title>GET IN <br/>TOUCH</Title>
    <BodyText>
        {content.contactText}
    </BodyText>
    <Link href={`mailto:${content.email}`} target="_blank" rel="nofollow noopener noreferrer">
      Let's Talk
    </Link>
  </ContactContainer>
);
export default Contact;
