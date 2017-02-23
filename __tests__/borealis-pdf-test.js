import React from 'react'
import renderer from 'react-test-renderer'
import BorealisPDF from '../src/borealis-pdf'

describe('BorealisPDF Tests', () => {

  it("renders an audio", function(){
    const config = {
        pdf: {
        height: 800,
        src: "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
        thumbnail: "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0",
        transcript: {
          texts: ["PDF Transcript Here"],
          label: "PDF"
        },
        src: "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
      }
    }
    const component = renderer.create(
      <BorealisPDF config={config} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})