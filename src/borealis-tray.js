import React from 'react'
import Thumbnail from './borealis-thumbnail'

export default class BorealisTray extends React.Component {
    constructor(props) {
      super(props)
    }

    _thumbs(config) {
      return ['image', 'audio', 'video', 'pdf'].map(
        (type) => {
          return (config[type]) ? {[type]: config[type].thumbnail} : ''
        }
      ).filter((item) => { return item != '' })
    }

    render() {
      const { config } = this.props
      if (Object.keys(config).length > 1) {
        return  (
                  <div className="borealis-tray">
                    {this._thumbs(config).map(function(item, i) {
                      return <Thumbnail to={Object.keys(item)[0]}
                                        src={Object.values(item)[0]}
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