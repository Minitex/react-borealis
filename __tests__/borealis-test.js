import React from 'react';
import renderer from 'react-test-renderer'
import Borealis from '../src/react-borealis';

jest.mock('react-openseadragon', () => 'OpenSeadragonViewer')

describe('Borealis', () => {
  it('should render correctly', () => {
    const items =  
      [
        {
          "focus": true,
          "type": "image",
          "thumbnail": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg",      
          "items": [
            {
              "type": "image",
              "label": "Image",
              "focus": true,
              "include_controls": true,
              "sequenceMode": true,
              "showReferenceStrip": true,
              "defaultZoomLevel": 0,
              "tileSources": [
                "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
                "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
              ]
            },
            {
              "type": "transcript",
              "label": "Transcript",
              "texts": [
                "First Image Item Transcript",
                "Second Image Item  Transcript"
              ],
              "focus": false
            },
          ],
          "tocs": [
              "MLK",
              "A Statue"
            ]
        },
        {
          "focus": true,
          "type": "pdf",
          "height": 800,
          "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
          "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0",
          "items": [
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
        },
        {
          "focus": false,
          "type": "audio",
          "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919",
          "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885",
          "items": [
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
        },
        {
          "focus": false,
          "type": "video",
          "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0",
          "items": [
            {
              "type": "video",
              "label": "Video",
              "height": 500,
              "width": 500,
              "focus": true,
              "src": "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470"
            },
            {
              "type": "transcript",
              "label": "Transcript",
              "text": "Video Transcript Here",
              "focus": false
            }
          ]    
        }
      ]

    const component = renderer.create(
      <Borealis items={items} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
