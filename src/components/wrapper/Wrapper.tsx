import React from 'react';
import './Wrapper.scss';

const Wrapper: React.FC = ({ children }) => (
  <div className="wrapper">{children} </div>
);

export default Wrapper;
