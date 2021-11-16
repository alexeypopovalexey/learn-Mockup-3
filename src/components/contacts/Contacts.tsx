import React from 'react';
import img from '../../assets/images';

import './Contacts.scss';

interface IPropsContacts {
  stateContacts: boolean;
}

const Contacts = (props: IPropsContacts) => {
  const { stateContacts } = props;
  return (
    <div
      className={`contacts__wrapper ${
        stateContacts ? ' ' : 'contacts__off-dropdown'
      }`}
    >
      <ul className="contacts__list">
        <li className="contacts__elem">
          <div className="contacts__icon--wrapper">
            <img
              src={img.message}
              alt="hello@landify.com"
              className="contacts__icon"
            />
          </div>
          <a href="mailto:hello@landify.com" className="contacts__link">
            hello@landify.com
          </a>
        </li>
        <li className="contacts__elem">
          <div className="contacts__icon--wrapper">
            <img
              src={img.mobile}
              alt="Mobile icon"
              className="contacts__icon"
            />
          </div>
          <a href="tel:+91 98765 43210" className="contacts__link">
            +91 98765 43210
          </a>
        </li>
        <li className="contacts__elem">
          <div className="contacts__icon--wrapper">
            <img
              src={img.location}
              alt="Location icon"
              className="contacts__icon"
            />
          </div>
          <span className="contacts__link">
            772 Lyonwood Ave Walnut, CA 91789
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
