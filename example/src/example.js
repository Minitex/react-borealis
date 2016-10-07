import React from 'react'
import ReactDOM from 'react-dom'
import Borealis  from 'react-borealis'


const objects =  [
    {
      "focus": true,
      "type": "iiif",
      "include_controls": true,
      "thumbnails": [
        "http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll39/438"
      ],
      "config": {       
        "sequenceMode": true,
        "showReferenceStrip": true,
        "tileSources": [
          {
            "type": "image",
            "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:438"
          },
          {
            "type": "image",
            "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:439"
          },
          {
            "type": "image",
            "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:440"
          },
          {
            "type": "image",
            "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:441"
          }
        ]
      }
    },
    {
      "focus": false,
      "type": "pdf",
      "config": {
        "srcs": [
          "https://s3.amazonaws.com/mdl-assets/stpaul.pdf"
        ]
      },
      "thumbnails": [
        "http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll35/0"
      ]
    },
    {
      "focus": false,
      "type": "audio",
      "config": {
        "srcs": [
          "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919"
        ]
      },
      "thumbnails": [
        "http://lib-mdl-dev.oit.umn.edu/thumbnails/jhs/885"
      ]
    },
    {
      "focus": false,
      "type": "video",
      "config": {
        "height": 500,
        "width": 500,
        "srcs": [
          "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470"
        ]
      },
      "thumbnails": [
        "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0"
      ]
    }
  ]


const App = React.createClass({
  render () {
    return (<Borealis objects={this.props.objects} type="video" />);
  }
});

ReactDOM.render(<App objects={objects} />, document.getElementById('app'));
