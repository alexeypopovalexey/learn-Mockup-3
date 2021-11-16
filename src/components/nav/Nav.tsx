import React, { useState } from 'react';
import { Contacts } from '../contacts';
import img from '../../assets/images';

import './Nav.scss';

const Nav = () => {
  const [openBurger, setOpenBuger] = useState(false);
  const handleBurgerClick = () => {
    setOpenBuger(!openBurger);
  };

  const [openContacts, setOpenContacts] = useState(false);
  const handleContacts = () => {
    setOpenContacts(!openContacts);
  };

  return (
    <>
      <button
        className="header__nav--burger burger"
        type="button"
        onClick={handleBurgerClick}
      >
        <span className="burger__line"> </span>
      </button>
      <nav
        className={`header__nav ${openBurger ? ' ' : 'header__nav--disactive'}`}
      >
        <ul className="header__nav--list ">
          <li className="header__nav--elem">
            <a
              href="#about"
              className="header__nav--link header__nav--activate "
            >
              About
            </a>
          </li>
          <li className="header__nav--elem">
            <a
              href="#products"
              className="header__nav--link header__nav--activate "
            >
              Products
            </a>
          </li>
          <li className="header__nav--elem">
            <a
              href="#pricing"
              className="header__nav--link header__nav--activate "
            >
              Pricing
            </a>
          </li>
          <li className="header__nav--elem">
            <a
              href="#blog"
              className="header__nav--link header__nav--activate "
            >
              Blog
            </a>
          </li>
          <li className="header__nav--elem">
            <a
              href="#jobs"
              className="header__nav--link header__nav--activate "
            >
              Jobs
            </a>
          </li>
          <li className="header__nav--elem header__nav--more">
            <a
              href="#more"
              className="header__nav--link header__nav--activate "
              onClick={handleContacts}
            >
              More
              <button className="header__nav--btn" type="button">
                <img src={img.arrow} alt="Arrow" />
              </button>
            </a>
          </li>
          <Contacts stateContacts={openContacts} />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
