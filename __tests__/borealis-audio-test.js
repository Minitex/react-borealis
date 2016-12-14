import React from 'react'
import renderer from 'react-test-renderer'
import BorealisAudio from '../src/borealis-audio'

describe('BorealisAudio Tests', () => {

  it("renders an audio", function(){  
    let items = [
      {
        "type": "audio",
        "label": "Audio",
        "focus": true,
        "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919"
      },
      {
        "type": "transcript",
        "label": "Transcript",
        "text": "Audio Transcript Here",
        "focus": false
      }
    ]

    const component = renderer.create(
      <BorealisAudio items={items} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})