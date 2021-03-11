import logo from "./logo.svg";
import "./App.css";
import Pallete from "./Palette";
import seedColors from "./SeedColors";
import { generatePalette } from "./colorHelpers";
import { Component } from "react";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[2]));
    
    return (
      <div>
        <Pallete {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
