import React from 'react'
import ReactDOM from 'react-dom'
import Borealis  from 'react-borealis'


const assets =  [
  {
    "focus": true,
    "type": "image",
    "include_controls": true,
    "tray_thumbnail": "http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll39/438",
    "os_config": {
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
    "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
    "tray_thumbnail": "http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll35/0"
  },
  {
    "focus": false,
    "type": "audio",
    "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919",
    "tray_thumbnail": "http://lib-mdl-dev.oit.umn.edu/thumbnails/jhs/885"
  },
  {
    "focus": false,
    "type": "video",
    "height": 500,
    "width": 500,
    "src": "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470",
    "tray_thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0"
  }
]


const App = React.createClass({
  render () {
    return (<Borealis assets={this.props.assets} type="video" />);
  }
});

ReactDOM.render(<App assets={assets} />, document.getElementById('app'));
