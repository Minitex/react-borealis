import React from 'react'
import renderer from 'react-test-renderer'
import BorealisTray from '../src/borealis-tray'

describe('BorealisTray Tests', () => {

  it("renders an audio", function(){  

    const assets =  [
      {
        "focus": true,
        "type": "image",
        "include_controls": true,
        "thumbnail": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg",
        "os_config": {
          "sequenceMode": true,
          "showReferenceStrip": true,
          "tileSources": [
            "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
            "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
            ]
        }
      },
      {
        "focus": true,
        "type": "pdf",
        "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
        "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0"
      },
      {
        "focus": false,
        "type": "audio",
        "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919",
        "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885"
      },
      {
        "focus": false,
        "type": "video",
        "height": 500,
        "width": 500,
        "src": "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470",
        "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0"
      }
    ]
    const component = renderer.create(
      <BorealisTray assets={assets} handler={() => {}} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})