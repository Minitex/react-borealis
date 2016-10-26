import React from 'react'
import BorealisViewer from '../src/borealis-viewer'
import renderer from 'react-test-renderer'

test('Borealis viewer', () => {
  const active_asset =
    {
      "focus": true,
      "type": "pdf",
      "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
      "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0"
    }

  const component = renderer.create(
    <BorealisViewer active_asset={active_asset} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})