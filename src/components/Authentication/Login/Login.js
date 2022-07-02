/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import useFormLogin from './useFormLogin';
import validateLoginInfo from './validateLoginInfo.js';
import { FormContentRight, FormDiv, FormH1, FormInputs, FormInputsP, FormLabel, FormInput, FormInputBtn, ButtonContainer} from '../styles';


const FormLogin = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useFormLogin(submitForm, validateLoginInfo);

  return (
    <FormContentRight>
        <FormDiv onSubmit={handleSubmit}>
        <FormH1>Welcome to Code Is Science</FormH1>
        <FormInputs>
            <FormLabel htmlFor='email'>
               Enter your email
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
               Enter your password
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
        <ButtonContainer>
        <FormInputBtn type='submit'>
            Login
        </FormInputBtn>
        <FormInputBtn primary>
            <Link to='/Signup' style={{color: '#EA8900', hover: '#fff' }}>
                Signup
            </Link>
        </FormInputBtn>
        </ButtonContainer>
        </FormDiv>
    </FormContentRight>
    );
};

export default FormLogin;