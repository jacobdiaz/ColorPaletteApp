import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import uuid from "react-uuid";
export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} key={uuid()} />
    ));
    return (
      <div className="palette">
        {/* TODO Navbar */}
        <div className="palette-colors">{colorBoxes}</div>
        {/* TODO Navbar */}
      </div>
    );
  }
}
