# react-borealis

## Demo & Examples

Live demo: [https://umnlibraries.github.io/react-borealis](https://umnlibraries.github.io/react-borealis/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`http://localhost:8080/#/foo/bar/image/0`](http://localhost:8080/#/foo/bar/image/0) in a browser.


## Installation

The easiest way to use react-borealis is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-borealis.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install git+git@github.com:UMNLibraries/react-borealis.git --save
```


## Usage

```
import React from 'react'
import ReactDOM from 'react-dom'
import Borealis  from 'react-borealis'

const assets =  {
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
      height: 800,
      src: 'https://s3.amazonaws.com/mdl-assets/stpaul.pdf',
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll35/id/0',
      transcript: {
        texts: ['PDF Transcript Here'],
        label: 'PDF',
      },
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

```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## Run Tests

`npm test`

## License

University of Minnesota (MIT Pending)



