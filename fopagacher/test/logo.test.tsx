import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../components/logo';

describe('Logo Component', () => {
  it('renders the correct title text', () => {
    const { getByText } = render (<Logo />);
    const titleElement = getByText('logo components');
    expect(titleElement).toBeInTheDocument();
  });
});