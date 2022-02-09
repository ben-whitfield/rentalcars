import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Car Hire – Search, Compare & Save/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the search button', () => {
  render(<App />);
  const buttonElement = screen.getByTestId(/searchButton/);
  expect(buttonElement).toBeInTheDocument();
});
