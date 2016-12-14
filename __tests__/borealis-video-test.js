import React from 'react'
import BorealisVideo from '../src/borealis-video'
import renderer from 'react-test-renderer'

test('Borealis video', () => {
  let items =  [
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


  const component = renderer.create(
     <BorealisVideo items={items} />
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});