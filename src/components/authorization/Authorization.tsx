import React, { useState } from 'react';
import './Authorization.scss';
import img from '../../assets/images';

const Authorization = () => {
  const [open, setOpen] = useState(false);
  const handleArrow = () => {
    setOpen(!open);
  };
  return (
    <div className="header__authorization">
      <div className="header__authorization--drop drop__wrapper ">
        <button className="drop__btn" type="button" onClick={handleArrow}>
          <img src={img.user} alt="User" className="drop__user" />
          <img
            src={img.arrow}
            alt="Arrow"
            className={`drop__arrow ${open ? 'arrow-active ' : ' '}`}
          />
        </button>
      </div>
      <div
        className={`header__authorization--wrapper ${
          open ? ' ' : 'header__authorization--disactive'
        }`}
      >
        <input
          type="button"
          value="Login in"
          className="header__authorization--btn"
        />
        <input
          type="button"
          value="Sign up"
          className="header__authorization--btn"
        />
      </div>
    </div>
  );
};

export default Authorization;
