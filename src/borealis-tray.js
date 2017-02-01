import React from 'react'
import Thumbnail from './borealis-thumbnail'

export default class BorealisTray extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      const { items, setActiveItem } = this.props
      if (items.length > 1) {
        return (
                  <div className="row borealis-tray">
                    {items.map(function(item, i) {
                      return <Thumbnail is_active={item.focus} setActiveItem={setActiveItem.bind(this, i)} key={i} src={item.thumbnail} />
                    })}
                  </div>
                )
      } else {
        return <span/>
      }
    }

}

const propTypes = {
  items: React.PropTypes.array.isRequired
}

BorealisTray.propTypes = propTypes