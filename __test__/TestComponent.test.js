import React from 'react';
import TestComponent from '../src/TestComponent';
import renderer from 'react-test-renderer';

test('Snapshot of component without  props', () => {
  let component = renderer.create(
    <TestComponent />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component = renderer.create(
    <TestComponent more={true}/>,
  );
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.toTree().instance.showTheHint();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
