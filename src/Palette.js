import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import uuid from "react-uuid";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  // Changing level based on slider position
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.pallete; // The same as this.props.colors
    const { level } = this.state;
    // Mapping through the array of colors passed into props
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} key={uuid()} />
    ));

    return (
      <div className="palette">
        {/* Slider */}
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel} // Call change level and pass in the new level
        />

        {/* TODO Navbar */}
        <div className="palette-colors">{colorBoxes}</div>
        {/* TODO Navbar */}
      </div>
    );
  }
}
