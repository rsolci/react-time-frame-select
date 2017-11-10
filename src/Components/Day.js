import React, { Component } from 'react';

import TimeUnit from './TimeUnit'

const dayHeight = 20;

class Day extends Component {
  state = {
    selecting: false,
    start: 0,
    end: 0
  }

  mouseClick = (start) => {
    const position = start * dayHeight;
    if (this.state.selecting) {
      this.setState({
        selecting: !this.state.selecting,
        start: 0,
        end: position
      });
      // TODO event create mode
    } else {
      this.setState({
        selecting: !this.state.selecting,
        start: position,
        end: position
      })
    }
  }

  mouseMove = (start) => {
    const position = start * dayHeight;
    if (this.state.selecting) {
      this.setState({
        end: position
      })
    }
  }

  drawHours() {
    let lines = []
    for (let i = 0; i < 24; i++) {
      lines.push(<TimeUnit key={i} height={dayHeight} start={i} click={this.mouseClick} mouseEnter={this.mouseMove} />)
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
      <div onMouseMove={this.mouseMove} >
        {this.drawHours()}
        {this.drawSelection()}
      </div>
    )
  }
}

export default Day;