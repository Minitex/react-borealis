import React from 'react';
import ReactDOM from 'react-dom';
import Borealis from '../src/react-borealis';

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
          transcript: 'JJBsEG 138* r Introduced by Bassettf Frifrei February 9* 1961 Ref. to Can, on Bfecfttion H* P. Ho. Ul Gcsspa?»i0& 3^ ?^ Ref • to S# Gob. A BILL FOR AN ACT AUTHORIZING THE ESTABLISHMENT OF WORTHINGTON STATE COLLEGE; EMPOWERING WORTHINGTON STATE COLLEGE TO TAKE OVER THE PRESENT FUNCTIONS OF WORTHINGTON JUNIOR COLLEGE; AM) EMPOWERING WOBTHINGTON STATE COLLEGE TO UTILIZE THE PRESENT FACILITIES OF WOJffHINGTON JUNIOR COLLEGE, BE II ENACTED BY THE LEGISLATURE OF THE STATE OF MINNESOTA: Section 1* [POLICY,] The legislature does deem after a careful study and investigation, that it is necessary, in order to provide the people of the state of Minnesota with adequate facilities in the field o£ higher education, that a state college be established In southwestern Minnesota, The legislature finds that the only established institution for higher education in southwestern Minnesota is the Worthington Junior Collage, established in 1936> and in •continuous operation since that date, and presently having 300 full time or the equivalent students enrolled for credit* That as a result of the successful operation of the Worthington Junior College, there is a college faculty* college enrollment, physical plant and community facilities presently available for the operation of a state college; that the operatlon, utilisation and adaptation of Worthington Junior College as a state college would be for the best interests of the state of Minnesota, and would readily and economically make available to the citizens of soitthwestern Minnesota adequate opportunities for higher education; and the University of Minnesota is providing adequate facilities in the field of higher education for the citizens of west central Minnesota. Sec. 2. [WORTHINGTON STATE COLLEGE ESTABLISHED.] Subdivision 1* A state college, to be known as the JJBtEG 1389 F H. F. Ho, 641 Page. 2 Worthington State College is established under the educational management, supervision and control of the state college board, subject to all applicable provisions of Minnesota Statutes for 1957, Chapter 136, and acts amendatory thereto and any other law pertaining to state colleges. The state college board may take over the present educational facilities of the Worthington Junior College for the Worthington State College, and may enter into leases, contracts and other agreements with the board of education of Independent School District No. 518, Worthington, Minnesota, for such purposes*.. Subd. 2* The board of education of Independent School District No. 518, Worthington, Minnesota, may contract with the state college board in accordance with subdivision 1. Sec/ 3. [SITE SELECTION AND ERECTION OF COLLEGE BUILDINGS*] The commissioner of administration, with the approval of the state college board, shall select and acquire a site for Worthington State College, in or immediately adjacent to the city of Worthington, and construct thereon the necessary buildings to meet the present and forseeable needs for higher education in the region of southwestern Minnesota. The commissioner uuay acquire the necessary site by gift, purchase or condemnation, and In conformity with Minnesota Statutes for 1937, Chapter 117, and acts amendatory thereof.',
          viewer: 'OSD_VIEWER',
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
