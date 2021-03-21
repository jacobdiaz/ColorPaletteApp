import React, { Component } from "react";
import logo from "./cplogo.png";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./NavBar.css"; // Navbar.css should always be after rc-slider

export default class NavBar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="nav-bar">
        <div className="logo">
          <a href="/">Color Pal</a>
        </div>

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
      </header>
    );
  }
}
