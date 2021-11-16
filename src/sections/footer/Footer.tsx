import React from 'react';
import {
  Wrapper,
  FooterContent,
  FooterQuickLinks,
  FooterServices,
  FooterContacts,
  FooterSubFooter,
} from '../../components';
import img from '../../assets/images';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <Wrapper>
      <div className="footer__container">
        <div className="footer__main">
          <FooterContent />
          <FooterQuickLinks />
          <FooterServices />
          <FooterContacts />
          <div className="footer__bg">
            <img
              src={img.footerBG}
              alt="Footer background"
              className="footer__bg--image"
            />
          </div>
        </div>
        <div className="footer__subfooter">
          <div className="footer__subfooter--copypast">
            © 2020 Landify UI Kit. All rights reserved
          </div>
          <FooterSubFooter />
        </div>
      </div>
    </Wrapper>
  </footer>
);

export default Footer;
