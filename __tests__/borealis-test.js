import React from 'react'
import renderer from 'react-test-renderer'
import Borealis from '../src/react-borealis'

describe('Borealis Tests', () => {

  it("renders React Borealis", function(){  

    const assets =  [
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
      <Borealis assets={assets} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})