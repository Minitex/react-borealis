import React from 'react'
import Thumbnail from './borealis-thumbnail'

export default class BorealisTray extends React.Component {
    constructor(props) {
      super(props)
    }

    _thumbs(config) {
      let thumbs = []
      for (var asset_type in config) {
        if (config.hasOwnProperty(asset_type)) {
          thumbs.push({to: asset_type, src: config[asset_type].thumbnail})
        }
      }
      return thumbs
    }

    render() {
      const { config } = this.props
      if (Object.keys(config).length > 1) {
        return  (
                  <div className="borealis-tray">
                    {this._thumbs(config).map(function(item, i) {
                      return <Thumbnail to={item.to} key={i} src={item.src}/>
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