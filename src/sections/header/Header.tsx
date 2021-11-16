import React from 'react';
import { Nav, Logo, Authorization, Wrapper } from '../../components';
import './Header.scss';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__wrapper">
        <Logo />
        <Nav />
        <Authorization />
      </div>
    </Wrapper>
  </header>
);

export default Header;
