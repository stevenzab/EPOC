import React from 'react';
import { render } from '@testing-library/react';
import Resume from '../components/resume';

describe('Resume component', () => {
  it('renders the correct title text', () => {
    const { getByText } = render(<Resume />);
    const titleElement = getByText('resume components');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders a div wrapper', () => {
    const { container } = render(<Resume />);
    const divElement = container.querySelector('div');
    expect(divElement).toBeInTheDocument();
  });

  it('renders only one h1 element', () => {
    const { container } = render(<Resume />);
    const h1Elements = container.querySelectorAll('h1');
    expect(h1Elements.length).toBe(1);
  });
});
