import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Paragraph } from 'decor';
import { SocialFill } from 'components/svg';
import { links } from 'data';

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px  10px 3px 10px;
    ${Screen.largePhone`
    padding: 100px 20px 0px 40px;
  `};
  ${Screen.phone`
    padding: 100px 20px 0px 15px;
  `};

`;

const SocialItem = styled.div`
  position: relative;
`;
const SocialLink = styled.a`
  position: relative;
  display: flex;
  padding: 16px;
  &:hover,
  &:focus {
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${Basics.colors.fadedRed};
    width: 25px;
    height: 20px;
  }
  ${Screen.smallPhone`
  padding: 15px 15px;
  svg {
    width: 20px;
    height: 20px;
  }
`};
`;
const SocialContainer = styled.div`
  display: none;
  ${Screen.largePhone`
    display: flex;
    width: 100%;
  `};
`;
const BodyText = styled(Paragraph)`
  text-align: center;
  font-size: 10px;
`;
const Footer = () => {
  const socials = links.socials.map(
    (item, i) => <SocialItem key={i}>
      <SocialLink key={i}
    href={item.url}
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label={item.name}>
    <SocialFill name={item.name} url={item.url} />
  </SocialLink>
      </SocialItem>,
  );
  return (
    <FooterContainer>
      <SocialContainer>
        {socials}
      </SocialContainer>
      <BodyText>
       © Created by Chima Daniel Nnadika
      </BodyText>
    </FooterContainer>
  );

};

export default Footer;
