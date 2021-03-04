import React, { Component } from "react";
import "./ColorBox.css";
export default class ColorBox extends Component {
  render() {
    // Grab our props!
    const { name, background } = this.props;
    return (
      <div className="color-box" style={{ background: this.props.background }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
          <button className="more-button">More</button>
        </div>
      </div>
    );
  }
}
