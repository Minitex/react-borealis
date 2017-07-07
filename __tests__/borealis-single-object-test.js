import React from 'react';
import renderer from 'react-test-renderer';
import Borealis from '../src/react-borealis';

jest.mock('react-openseadragon', () => 'OpenSeadragonViewer');

describe('Borealis', () => {
  it('should render correctly', () => {
    const config = {
      image: {
        thumbnail: 'https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg',
        type: 'image',
        label: 'Image',
        include_controls: true,
        sequenceMode: true,
        showReferenceStrip: true,
        defaultZoomLevel: 0,
        tileSources: [
          'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
          'https://ids.lib.harvard.edu/ids/iiif/25286610/info.json',
        ],
        transcript: {
          texts: ['First Image Item Transcript','Second Image Item  Transcript'],
          label: 'Image',
        },
        tocs: [
          'A Statue',
        ],
      },
    };

    const component = renderer.create(<Borealis config={config} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
