import React from 'react';
import img from '../../assets/images';

import './View_all-case.scss';

const ViewAllCase = () => (
  <h4 className="view__all-case">
    <a href="#" className="view__link">
      View all case studies{' '}
      <img src={img.arrowLeanMore} alt="Arrow" className="view__link--arrow" />
    </a>
  </h4>
);

export default ViewAllCase;
