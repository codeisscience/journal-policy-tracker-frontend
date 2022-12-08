/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signup } from '../../../config/content';
import LOGIN from '../../../graphql/mutation/login';
import { toErrorMap } from '../../../utils/toErrorMap';
import {
  ButtonContainer,
  FormContentRight,
  FormDiv,
  FormH1,
  FormH2,
  FormInput,
  FormInputBtn,
  FormInputs,
  FormInputsP,
  FormLabel,
} from './styles';

const FormLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN);
  const history = useNavigate();

  const [isUsernameOrEmailError, setIsUsernameOrEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [usernameOrEmailErrorMessage, setUsernameOrEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const resetErrorStateValues = () => {
    setIsUsernameOrEmailError(false);
    setIsPasswordError(false);
    setUsernameOrEmailErrorMessage('');
    setPasswordErrorMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    resetErrorStateValues();
    const data = new FormData(event.currentTarget);

    const usernameOrEmail = data.get('email');
    const password = data.get('password');

    const response = await login({
      variables: {
        userInfo: { usernameOrEmail, password },
      },
    });

    if (response.data?.login.errors) {
      const errorMapped = toErrorMap(response.data.login.errors);
      if (errorMapped.usernameOrEmail) {
        setUsernameOrEmailErrorMessage(errorMapped.usernameOrEmail);
        setIsUsernameOrEmailError(true);
      }
      if (!/\S+@\S+\.\S+/.test(usernameOrEmail)) {
        setUsernameOrEmailErrorMessage('Invalid email');
        setIsUsernameOrEmailError(true);
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
    } else if (response.data?.login.user) {
      resetErrorStateValues();
      history.push('/journal');
    }
  };

  return (
    <FormContentRight>
      <FormDiv onSubmit={handleSubmit}>
        <FormH1>{signup.head}</FormH1>
        <FormH2>{signup.head2}</FormH2>
        <FormInputs>
          <FormLabel htmlFor='email'>{signup.labelEmail}</FormLabel>
          <FormInput id='email' label='Email Address' type='email' name='email' />
          {isUsernameOrEmailError && <FormInputsP>{usernameOrEmailErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='password'>{signup.labelPassword}</FormLabel>
          <FormInput id='password' label='Password' type='password' name='password' />
          {isPasswordError && <FormInputsP>{passwordErrorMessage}</FormInputsP>}
        </FormInputs>
        <ButtonContainer>
          <FormInputBtn type='submit'>{signup.buttonLogin}</FormInputBtn>
          <FormInputBtn primary type='button'>
            <Link to='/Signup' style={{ color: '#EA8900', hover: '#fff' }}>
              {signup.button}
            </Link>
          </FormInputBtn>
        </ButtonContainer>
      </FormDiv>
    </FormContentRight>
  );
};

export default FormLogin;
