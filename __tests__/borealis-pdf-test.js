import React from 'react'
import renderer from 'react-test-renderer'
import BorealisPDF from '../src/borealis-pdf'

describe('BorealisPDF Tests', () => {

  it("renders an audio", function(){  
    const component = renderer.create(
      <BorealisPDF src="http://example.com" thumbnail="blerg" />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})