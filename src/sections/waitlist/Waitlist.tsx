import React from 'react';
import { Wrapper, WaitlistForm } from '../../components';
import img from '../../assets/images';

import './Waitlist.scss';

const Waitlist = () => (
  <div className="waitlist">
    <Wrapper>
      <div className="waitlist__container">
        <div className="waitlist__icon">
          <img
            src={img.waitlistIcon}
            alt="Icon message"
            className="waitlist__icon--image"
          />
        </div>
        <div className="waitlist__content">
          <h2 className="waitlist__title">
            Join 569 more people in the waitlist
          </h2>
          <WaitlistForm />
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Waitlist;
