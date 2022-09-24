/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import FormSignup from './SignUp';
import FormSuccess from '../FormSuccess';
import { FormContainer, FormContentLeft, FormImg, RightH2, Logo } from '../styles.js';
import { signup } from '../../../config/content';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <FormContainer>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        <FormContentLeft>
          <Logo src={signup.logo.src} alt={signup.logo.alt} />
          <RightH2>{signup.formHead}</RightH2>
          <FormImg src={signup.img.src} alt={signup.img.alt} />
        </FormContentLeft>
      </FormContainer>
    </>
  );
};

export default Form;
