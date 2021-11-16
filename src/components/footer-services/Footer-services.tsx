import React from 'react';

import '../footer-quick-links/Footer-quick-links.scss';

const FooterServices = () => (
  <div className="footer__quick-links">
    <h3 className="footer__quick-links--title">Services</h3>
    <ul className="footer__quick-links--list">
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          UX/UI Design
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          App Development
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          Web Development
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          Quality Assurance
        </a>
      </li>
      <li className="footer__quick-links--elem">
        <a href="#" className="footer__quick-links--link">
          Machine Learning
        </a>
      </li>
    </ul>
  </div>
);

export default FooterServices;
