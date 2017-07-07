import React from 'react';
import renderer from 'react-test-renderer';
import BorealisPPT from '../src/borealis-ppt';

describe('BorealisPPT Tests', () => {
  it('renders a PowerPoint', () => {
    const config = {
      ppt: {
        transcript: {
          texts: [],
          label: 'PowerPoint',
        },
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll17/id/827',
        src: 'http://reflections.mndigital.org/utils/getdownloaditem/collection/p16022coll17/id/827/filename/828.pptx',
      },
    };
    const component = renderer.create(<BorealisPPT config={config} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
