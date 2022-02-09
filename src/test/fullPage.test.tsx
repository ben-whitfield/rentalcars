import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('Snapshot', () => {
  test('snapshot render full page', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});