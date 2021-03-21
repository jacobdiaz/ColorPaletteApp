import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import uuid from "react-uuid";
import NavBar from "./NavBar";
import logo from "./slack_logo.png";

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
      <div>
        <NavBar level={level} changeLevel={this.changeLevel}/>

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
