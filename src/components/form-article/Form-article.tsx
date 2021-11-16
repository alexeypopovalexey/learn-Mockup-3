import React from 'react';
import img from '../../assets/images';

import './Form-article.scss';

const FormArticle = () => (
  <div className="form__article">
    <h2 className="form__article--title">Would you like to join?</h2>
    <div className="form__text--wrapper">
      <p className="form__text--content">
        Quickly get three quotes from these local that people love in online
        reviews.
      </p>
      <span className="form__text--line"> </span>
    </div>
    <div className="form__text--wrapper">
      <p className="form__text--content">
        Pick the whose estimate suits you best.
      </p>
      <span className="form__text--line"> </span>
    </div>
    <div className="form__text--wrapper">
      <p className="form__text--content">
        We then make sure the work i done to your complete satisfaction.
      </p>
    </div>
    <img src={img.formImage} alt="Icon CV" className="form__article--image" />
  </div>
);

export default FormArticle;
