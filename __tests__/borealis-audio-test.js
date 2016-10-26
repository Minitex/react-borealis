import React from 'react'
import renderer from 'react-test-renderer'
import BorealisAudio from '../src/borealis-audio'

describe('BorealisAudio Tests', () => {

  it("renders an audio", function(){  
    const component = renderer.create(
      <BorealisAudio src="http://example.com" />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})