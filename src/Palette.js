import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import uuid from "react-uuid";
import NavBar from "./NavBar";
import logo from "./slack_logo.png";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  // Changing level based on slider position
  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    // val is the result of the on change of the Select component
    this.setState({ format: val });
  }
  render() {
    const { colors } = this.props.pallete; // The same as this.props.colors
    const { level, format } = this.state;
    // Mapping through the array of colors passed into props
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} key={uuid()} />
    ));

    return (
      <div>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />

        <div className="palette-hero">
          <img src={logo} />
        </div>
        <div className="palette">
          <div className="palette-colors">{colorBoxes}</div>
          {/* TODO Navbar */}
        </div>
      </div>
    );
  }
}
