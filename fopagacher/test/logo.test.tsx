import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../components/logo';

describe('Logo Component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Logo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});