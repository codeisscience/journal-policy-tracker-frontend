/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import { FormContentRight, FormDiv, FormH1, FormInputs, FormInputsP, FormLabel, FormInput, FormInputBtn, FormInputLogin} from '../styles.js';
import { signup } from '../../../config/content';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

  return (
    <FormContentRight>
        <FormDiv onSubmit={handleSubmit}>
        <FormH1>{signup.head}</FormH1>
        <FormInputs>
            <FormLabel htmlFor='username'>
                {signup.labelUsername}
            </FormLabel>
            <FormInput 
                id='username'
                type='text' 
                name='username' 
                value={values.username}
                onChange={handleChange}
                />
                {errors.username && <FormInputsP>{errors.username}</FormInputsP>}
        </FormInputs>
        <FormInputs>
            <FormLabel htmlFor='email'>
               {signup.labelEmail}
            </FormLabel>
            <FormInput 
                id='email'
                type='email' 
                name='email' 
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <FormInputsP>{errors.email}</FormInputsP>}
        </FormInputs>
        <FormInputs>
            <FormLabel htmlFor='password'>
               {signup.labelPassword}
            </FormLabel>
            <FormInput 
                id='password'
                type='password' 
                name='password' 
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <FormInputsP>{errors.password}</FormInputsP>}
        </FormInputs>
        <FormInputs>
            <FormLabel htmlFor='password2'>
               {signup.labelPassword2}
            </FormLabel>
            <FormInput 
                id='password2'
                type='password' 
                name='password2' 
                value={values.password2}
                onChange={handleChange}
                />
                {errors.password2 && <FormInputsP>{errors.password2}</FormInputsP>}
        </FormInputs>
        <FormInputBtn signup type='submit'>
            {signup.button}
        </FormInputBtn>
        <FormInputLogin>
            {signup.login} <a href='/login' style={{color: "orange"}}>here</a>
        </FormInputLogin>
        </FormDiv>
    </FormContentRight>
    );
};

export default FormSignup;