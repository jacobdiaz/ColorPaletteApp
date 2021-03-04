import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 800);
    });
  }

  render() {
    // Grab our props!
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      // The text for copy clipboard is what is being copied
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        {/*Color Box */}
        <div
          className="color-box"
          style={{ background: this.props.background }}
        >
          {/* Overlay  */}
          <div
            // When Copied is true... set the classname to copy-overlay.show
            className={`copy-overlay ${copied && "show"}`}
            style={{ background: background }}
          ></div>

          <div className={`copy-msg ${copied && "show"}`}>
            <h1> COPIED</h1>
            <p>{background}</p>
          </div>

          {/* Bottom Bar */}
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
