/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../form-dropdown';
import img from '../../assets/images';

import './Form-main.scss';

type Inputs = {
  name: string;
  surname: string;
  education: string;
  timing: string;
  expirience: string;
};

const FormMain = () => {
  const varFirstDropdown: string[] = ['KhNAI', 'KhNURE', 'KhPI'];
  const varSecondDropdown: string[] = [
    'Wed and Frid',
    'Sun and Sat',
    'Tues and Thur',
  ];

  const [checkBox, setCheckBox] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {};
  return (
    <div className="form__main">
      <form className="form__block" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__block--container">
          <h3 className="form__block--title">
            <span className="form__star">*</span>
            Name:
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            {...register('name', {
              pattern: /^[A-Za-z]/,
              minLength: 3,
              required: true,
            })}
            className={`form__block--input ${
              errors.name ? 'form__disvalid' : 'form__valid'
            }`}
          />
        </div>
        <div className="form__block--container">
          <h3 className="form__block--title">
            <span className="form__star">*</span>
            Surnam:
          </h3>
          <input
            type="text"
            placeholder="Your Surname"
            {...register('surname', {
              pattern: /^[A-Za-z]/,
              minLength: 3,
              required: true,
            })}
            className={`form__block--input ${
              errors.surname ? 'form__disvalid' : 'form__valid'
            }`}
          />
        </div>
        <div className="form__block--container">
          <h3 className="form__block--title">
            <span className="form__star">*</span>
            Education
            <img src={img.quastionIcon} alt="Tooltip" className="form__icon" />:
            <div className="form__block--tooltip">
              Distinctively monetize cost effective networks for cross-media
              bandwidth
            </div>
          </h3>
          <Dropdown props={varFirstDropdown} />
        </div>
        <div className="form__block--container">
          <h3 className="form__block--title">
            <span className="form__star">*</span>
            Timing
            <img src={img.quastionIcon} alt="Tooltip" className="form__icon" />:
            <div className="form__block--tooltip">
              Distinctively monetize cost effective networks for cross-media
              bandwidth
            </div>
          </h3>
          <Dropdown props={varSecondDropdown} />
        </div>
        <div className="form__block--container">
          <h3 className="form__block--title">
            <span className="form__star">*</span>
            Expirience
            <img src={img.quastionIcon} alt="Tooltip" className="form__icon" />:
            <div className="form__block--tooltip">
              Distinctively monetize cost effective networks for cross-media
              bandwidth
            </div>
          </h3>
          <textarea
            id="epirience"
            placeholder="Your Name"
            {...register('expirience', {
              minLength: 4,
              maxLength: 150,
              required: true,
            })}
            className={`form__block--input ${
              errors.expirience ? 'form__disvalid' : 'form__valid'
            }`}
          />
        </div>
        <div className="form__accept">
          <input
            type="checkbox"
            name="accept"
            id="accept"
            className="form__accept--disable"
            onChange={(event) => {
              setCheckBox(event.target.checked);
            }}
          />
          <label htmlFor="accept" className="form__accept--input" />
          <p className="form__accept--text">
            <span className="form__star">*</span>I give consent to the
            processing of my personal data given in the contact form above under
            the terms and conditions of Grid Dynamics{' '}
            <a href="#" className="form__accept--link">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <button
          type="submit"
          disabled={
            !(!errors.name && !errors.surname && !errors.expirience && checkBox)
          }
          className="form__btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormMain;
