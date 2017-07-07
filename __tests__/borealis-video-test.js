import React from 'react';
import renderer from 'react-test-renderer';
import BorealisVideo from '../src/borealis-video-player';

test('Borealis video', () => {
  const config = {
    video: {
      thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0',
      transcript: {
        texts: [],
        label: 'Video',
      },
      height: 500,
      width: 500,
      src: 'http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470'
    },
  };

  const component = renderer.create(
    <BorealisVideo config={config} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
