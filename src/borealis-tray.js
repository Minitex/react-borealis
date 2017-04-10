import React from 'react'
import Thumbnail from './borealis-thumbnail'

export default class BorealisTray extends React.Component {
    constructor(props) {
      super(props)
      this._key = this._key.bind(this)
      this._val = this._val.bind(this)
    }

    _thumbs(config) {
      return ['image', 'kaltura_audio', 'kaltura_audio_playlist', 'kaltura_video', 'audio', 'video', 'pdf', 'ppt'].map(
        (type) => {
          return (config[type]) ? {[type]: config[type].thumbnail} : ''
        }
      ).filter((item) => { return item != '' })
    }

    _key(obj) {
      return this._keys(obj)[0]
    }

    _val(obj) {
      return this._keys(obj).map( (key) => { return obj[key] } )[0]
    }

    _keys(obj) {
      return Object.keys(obj)
    }

    render() {
      const { config } = this.props
      const val = this._val
      const key = this._key
      if (Object.keys(config).length > 1) {
        return  (
                  <div className="borealis-tray">
                    {this._thumbs(config).map(function(item, i) {
                      return <Thumbnail to={ key(item) }
                                        src={ val(item) }
                                        key={i} />
                    })}
                  </div>
                )
      } else {
        return <span/>
      }
    }

}

const propTypes = {
  config: React.PropTypes.object.isRequired
}

BorealisTray.propTypes = propTypes