/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';

import './Form-dropdown.scss';

interface IPropsFormDropdown {
  props: string[];
}

const Dropdown = ({ props }: IPropsFormDropdown) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props[0]);

  return (
    <div className="dropdown__form">
      <div
        className="dropdown__form--btn"
        onClick={(event) => {
          setIsActive(!isActive);
        }}
      >
        {selected}
      </div>
      {isActive && (
        <div className="dropdown__form--content">
          {props.map((elem, index) => (
            <div
              className="dropdown__form--item"
              onClick={() => {
                setSelected(elem);
                setIsActive(false);
              }}
              key={index}
            >
              {elem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
