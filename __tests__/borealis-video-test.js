import React from 'react'
import BorealisVideo from '../src/borealis-video'
import renderer from 'react-test-renderer'

test('Borealis video', () => {
  const component = renderer.create(
     <BorealisVideo src="http://example.com" />
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});