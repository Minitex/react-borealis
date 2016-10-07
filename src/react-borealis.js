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
    this.state = { objects: this.props.objects }
    this._bindInit()
  }

  _bindInit() {
    this._hasFocus = this._hasFocus.bind(this)
    this._getActiveObject  = this._getActiveObject.bind(this)
    this._setActiveObject  = this._setActiveObject.bind(this)
    this._getActiveIndex   = this._getActiveIndex.bind(this)
    this._updateFocus      = this._updateFocus.bind(this)
    this._immutableObjects = this._immutableObjects.bind(this)
    this._unFocused    = this._unFocused.bind(this)
  }

  _setActiveObject(i, e) {
    e.preventDefault()
    this.setState({objects: this._updateFocus(this._unFocused(), i, true).toJS()})
  }

  _getActiveIndex() {
    return this.state.objects.findIndex(this._hasFocus)
  }

  _getActiveObject() {
    return this.state.objects.find(this._hasFocus)
  }

  _hasFocus(object) {
    return object.focus == true 
  }

  _unFocused() {
    return this._updateFocus(this._immutableObjects(),
                             this._getActiveIndex(),
                             false)
  }

  _updateFocus(list, i, state) {
    return list.update(i, (object) => object.set("focus", state))
  }

  _immutableObjects() {
    return new Immutable.fromJS(this.state.objects)
  }

  render() {
    let { objects } = this.state
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <BorealisViewer active_object={this._getActiveObject()} />
          </div>
          <div className="panel-footer">
            <div className="row borealis-tray">
              <BorealisTray objects={objects} handler={this._setActiveObject} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const propTypes = {
  objects: React.PropTypes.array.isRequired
}

Borealis.propTypes = propTypes