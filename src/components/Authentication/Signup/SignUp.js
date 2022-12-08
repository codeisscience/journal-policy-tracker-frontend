/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  FormContentRight,
  FormDiv,
  FormH1,
  FormInputs,
  FormInputsP,
  FormLabel,
  FormInput,
  FormInputBtn,
  FormInputLogin,
} from '../styles.js';
import { signup } from '../../../config/content';
import REGISTER from '../../../graphql/mutation/register';
import { toErrorMap } from '../../../utils/toErrorMap';

const FormSignup = () => {
  const [register, { loading, error }] = useMutation(REGISTER);
  const history = useNavigate();

  const [isFullNameError, setIsFullNameError] = useState(false);
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [fullNameErrorMessage, setIsFullNameErrorMessage] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const resetErrorStateValues = () => {
    setIsFullNameError(false);
    setIsUsernameError(false);
    setIsEmailError(false);
    setIsPasswordError(false);
    setIsFullNameErrorMessage('');
    setUsernameErrorMessage('');
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    resetErrorStateValues();
    const data = new FormData(event.currentTarget);

    const fullName = data.get('fullName');
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');

    const response = await register({
      variables: {
        userInfo: { fullName, username, email, password },
      },
    });

    if (response.data?.register.errors) {
      const errorMapped = toErrorMap(response.data.register.errors);
      if (errorMapped.fullName) {
        setIsFullNameErrorMessage(errorMapped.fullName);
        setIsFullNameError(true);
      }
      if (errorMapped.username) {
        setUsernameErrorMessage(errorMapped.username);
        setIsUsernameError(true);
      }
      if (errorMapped.email) {
        setEmailErrorMessage(errorMapped.email);
        setIsEmailError(true);
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailErrorMessage('Invalid email');
        setIsEmailError(true);
      }
      if (errorMapped.password) {
        setPasswordErrorMessage(errorMapped.password);
        setIsPasswordError(true);
      }
      if (!password) {
        setPasswordErrorMessage('Password required');
        setIsPasswordError(true);
      }
      if (password.length < 6) {
        setPasswordErrorMessage('Password needs to be 6 characters or more');
        setIsPasswordError(true);
      }
    } else if (response.data.register.user) {
      resetErrorStateValues();
      history.push('/journal');
    }
  };

  return (
    <FormContentRight>
      <FormDiv onSubmit={handleSubmit1}>
        <FormH1>{signup.head}</FormH1>
        <FormInputs>
          <FormLabel htmlFor='fullName'>Enter Full Name</FormLabel>
          <FormInput id='fullName' label='Username' type='text' name='fullName' required />
          {isFullNameError && <FormInputsP>{fullNameErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='username'>{signup.labelUsername}</FormLabel>
          <FormInput id='username' label='Username' type='text' name='username' required />
          {isUsernameError && <FormInputsP>{usernameErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='email'>{signup.labelEmail}</FormLabel>
          <FormInput id='email' label='Email Address' type='email' name='email' required />
          {isEmailError && <FormInputsP>{emailErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='password'>{signup.labelPassword}</FormLabel>
          <FormInput id='password' label='Password' type='password' name='password' required />
          {isPasswordError || <FormInputsP>{passwordErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputBtn type='submit'>{signup.button}</FormInputBtn>
        <FormInputLogin>
          {signup.login}{' '}
          <a href='/login' style={{ color: 'orange' }}>
            here
          </a>
        </FormInputLogin>
      </FormDiv>
    </FormContentRight>
  );
};

export default FormSignup;
