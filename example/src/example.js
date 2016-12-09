import React from 'react'
import ReactDOM from 'react-dom'
import Borealis  from 'react-borealis'


const assets =  
[
  {
    "focus": true,
    "type": "image",
    "thumbnail": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg",      
    "items": [
      {
        "type": "image",
        "label": "Image",
        "focus": true,
        "include_controls": true,
        "sequenceMode": true,
        "showReferenceStrip": true,
        "defaultZoomLevel": 0,
        "tileSources": [
          "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
          "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
        ]
      },
      {
        "type": "transcript",
        "label": "Transcript",
        "texts": [
          "First Item",
          "Second Item"
        ],
        "focus": false
      }
    ]
  },
  {
    "focus": true,
    "type": "pdf",
    "height": 800,
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
    return (<Borealis assets={this.props.assets} />)
  }
});

ReactDOM.render(<App assets={assets} />, document.getElementById('app'));
