import React from 'react'
export default class BorealisVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (<video width="320" height="240" controls>
                <source src={this.props.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>)
    }

}

const propTypes = {
  src: React.PropTypes.string.isRequired
}

BorealisVideo.propTypes = propTypes