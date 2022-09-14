/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useReducer } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import useForm from './useForm';
import validate from './validateInfo';
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

const ACTIONS = {
  EMAIL_ERROR: 'emailError',
  USERNAME_ERROR: 'usernameError',
  PASSWORD_ERROR: 'passwordError',
  RESET_FORM: 'resetForm',
};

const initialState = {
  isUsernameError: false,
  isEmailError: false,
  isPasswordError: false,
  usernameErrorMessage: '',
  emailErrorMessage: '',
  passwordErrorMessage: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.EMAIL_ERROR:
      return {
        ...state,
        isEmailError: true,
        emailErrorMessage: action.payload.errorMessage,
      };

    case ACTIONS.USERNAME_ERROR:
      return {
        ...state,
        isUsernameError: true,
        usernameErrorMessage: action.payload.errorMessage,
      };

    case ACTIONS.PASSWORD_ERROR:
      return {
        ...state,
        isPasswordError: true,
        passwordErrorMessage: action.payload.errorMessage,
      };

    case ACTIONS.RESET_FORM:
      return {
        isUsernameError: false,
        isEmailError: false,
        isPasswordError: false,
        usernameErrorMessage: '',
        emailErrorMessage: '',
        passwordErrorMessage: '',
      };
  }
};

const FormSignup = ({ submitForm }) => {
  const [register, { loading, error }] = useMutation(REGISTER);

  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch({ type: ACTIONS.RESET_FORM });
    const data = new FormData(event.currentTarget);

    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');

    const response = await register({
      variables: {
        userInfo: { username, email, password, fullName: 'fullNameRegister' },
      },
    });

    if (response.data?.register.errors) {
      const errorMapped = toErrorMap(response.data.register.errors);

      if (errorMapped.email) {
        dispatch({
          type: ACTIONS.EMAIL_ERROR,
          payload: { errorMessage: errorMapped.email },
        });
      }

      if (errorMapped.password) {
        dispatch({
          type: ACTIONS.PASSWORD_ERROR,
          payload: { errorMessage: errorMapped.password },
        });
      }

      if (errorMapped.username) {
        dispatch({
          type: ACTIONS.USERNAME_ERROR,
          payload: { errorMessage: errorMapped.username },
        });
      }
    } else if (response.data?.register.user) {
      dispatch({ type: ACTIONS.RESET_FORM });
      history.push('/login');
    }
  };

  return (
    <FormContentRight>
      <FormDiv onSubmit={handleSubmit}>
        <FormH1>{signup.head}</FormH1>
        <FormInputs>
          <FormLabel htmlFor='username'>{signup.labelUsername}</FormLabel>
          <FormInput id='username' label='Username' name='username' required />
          {state.isUsernameError && <FormInputsP>{state.usernameErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='email'>{signup.labelEmail}</FormLabel>
          <FormInput id='email' label='Email Address' autoComplete='email' name='email' required />
          {state.isEmailError && <FormInputsP>{state.emailErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='password'>{signup.labelPassword}</FormLabel>
          <FormInput id='password' label='Password' name='password' type='password' required />
          {state.isPasswordError && <FormInputsP>{state.passwordErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='password2'>{signup.labelPassword2}</FormLabel>
          <FormInput id='password2' type='password' name='password2' required />
          {state.isPasswordError && <FormInputsP>{state.passwordErrorMessage}</FormInputsP>}
        </FormInputs>
        <FormInputBtn signup type='submit'>
          {signup.button}
        </FormInputBtn>
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
