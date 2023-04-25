import React from 'react';
import { render } from '@testing-library/react';
import Resume from '../components/resume';

describe('resume component', () => {
  it('renders the correct title text', () => {
    const { getByText } = render(<Resume />);
    const titleElement = getByText('resume components');
    expect(titleElement).toBeInTheDocument();
  });
});
