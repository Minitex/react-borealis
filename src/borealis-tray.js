import React from 'react'
import Thumbnail from './borealis-thumbnail'

export default class BorealisTray extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      const { assets, handler } = this.props
      return (<div className="row borealis-tray">
                {assets.map(function(asset, i) {
                  return <Thumbnail handler={handler.bind(this, i)} key={i} src={asset.tray_thumbnail} />
                })}
                </div>)
    }

}

const propTypes = {
  assets: React.PropTypes.array.isRequired,
  handler: React.PropTypes.func.isRequired
}

BorealisTray.propTypes = propTypes