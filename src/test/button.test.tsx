import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../components/Button/Button';

describe('Button', () => {
  test('snapshot render button', () => {
    const component = renderer.create(<Button type='submit' text='Search'  />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});