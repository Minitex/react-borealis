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
        }      ]

    const component = renderer.create(
      <Borealis items={items} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
