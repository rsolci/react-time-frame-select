import React, { Component } from 'react';

const dayHeight = 20;

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
      console.info(snapped);
      this.setState({
        selecting: !this.state.selecting,
        start: snapped,
        end: snapped
      })
    }
  }

  mouseMove = (event) => {
    if (this.state.selecting) {
      const snapped = Math.ceil(event.clientY / dayHeight) * dayHeight;
      this.setState({
        end: snapped
      })
    }
  }

  drawHours() {
    let lines = []
    for (let i = 0; i < 24; i++) {
      lines.push(<div key={i} style={{position:'relative', height:dayHeight, boxShadow:'0 -1px 0 0 gray inset'}}></div>)
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