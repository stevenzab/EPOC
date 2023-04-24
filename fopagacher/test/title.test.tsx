import { render } from '@testing-library/react';
import React from 'react';
import Title from '../components/title';
import Resume from '../components/resume';

describe('Title component', () => {
  it('renders the correct title text', () => {
    const { getByTestId } = render(<Title />);
    const titleElement = getByTestId('title');
    expect(titleElement.textContent).toBe('title components');
	});

  it('renders a div wrapper', () => {
    const { getByTestId } = render(<Title />);
    const divElement = getByTestId('title-wrapper');
    expect(divElement.tagName).toBe('DIV');
  });

  it('renders only one h1 element', () => {
    const { queryAllByTestId } = render(<Title />);
    const h1Elements = queryAllByTestId('title');
    expect(h1Elements.length).toBe(1);
  });
});