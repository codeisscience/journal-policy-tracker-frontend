import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from '../index';

test('renders the form correctly', () => {
  const { getByText, getByLabelText } = render(<SignUp />);
  const usernameLabel = getByText(/Username/i);
  const emailLabel = getByText(/Email/i);
  expect(usernameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  const input = getByLabelText(/Password/i);
  expect(input).toHaveAttribute('type', 'password');
});
