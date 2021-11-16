import React from 'react';
import './Logo.scss';
import img from '../../assets/images';

const Logo = () => (
  <div className="header__logo header__logo--disactive">
    <img src={img.logo} alt="Logo" />
  </div>
);

export default Logo;
