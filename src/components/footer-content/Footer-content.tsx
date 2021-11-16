import React from 'react';
import img from '../../assets/images';

import './Footer-content.scss';

const FooterContent = () => (
  <div className="footer__first-block">
    <img src={img.logo} alt="logo" className="footer__first-block--logo" />
    <p className="footer__first-block--content">
      Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam
      ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
    </p>
    <ul className="footer__first-block--list">
      <li className="footer__first-block--network">
        <a
          href="https://www.instagram.com/"
          className="footer__first-block--link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={img.instaIcon}
            alt="Instagram logo"
            className="footer__first-block--icon"
          />
        </a>
      </li>
      <li className="footer__first-block--network">
        <a
          href="https://dribbble.com/"
          className="footer__first-block--link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={img.ballIcon}
            alt="Ball logo"
            className="footer__first-block--icon"
          />
        </a>
      </li>
      <li className="footer__first-block--network">
        <a
          href="https://twitter.com/"
          className="footer__first-block--link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={img.twitterIcon}
            alt="Twitter logo"
            className="footer__first-block--icon"
          />
        </a>
      </li>
      <li className="footer__first-block--network">
        <a
          href="https://www.youtube.com/"
          className="footer__first-block--link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={img.youtubeIcon}
            alt="YouTube logo"
            className="footer__first-block--icon"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default FooterContent;
