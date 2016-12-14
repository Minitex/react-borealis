import React from 'react'

export default class BorealisVideoPlayer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
          let { src, width, height } = this.props
          return (
                    <video width={this.props.width} height={this.props.height} controls>
                      <source src={this.props.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                 )
    }
}

BorealisVideoPlayer.defaultProps = {
  height: 800,
  width: 800
}

BorealisVideoPlayer.propTypes = {
  src: React.PropTypes.string.isRequired,
  height: React.PropTypes.number,
  width: React.PropTypes.number
}