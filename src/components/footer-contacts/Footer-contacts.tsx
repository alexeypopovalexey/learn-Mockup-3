import React from 'react';
import img from '../../assets/images';

import './Footer-contacts.scss';

const FooterContacts = () => (
  <div className="footer__contacts">
    <h3 className="footer__contacts--title">Reach us</h3>
    <ul className="footer__contacts--list">
      <li className="footer__contacts--elem">
        <a href="email:hello@landify.co" className="footer__contacts--link">
          <div className="footer__wrapper--icon">
            <img
              src={img.message}
              alt="Icon email"
              className="footer__contacts--icon"
            />
          </div>
          hello@landify.co
        </a>
      </li>
      <li className="footer__contacts--elem">
        <a href="tell:+91 98765 43210" className="footer__contacts--link">
          <div className="footer__wrapper--icon">
            <img
              src={img.mobile}
              alt="Icon tell"
              className="footer__contacts--icon"
            />
          </div>
          +91 98765 43210
        </a>
      </li>
      <li className="footer__contacts--elem">
        <a href="#" className="footer__contacts--link">
          <div className="footer__wrapper--icon">
            <img
              src={img.location}
              alt="Icon location"
              className="footer__contacts--icon"
            />
          </div>
          772 Lyonwood Ave Walnut, CA 91789
        </a>
      </li>
    </ul>
  </div>
);

export default FooterContacts;
