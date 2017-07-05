import React from 'react'
import renderer from 'react-test-renderer'
import BorealisThumbnail from '../src/borealis-thumbnail'
import { MemoryRouter } from 'react-router-dom';

describe('BorealisThumbnail Tests', () => {

  it("renders an audio", function(){
    const component = renderer.create(
      <MemoryRouter>
       <BorealisThumbnail src="http://example.com" thumbnail="blerg" to="foo" />
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
