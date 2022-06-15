/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../index';

test('Login renders the form correctly', () => {
  const { getByText, getByLabelText } = render(<Login />);
  const email = getByLabelText(/Email/i);
  expect(email).toHaveAttribute('type', 'email');
  const input = getByLabelText(/Password/i);
  expect(input).toHaveAttribute('type', 'password');
});
