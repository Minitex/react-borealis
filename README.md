# react-borealis

## Demo & Examples

Live demo: [https://umnlibraries.github.io/react-borealis](https://umnlibraries.github.io/react-borealis/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


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


const assets =  [
    {
      "focus": true,
      "type": "image",
      "include_controls": true,
      "thumbnail": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg",
      "os_config": {
        "sequenceMode": true,
        "showReferenceStrip": true,
        "tileSources": [
          "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
          "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
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
    return (<Borealis assets={this.props.assets} />)
  }
});

ReactDOM.render(<App assets={assets} />, document.getElementById('app'));
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## Run Tests

`npm test`

## License

University of Minnesota (MIT Pending)



