import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeUnit extends Component {

  onClick = () => {
    this.props.click(this.props.start)
  }

  onMouseEnter = () => {
    this.props.mouseEnter(this.props.start)
  }

  render() {
    const style = { position: 'relative', height: this.props.height, boxShadow: '0 -1px 0 0 rgba(128, 128, 128, 0.4) inset' };

    return(
      <div style={style} onClick={this.onClick} onMouseEnter={this.onMouseEnter} ></div>
    )
  }
}

TimeUnit.propTypes = {
  click: PropTypes.func,
  mouseEnter: PropTypes.func
}

TimeUnit.defaultProps = {
  click: () => {},
  mouseEnter: () => {}
}

export default TimeUnit;