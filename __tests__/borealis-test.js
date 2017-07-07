import React from 'react';
import renderer from 'react-test-renderer';
import Borealis from '../src/react-borealis';

jest.mock('react-openseadragon', () => 'OpenSeadragonViewer');

describe('Borealis', () => {
  it('should render correctly', () => {
    const config = {
      kaltura_audio_playlist: {
        targetId: 'kaltura_player_1489684320',
        wid: '_1369852',
        uiconf_id: 38719361,
        flashvars: {
          streamerType: 'auto',
          'playlistAPI.kpl0Id': '0_0s5bpfh7',
        },
        transcript: {
          texts: ['this is a kaltura video transcript'],
          label: 'Video',
        },
        height: '395px',
        width: '560px',
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885',
      },
      kaltura_video: {
        targetId: 'kaltura_player_1489614720',
        wid: '_1369852',
        uiconf_id: 38683631,
        transcript: {
          texts: ['this is a kaltura video transcript'],
          label: 'Video',
        },
        entry_id: '0_t96feg4f',
        height: '315px',
        width: '560px',
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0',
      },
      kaltura_audio: {
        targetId: 'kaltura_player_1489599711',
        wid: '_1369852',
        uiconf_id: 38708801,
        entry_id: '0_b64f8k0c',
        transcript: {
          texts: ['this is a kaltura transcript'],
          label: 'Audio',
        },
        height: '70px',
        width: '460px',
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885',
      },
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
          texts: ['First Image Item Transcript', 'Second Image Item  Transcript'],
          label: 'Image',
        },
        tocs: [
          'A Statue',
        ],
      },
      pdf: {
        height: 800,
        src: 'https://s3.amazonaws.com/mdl-assets/stpaul.pdf',
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0',
        transcript: {
          texts: ['PDF Transcript Here'],
          label: 'PDF',
        },
      },
      ppt: {
        transcript: {
          texts: [],
          label: 'PowerPoint',
        },
        text: '(Download)',
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll17/id/827',
        src: 'http://reflections.mndigital.org/utils/getdownloaditem/collection/p16022coll17/id/827/filename/828.pptx',
      },
      audio: {
        src: 'http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919',
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885',
        transcript: {
          texts: ['Audio Transcript Here'],
          label: 'Audio',
        },
      },
      video: {
        thumbnail: 'http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0',
        transcript: {
          texts: [],
          label: 'Video',
        },
        height: 500,
        width: 500,
        src: 'http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470',
      },
    };

    const component = renderer.create(<Borealis config={config} basename="/" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
