import React from 'react';
import styled from 'styled-components';
import { Basics } from 'decor';
import { SocialFill } from 'components/svg';
import { links } from 'data';


const SocialContainer = styled.div`
  width: 50px;
  height: 300px;
  right: 10px;
  bottom: 50px;
  position: fixed;
  // background-color: ${Basics.colors.chalk};
`;
const Svg = styled.div`
  margin-top: 24px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
    transition: ${Basics.transition};
  }
`;
const Link = styled.a`
position: relative;
color: inherit;
&:hover,
&:focus {
  svg {
    fill: ${Basics.colors.blueBird};
  }
}
svg {
  fill: #ffffff;
  width: 16px;
  height: 16px;
}
`;
const Socials = () => {
  const socials = links.socials.map(
    (item, i) => <Svg key={i}>
      <Link
        href={item.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={item.name}>
        <SocialFill name={item.name} url={item.url} />
      </Link>
    </Svg>,
  );
  return (
    <SocialContainer>
      {socials}
    </SocialContainer>
  );
};

export default Socials;
