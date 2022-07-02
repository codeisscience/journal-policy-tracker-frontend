
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import FormSignup from './SignUp';
import FormSuccess from '../FormSuccess';
import { FormContainer, FormContentLeft, FormImg, RightH2, Logo } from '../styles.js';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <FormContainer>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <FormContentLeft>
          <Logo src='https://res.cloudinary.com/dh6j2zoog/image/upload/v1655702059/CiS/logo_ch4fzv.png'/>
          <RightH2>Scientific Code Should Be Open</RightH2>
          <FormImg src='https://res.cloudinary.com/dh6j2zoog/image/upload/v1656711379/CiS/branding-and-marketing-for-product-of-startup-business_wdzfmj.png' alt='spaceship' />
        </FormContentLeft>
      </FormContainer>
    </>
  );
};

export default Form;