import React from 'react'
import renderer from 'react-test-renderer'
import BorealisPDF from '../src/borealis-pdf'

describe('BorealisPDF Tests', () => {

  it("renders an audio", function(){  
    let items = [
      {
        "type": "pdf",
        "label": "PDF",
        "focus": true,
        "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
      },
      {
        "type": "transcript",
        "label": "Transcript",
        "text": "PDF Transcript Here",
        "focus": false
      }
    ]
    const component = renderer.create(
      <BorealisPDF items={items} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})