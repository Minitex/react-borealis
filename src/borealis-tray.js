import React from 'react'
import Thumbnail from './borealis-thumbnail'

export default class BorealisTray extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      const { items, setActiveItem } = this.props
      return (
                <div className="row borealis-tray">
                  {items.map(function(item, i) {
                    return <Thumbnail setActiveItem={setActiveItem.bind(this, i)} key={i} src={item.thumbnail} />
                  })}
                </div>
              )
    }

}

const propTypes = {
  items: React.PropTypes.array.isRequired
}

BorealisTray.propTypes = propTypes