import React from 'react';
import {render} from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Tickets/i);
  expect(header).toBeInTheDocument();
});

test('App layout loaded correctly', () => {
  const { getByTestId } = render(<App />);
  const homeLink = getByTestId('home-link');
  expect(homeLink).toBeInTheDocument();
});

test('Copy right should be in footer', () => {
  const { getByText } = render(<App />);
  const authorCopyright = getByText(/Jafar/i);
  expect(authorCopyright).toBeInTheDocument();
});


test('Yocale link should be in footer', () => {
  const { getByTestId } = render(<App />);
  const yocaleLink = getByTestId('yocale-link');
  expect(yocaleLink).toBeInTheDocument();
});

