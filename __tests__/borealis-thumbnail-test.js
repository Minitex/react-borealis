import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import BorealisThumbnail from '../src/borealis-thumbnail';

describe('BorealisThumbnail Tests', () => {
  it('renders an audio', () => {
    const component = renderer.create(
      <MemoryRouter>
        <BorealisThumbnail src="http://example.com" thumbnail="blerg" to="foo" />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
