import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

test('display the placeholder input text', () => {
  render(<App />);
  const inputElement: HTMLInputElement = screen.getByTestId(/formInput/);
  expect(inputElement.placeholder).toBe('Pick-up location');
});

test('enter a single search char', () => {
  render(<App />);
  const inputElement: HTMLInputElement = screen.getByTestId(/formInput/);
  const resultElement: HTMLInputElement = screen.getByTestId(/searchResultPanel/);
  fireEvent.change(inputElement, {target : {value: 'A'}})
  expect(inputElement.value).toBe('A');
  expect(resultElement.children).toHaveLength(0)
});

test('enter a search term > 2', async () => {
  /* eslint-disable */
  render(<App />);
  const inputElement: HTMLInputElement = screen.getByTestId(/formInput/);
  fireEvent.change(inputElement, {target : {value: 'ABC'}})
  expect(inputElement.value).toBe('ABC');
  // @ts-ignore 
  await screen.findAllByText('Station')
  const resultElement: HTMLInputElement = screen.getByTestId(/searchResultPanel/);
  expect(resultElement.children).toHaveLength(6)
});
