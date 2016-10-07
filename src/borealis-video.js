import React from 'react'
export default class BorealisVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (<video width={this.props.width} height={this.props.height} controls>
                <source src={this.props.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>)
    }

}

const propTypes = {
  src: React.PropTypes.string.isRequired
}

BorealisVideo.propTypes = propTypes