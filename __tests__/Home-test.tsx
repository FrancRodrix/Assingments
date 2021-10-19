import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Home';

// test('renders correctly', (props:any) => {
//     const tree = renderer.create(<Home/>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

test('add', () => {
  expect(1+3).toBe(4)
})