import React from 'react';
import ReactDOM from 'react-dom';
import Borealis  from '../src/react-borealis';

var config =
  {
  "image": {
    "type": "image",
    thumbnail: 'https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg',
    "label": "Image",
    "include_controls": true,
    "sequenceMode": true,
    "showReferenceStrip": true,
    "defaultZoomLevel": 0,
    "tileSources": [
        'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
        'https://ids.lib.harvard.edu/ids/iiif/25286610/info.json',
    ],
    "transcript": {
      "texts": [],
      "label": "Image"
    },
    "tocs": [
      "Neighborhoods of Duluth: Lakeside, Carl Grumdahl house, Duluth, Minnesota"
    ]
  },
    ppt: {
      transcript: {
        texts: [],
        label: 'PowerPoint',
      },
      text: '(Download)',
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll17/id/827',
      src: 'https://cdm16022.contentdm.oclc.org/utils/getdownloaditem/collection/p16022coll17/id/827/filename/828.pptx',
    },
    kaltura_audio_playlist: {
      targetId: 'kaltura_player_1489684320',
      wid: '_1369852',
      uiconf_id: 38719361,
      flashvars: {
        streamerType: 'auto',
        'playlistAPI.kpl0Id': '0_0s5bpfh7',
      },
      transcript: {
        texts: ['this is a kaltura audio playlist transcript'],
        label: 'Video',
      },
      height: '395px',
      width: '560px',
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/jhs/id/885',
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
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll38/id/0',
    },
    kaltura_audio: {
      targetId: 'kaltura_player_1489599711',
      wid: '_1369852',
      uiconf_id: 38708801,
      entry_id: '0_b64f8k0c',
      transcript: {
        texts: ['this is a kaltura audio transcript'],
        label: 'Audio',
      },
      height: '70px',
      width: '460px',
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/jhs/id/885',
    },
    pdf: {
       transcript: {
        texts: [],
        label: 'PDF',
      },
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll35/id/0',
      config: {
        height: 800,
      },
      values: [
        {
          src: 'http://cdm16022.contentdm.oclc.org/utils/getfile/collection/p16022coll52/id/16/filename',
          thumbnail: 'http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll52:16',
          transcript: {
            texts: ['1 Cecelia Boone Narrator Sara Ring Interviewer June 9, 2011 Minitex Oral History Project Minneapolis, Minnesota SR: Tell us how you got started working at Minitex. How did you end up in the job you are doing right now? CB: As always, there is a story. blah blah'],
            label: 'PDF',
          },
        },
        {
          src: 'http://cdm16022.contentdm.oclc.org/utils/getfile/collection/p16022coll52/id/17/filename',
          thumbnail: 'http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll52:17',
          transcript: {
            texts: ['blah blah blah, second pdf here'],
            label: 'PDF',
          },
        },
      ],
    },
    audio: {
      src: 'https://cdm16022.contentdm.oclc.org/utils/getstream/collection/mhs/id/1919',
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/jhs/id/885',
      transcript: {
        texts: ['Audio Transcript Here'],
        label: 'Audio',
      },
    },
    video: {
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll38/id/0',
      transcript: {
        texts: [],
        label: 'Video',
      },
      height: 500,
      width: 500,
      src: 'https://cdm16022.contentdm.oclc.org/utils/getstream/collection/stc/id/8470',
    },
  };

ReactDOM.render(<Borealis
  config={config}
  basename="/foo/bar"
/>, document.getElementById('app'));
