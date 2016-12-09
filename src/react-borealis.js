import React from 'react'
import BorealisPDF from './borealis-pdf'
import BorealisAudio from './borealis-audio'
import BorealisVideo from './borealis-video'
import BorealisViewer from './borealis-viewer'
import BorealisTray from './borealis-tray'
import OpenseadragonViewer from 'react-openseadragon'
import Immutable from 'immutable'


export default class Borealis extends React.Component {
  constructor(props) {
    super(props)
    this.state = { assets: this.props.assets }
    this._bindInit()
  }

  _bindInit() {
    this._hasFocus = this._hasFocus.bind(this)
    this._getActiveAsset  = this._getActiveAsset.bind(this)
    this._setActiveAsset  = this._setActiveAsset.bind(this)
    this._getActiveIndex   = this._getActiveIndex.bind(this)
    this._updateFocus      = this._updateFocus.bind(this)
    this._immutableAssets = this._immutableAssets.bind(this)
    this._unFocused    = this._unFocused.bind(this)
    this._tray = this._tray.bind(this)
  }

  _setActiveAsset(i, e) {
    e.preventDefault()
    this.setState({assets: this._updateFocus(this._unFocused(), i, true).toJS()})
  }

  _getActiveIndex() {
    return this.state.assets.findIndex(this._hasFocus)
  }

  _getActiveAsset() {
    return this.state.assets.find(this._hasFocus)
  }

  _hasFocus(asset) {
    return asset.focus == true 
  }

  _unFocused() {
    return this._updateFocus(this._immutableAssets(),
                             this._getActiveIndex(),
                             false)
  }

  _updateFocus(list, i, state) {
    return list.update(i, (asset) => asset.set("focus", state))
  }

  _immutableAssets() {
    return new Immutable.fromJS(this.state.assets)
  }

  _tray(assets) {
    if (this.state.assets.length > 1 ) {
      return <BorealisTray assets={this.state.assets} handler={this._setActiveAsset} /> 
    } else { 
      return ''
    }    
  }

  render() {
    return (
      <div>
          {this._tray()}
          <BorealisViewer active_asset={this._getActiveAsset()} />
      </div>
    )
  }
}

const propTypes = {
  assets: React.PropTypes.array.isRequired
}

Borealis.propTypes = propTypes