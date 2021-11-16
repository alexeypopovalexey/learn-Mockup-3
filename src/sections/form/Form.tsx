import React from 'react';
import { Wrapper, FormArticle, FormMain } from '../../components';

import './Form.scss';

const Form = () => (
  <div className="form">
    <Wrapper>
      <div className="form__container">
        <FormArticle />
        <FormMain />
      </div>
    </Wrapper>
  </div>
);

export default Form;
