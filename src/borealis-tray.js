import React from 'react'
import Thumbnail from './borealis-thumbnail'

export default class BorealisTray extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      const { objects, handler } = this.props
      return (<div>
                {objects.map(function(object, i) {
                  return <Thumbnail handler={handler.bind(this, i)} key={i} src={object.thumbnails[0]} />
                })}
              </div>)
    }

}

const propTypes = {
  objects: React.PropTypes.array.isRequired,
  handler: React.PropTypes.func.isRequired
}

BorealisTray.propTypes = propTypes