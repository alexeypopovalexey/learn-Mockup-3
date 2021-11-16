import React from 'react';

import './Footer-subfooter.scss';

const FooterSubFooter = () => (
  <ul className="subfooter__list">
    <li className="subfooter__elem">
      <a href="#" className="subfooter__link">
        Terms & Conditions
      </a>
    </li>
    <li className="subfooter__elem subfooter__elem--with-line">
      <a href="#" className="subfooter__link">
        Privacy Policy
      </a>
    </li>
    <li className="subfooter__elem subfooter__elem--with-line">
      <a href="#" className="subfooter__link">
        Sitemap
      </a>
    </li>
    <li className="subfooter__elem subfooter__elem--with-line">
      <a href="#" className="subfooter__link">
        Disclaimer
      </a>
    </li>
  </ul>
);

export default FooterSubFooter;
