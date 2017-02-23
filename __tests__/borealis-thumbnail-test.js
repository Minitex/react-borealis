import React from 'react'
import renderer from 'react-test-renderer'
import BorealisThumbnail from '../src/borealis-thumbnail'

describe('BorealisThumbnail Tests', () => {

  it("renders an audio", function(){
    const component = renderer.create(
      <BorealisThumbnail src="http://example.com" thumbnail="blerg" to="foo" />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})