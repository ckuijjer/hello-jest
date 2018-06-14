import React from 'react';
import Boop from './Boop';
import TestRenderer from 'react-test-renderer'; // ES6

it('renders', () => {
  const output = TestRenderer.create(<Boop />).toJSON();
  expect(output).toMatchSnapshot();
});

it('renders NotExportedComponent', () => {
  const NotExportedComponent = Boop.__get__('NotExportedComponent');

  const output = TestRenderer.create(<NotExportedComponent />).toJSON();
  expect(output).toMatchSnapshot();
});
