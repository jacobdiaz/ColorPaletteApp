import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default class ColorBox extends Component {
  render() {
    // Grab our props!
    const { name, background } = this.props;
    return (
      // The text for copy clipboard is what is being copied
      <CopyToClipboard text={background}>
        <div
          className="color-box"
          style={{ background: this.props.background }}
        >
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
            <button className="more-button">More</button>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
