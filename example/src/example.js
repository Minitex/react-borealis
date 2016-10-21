import React from 'react'
import ReactDOM from 'react-dom'
import Borealis  from 'react-borealis'


const assets =  [
  {
    "focus": true,
    "type": "image",
    "include_controls": true,
    "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll39/id/438",
    "os_config": {
      "sequenceMode": true,
      "showReferenceStrip": true,
      "tileSources": [
        "http://lib-mdl-dev.oit.umn.edu/contentdm-images/info?id=mpls:22757",
        "http://lib-mdl-dev.oit.umn.edu/contentdm-images/info?id=mpls:22758"
        ]
    }
  },
  {
    "focus": true,
    "type": "pdf",
    "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
    "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0"
  },
  {
    "focus": false,
    "type": "audio",
    "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919",
    "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885"
  },
  {
    "focus": false,
    "type": "video",
    "height": 500,
    "width": 500,
    "src": "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470",
    "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0"
  }
]


const App = React.createClass({
  render () {
    return (<Borealis assets={this.props.assets} type="video" />);
  }
});

ReactDOM.render(<App assets={assets} />, document.getElementById('app'));
