import React from 'react'
import ReactDOM from 'react-dom'
import Borealis  from 'react-borealis'

const App = React.createClass({
  getInitialState: function() {
    return {player: <Borealis src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" type="pdf"/>};
  },
  _setPlayer(type, e) {
    e.preventDefault()
    switch(type) {
      case 'pdf':
        this.setState({player: <Borealis src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" type="pdf"/>})
        break
      case 'audio':
        this.setState({player: <Borealis src="http://reflections.mndigital.org/utils/getstream/collection/jhs/id/1022" type="audio"/>})
        break
      case 'video':
        this.setState({player: <Borealis src="http://www.w3schools.com/html/mov_bbb.mp4" type="video"/>})
        break
      case 'iiif':
        const seadragon_conf = {
          sequenceMode:  true,
          showReferenceStrip: true,
          tileSources:   [
            "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
            "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
          ]
        }
        this.setState({player: <Borealis config={seadragon_conf} type="iiif"/>})
        break
    }
  },
  render () {
    return (
      <div>
        <ul>
          <li><a href="#" onClick={this._setPlayer.bind(this, 'pdf')}>pdf</a></li>
          <li><a href="#" onClick={this._setPlayer.bind(this, 'audio')}>audio</a></li>
          <li><a href="#" onClick={this._setPlayer.bind(this, 'video')}>video</a></li>
          <li><a href="#" onClick={this._setPlayer.bind(this, 'iiif')}>iiif image</a></li>
        </ul>
        {this.state.player}
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
