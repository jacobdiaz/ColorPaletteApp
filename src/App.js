import "./App.css";
import Pallete from "./Palette";
import seedColors from "./SeedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import { Component } from "react";

class App extends Component {
  findPalette(id) {
    // Look in the seed Colors array where the paletteId = the param
    return seedColors.find((palette) => {
      if (palette.id === id) {
        console.log(palette.id);
      }
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        {/* remember that routerProps.match.params.id = the id in the url */}
        <Route
          exact
          path="/palette/:id"
          render={(routerProps) => (
            <Pallete
              pallete={generatePalette(
                this.findPalette(routerProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
