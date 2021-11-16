/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

import './Waitlist-form.scss';

type Inputs = {
  email: string;
};

const WaitlistForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: (arg: any) => void = (data: any) => {
    fetch('http://localhost:3000', {
      method: 'post',
      body: data,
    })
      .then((response) => response.text)
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="waitlist__forms">
      <input
        type="text"
        id="email"
        {...register('email', {
          pattern: /^[A-Za-z]+@+[a-z]+[.]+[a-z]/,
          minLength: 5,
          required: true,
        })}
        className={`waitlist__forms--input ${
          errors.email ? 'disvalid' : 'valid'
        }`}
        placeholder="Your work email address"
      />
      <button
        type="submit"
        disabled={!!errors.email?.type}
        className="waitlist__forms--btn"
      >
        Join the waitlist
      </button>
    </form>
  );
};

export default WaitlistForm;
