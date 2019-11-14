import React from 'react';
import styled from 'styled-components';
import { Basics } from 'decor';
import { SvgSparrow } from 'components/svg';
import { links } from 'data';

const NavContainer = styled.div`
  position: fixed;
  height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: cener;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  transition: ${Basics.transition};
`;

const Svg = styled.header`
  position: absolute;
  padding-top: 30px;
  left: 50px;
  &:hover,
  &:focus {
    svg {
      fill: ${Basics.colors.blueBird};
    }
  }
  svg {
    fill: #ffffff;
    width: 60px;
    height: 60px;
  }
`;
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: ${Basics.transition};
  }
  .hidden {
    visibility: hidden;
    transition: ${Basics.transition};
    transform: translate(0, -100%);
  }
`;
const ListContainer = styled.div`
  position: absolute;
  right: 50px;
  transform: rotate(-90deg);
  font-weight: bold;
`;
const NavList = styled.div`
  background-color: white;
  height: 23px;
  margin: 10px;
  width: 15vh;
  &:hover,
  &:focus {
    background-color: ${Basics.colors.blueBird};
    transform: translateX(-10px);
    transition: ${Basics.transition};
  }
`;
const Link = styled.a`
  font-size: ${Basics.fontSize.xsmall}
  text-decoration: none;
  color: black;
  padding: 5px 30px;
`;

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPosition: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollPosition } = this.state;
    this.setState({
      scrollPosition: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPosition,
    });
  }

  render() {
    const navs = links.navLinks.map(
      (item, i) => <NavList key={i}>
        <Link href={item.url}>{item.name}</Link>
      </NavList>,
    );
    return (
      <Transition>
        <NavContainer className={this.state.show ? 'active' : 'hidden'}>
          <Svg>
            <a href={'#start'}>
              <SvgSparrow />
            </a>
          </Svg>
          <ListContainer>
            {navs}
          </ListContainer>
        </NavContainer>
      </Transition>
    );
  }
}