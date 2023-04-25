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
});