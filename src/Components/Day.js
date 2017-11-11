import React, { Component } from 'react';

import TimeUnit from './TimeUnit'

const dayHeight = 30;

class Day extends Component {
  state = {
    selecting: false,
    start: 0,
    end: 0
  }

  mouseClick = (event) => {
    if (this.state.selecting) {
      this.setState({
        selecting: !this.state.selecting,
        start: 0,
        end: event.clientY
      });
      // TODO event create mode
    } else {
      const snapped = Math.floor(event.clientY / dayHeight) * dayHeight;
      this.setState({
        selecting: !this.state.selecting,
        start: snapped,
        end: snapped
      })
    }
  }

  mouseMove = (event) => {
    const position = Math.ceil(event.clientY / dayHeight) * dayHeight;
    if (this.state.selecting) {
      this.setState({
        end: position
      })
    }
  }

  drawHours() {
    let lines = []
    for (let i = 0; i < 24; i++) {
      lines.push(<TimeUnit key={i} height={dayHeight} start={i} />)
    }
    return lines;
  }

  drawSelection = () => {
    if (this.state.selecting) {
      const style = {
        position: 'absolute',
        top: this.state.start,
        left: 0,
        width: 80,
        height: Math.max(dayHeight, this.state.end - this.state.start),
        backgroundColor: 'rgba(0, 0, 255, 0.2)'
      };

      return <div style={style} />
    }
  }

  render() {
    return(
      <div onMouseMove={this.mouseMove} onClick={this.mouseClick} >
        {this.drawHours()}
        {this.drawSelection()}
      </div>
    )
  }
}

export default Day;