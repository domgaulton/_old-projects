import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Fader extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      volume: 50
    }
  }

  handleOnChange = (value) => {
    console.log(value);
    this.setState({
      volume: value
    })
  }

  render() {
    let { volume } = this.state;
    return (
      <Slider
        value={volume}
        onChange={this.handleOnChange} />
    )
  }
}

export default Fader;
