import React, { Component } from 'react';

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
      this.setState({
        selecting: !this.state.selecting,
        start: event.clientY
      })
    }
  }

  mouseMove = (event) => {
    if (this.state.selecting) {
      this.setState({
        end: event.clientY
      })
    }
  }

  drawHours() {
    let lines = []
    for (let i = 0; i < 24; i++) {
      lines.push(<div key={i} style={{position:'relative', height:'20px', borderBottom:'1px solid gray'}}></div>)
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
        height: Math.abs(this.state.end - this.state.start),
        backgroundColor: 'purple'
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