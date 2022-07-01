/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/function-component-definition */
import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='imgage/img-3.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;