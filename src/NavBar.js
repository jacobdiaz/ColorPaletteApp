import React, { Component } from "react";
import logo from "./cplogo.png";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./NavBar.css"; // Navbar.css should always be after rc-slider

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      format: "hex",
      snackIsOpen: false,
    };
    this.handleColorFormatChange = this.handleColorFormatChange.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
  }

  //! The Parent will now have which format is selected.
  // Some event gets called on when ever Select component is changed
  // Note we must pass event.target.value so we dont have to wait for setState to happen (is async) so we must user the value we get from the event
  handleColorFormatChange(event) {
    this.setState({ format: event.target.value, snackIsOpen: true });
    this.props.handleChange(event.target.value); //! Call handleChange from Pallete class
  }

  handleCloseSnackBar(event, reason) {
    this.setState({ snackIsOpen: false });
  }
  render() {
    const { level, changeLevel, handleCloseSnackBar } = this.props;
    const { format, snackIsOpen } = this.state;
    return (
      <header className="nav-bar">
        {/* Logo */}
        <div className="logo">
          <a href="/">Color Pal</a>
        </div>
        {/* Slider */}
        <div className="slider">
          <p>Level: {level}</p>

          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel} // Call change level and pass in the new level
          />
        </div>
        {/* Select */}
        <div className="select-container">
          <span>Format: </span>
          <Select value={format} onChange={this.handleColorFormatChange}>
            <MenuItem value="hex">hex</MenuItem>
            <MenuItem value="rgb">rgb</MenuItem>
            <MenuItem value="rgba">rgba</MenuItem>
          </Select>
        </div>

        {/* Snackbar */}
        <Snackbar
          style={{ marginTop: "2.5rem" }}
          autoHideDuration={2000}
          message={`Format Changed to ${format}`}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackIsOpen}
          onClose={this.handleCloseSnackBar}
          action={[
            <IconButton
              onClick={this.handleCloseSnackBar}
              color="inherit"
              key="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
