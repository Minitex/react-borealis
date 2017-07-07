import React from 'react';
import renderer from 'react-test-renderer';
import BorealisAudio from '../src/borealis-audio-player';

describe('BorealisAudio Tests', () => {
  it('renders an audio', () => {
    const config = {
      audio: {
        src: 'http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919',
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885',
        transcript: {
          texts: ['Audio Transcript Here'],
          label: 'Audio',
        },
      },
    };

    const component = renderer.create(<BorealisAudio config={config} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
