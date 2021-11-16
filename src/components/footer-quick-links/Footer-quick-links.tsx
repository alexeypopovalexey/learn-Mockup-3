import React from 'react';
import img from '../../assets/images';

import './Footer-quick-links.scss';

const FooterQuickLinks = () => (
  <div className="footer__quick-links">
    <h3 className="footer__quick-links--title">Quick Links</h3>
    <ul className="footer__quick-links--list">
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          Portfolio
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          Blogs
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          About
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          Press
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          Careers{' '}
          <span className="footer__quick-links--cursive">We’re hiring</span>
        </a>
      </li>
    </ul>
  </div>
);

export default FooterQuickLinks;
