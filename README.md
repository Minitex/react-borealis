# React Borealis

A React-based tool that displays a variety of asset types: IIIF Images, PPT, PDF, Kaltura Audio, etc. This tool was created to support asset viewing for the [Minnesota Reflections](https://reflections.mndigital.org) project.

React Borealis features search-as-you type for [items with multiple pages of content](https://reflections.mndigital.org/catalog/irrc:1308#/image/0?).

## Demo & Examples

To build the examples locally, run:

```
$ yarn install;
$ yarn start;
```

Then open [`http://localhost:8081`](http://localhost:8081) in a browser.


## Building for Production

After making some changes to your react components, create a new minified build of the project:

```
$ yarn install;
$ yarn run build;
$ git add dist;
$ git push origin master;
```

## Including React Borealis in an App

The easiest way to use react-borealis is to install it from NPM and include it in your own React build process (e.g. using [Webpack](http://webpack.github.io/))

See [mdl_search Working With React Components](https://github.com/UMNLibraries/mdl_search#updating-react-components) for an example implementation.

## Run Tests

`yarn test`

## Example Configuration

```
import React from 'react'
import ReactDOM from 'react-dom'
import Borealis  from 'react-borealis'

const config =
  {
    image: {
      basename: '/foo/bar/image',
      transcript: {
        texts: [],
        label: '',
      },
      type: 'image',
      thumbnail: 'https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg',
      label: 'Image',
      getImageURL: 'http://cdm16022.contentdm.oclc.org/utils/ajaxhelper',
      osdConfig: {
        defaultZoomLevel: 0,
        tileSources: [
          'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
          'https://cdm16022.contentdm.oclc.org/digital/iiif/p16022coll7/326/info.json',
          'https://cdm16022.contentdm.oclc.org/digital/iiif/nemhc/1542/info.json',
          'https://cdm16022.contentdm.oclc.org/digital/iiif/hchm/1410/info.json',
          'https://cdm16022.contentdm.oclc.org/digital/iiif/hchm/1333/info.json',
          'https://cdm16022.contentdm.oclc.org/digital/iiif/hchm/1332/info.json',
        ],
      },
      pages: [
        {
          id: 0,
          title: 'MLK',
          sidebarThumbnail: 'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/full/100,/0/default.jpg',
          transcript: 'MLK',
          viewer: 'OSD_VIEWER',
          cdmCollection: 'mpls',
          cdmIdentifier: '3188',
          infoURL: 'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
        },
        {
          id: 1,
          title: 'A bill for an act authorizing the establishment of Worthington State College, Worthington, Minnesota',
          sidebarThumbnail: 'https://reflections.mndigital.org/thumbnails/p16022coll7:328/Text',
          transcript: 'blah blah blah',
          cdmCollection: 'p16022coll7',
          cdmIdentifier: '326',
          infoURL: 'https://cdm16022.contentdm.oclc.org/digital/iiif/p16022coll7/326/info.json',
        },
        {
          id: 2,
          title: 'View of the Palisades, Duluth, Minnesota',
          sidebarThumbnail: 'https://reflections.mndigital.org/thumbnails/nemhc:1542/Text',
          transcript: 'View of the Palisades on Lake Superior\'s North Shore.',
          viewer: 'OSD_VIEWER',
          cdmCollection: 'nemhc',
          cdmIdentifier: '1542',
          infoURL: 'https://cdm16022.contentdm.oclc.org/digital/iiif/nemhc/1542/info.json',
        },
        {
          id: 3,
          title: 'Dalles of St. Croix River, Taylors Falls, Minnesota',
          sidebarThumbnail: 'https://reflections.mndigital.org/thumbnails/hchm:1410/Text',
          transcript: 'An aerial view of the Dalles of the St. Croix River with Taylors Falls, Minnesota, on the left bank. This image is by Arthur Adams, Minneapolis high school teacher, local historian, and photographer. Adams traveled throughout Minnesota, taking photographs to augment his lectures. His studio was located at 3648 Lyndale Avenue South in Minneapolis.',
          viewer: 'OSD_VIEWER',
          cdmCollection: 'hchm',
          cdmIdentifier: '1410',
          infoURL: 'https://cdm16022.contentdm.oclc.org/digital/iiif/hchm/1410/info.json',
        },
        {
          id: 4,
          title: 'Log Jam on the St. Croix River, Taylor\'s Falls, Minnesota',
          sidebarThumbnail: 'https://reflections.mndigital.org/thumbnails/hchm:1333/Text',
          transcript: 'A log jam in the St. Croix River near Taylor\'s Falls, Minnesota. This image is by Arthur Adams, Minneapolis high school teacher, local historian, and photographer. Adams traveled throughout Minnesota, taking photographs to augment his lectures. His studio was located at 3648 Lyndale Avenue South in Minneapolis.',
          viewer: 'OSD_VIEWER',
          cdmCollection: 'hchm',
          cdmIdentifier: '1333',
          infoURL: 'https://cdm16022.contentdm.oclc.org/digital/iiif/hchm/1333/info.json',
        },
        {
          id: 5,
          title: 'Pot Holes, Interstate Park, Taylors Falls, Minnesota',
          sidebarThumbnail: 'https://reflections.mndigital.org/thumbnails/hchm:1332/Text',
          transcript: 'A large pothole formed in rock at Interstate Park in Taylors Falls, Minnesota. This image is by Arthur Adams, Minneapolis high school teacher, local historian, and photographer. Adams traveled throughout Minnesota, taking photographs to augment his lectures. His studio was located at 3648 Lyndale Avenue South in Minneapolis.',
          viewer: 'OSD_VIEWER',
          cdmCollection: 'hchm',
          cdmIdentifier: '1332',
          infoURL: 'https://cdm16022.contentdm.oclc.org/digital/iiif/hchm/1332/info.json'
        },
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
      transcript: {
        texts: ['this is a POWER point'],
        label: 'FeelThePower',
      },
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
      wrapper_height: '395px',
      wrapper_width: '60%',
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
      entry_id: '0_hmnbli5z',
      wrapper_height: '315px',
      wrapper_width: '60%',
      thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll38/id/0',
    },
    kaltura_video_playlist: {
      targetId: 'kaltura_player_1489684320',
      wid: '_1369852',
      uiconf_id: 38719361,
      flashvars: {
        streamerType: 'auto',
        'playlistAPI.kpl0Id': '1_ualvt5s5',
      },
      transcript: {
        texts: ['this is a kaltura video transcript'],
        label: 'Video',
      },
      wrapper_height: '395px',
      wrapper_width: '60%',
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
      wrapper_height: '70px',
      wrapper_width: '60%',
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
          src: 'https://cdm16022.contentdm.oclc.org/utils/getfile/collection/p16022coll52/id/16/filename',
          thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll52/id/16',
          transcript: {
            texts: ['1 Cecelia Boone Narrator Sara Ring Interviewer June 9, 2011 Minitex Oral History Project Minneapolis, Minnesota SR: Tell us how you got started working at Minitex. How did you end up in the job you are doing right now? CB: As always, there is a story. blah blah'],
            label: 'PDF',
          },
        },
        {
          src: 'https://cdm16022.contentdm.oclc.org/utils/getfile/collection/p16022coll52/id/17/filename',
          thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll52/id/17',
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
        texts: ['Vydeo transcription here'],
        label: 'Video',
      },
      height: 500,
      width: 500,
      src: 'https://cdm16022.contentdm.oclc.org/utils/getstream/collection/stc/id/8470',
    },
  };

ReactDOM.render(<Borealis
  config={config}
  basename='/foo/bar'
  initialPath="image/3/?searchText=dalles"
/>, document.getElementById('app'));


```

## License

University of Minnesota



