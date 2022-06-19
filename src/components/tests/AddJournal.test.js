import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddJournal from '../index';

test('Add Journal renders the form correctly', () => {
  const { getByText, getByLabelText } = render(<AddJournal />);
  const title = getByText(/Title/i);
  const url = getByText(/URL/i);
  const ISSN = getByText(/ISSN/i);
  const rating = getByText(/Rating/i);
  const policies = getByText(/Policies/i);
  expect(title).toBeInTheDocument();
  expect(url).toBeInTheDocument();
  expect(ISSN).toBeInTheDocument();
  expect(rating).toBeInTheDocument();
  expect(policies).toBeInTheDocument();
  const input = getByLabelText(/Date/i);
  expect(input).toHaveAttribute('type', 'date');
});
