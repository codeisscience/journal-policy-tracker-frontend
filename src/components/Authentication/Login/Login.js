/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import useFormLogin from './useFormLogin';
import validateLoginInfo from './validateLoginInfo.js';
import {
  FormContentRight,
  FormDiv,
  FormH1,
  FormInputs,
  FormInputsP,
  FormLabel,
  FormInput,
  FormInputBtn,
  ButtonContainer,
  FormH2,
} from './styles';
import { signup } from '../../../config/content';
import LOGIN from '../../../graphql/mutation/login';
import { toErrorMap } from '../../../utils/toErrorMap';

const FormLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN);
  const history = useHistory();

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
      // console.log(toErrorMap(response.data.login.errors));
      if (errorMapped.usernameOrEmail) {
        setUsernameOrEmailErrorMessage(errorMapped.usernameOrEmail);
        setIsUsernameOrEmailError(true);
      }

      if (errorMapped.password) {
        setPasswordErrorMessage(errorMapped.password);
        setIsPasswordError(true);
      }
    } else if (response.data?.login.user) {
      // console.log('Login Successful');
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
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='password'>{signup.labelPassword}</FormLabel>
          <FormInput id='password' label='Password' type='password' name='password' />
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
