import logo from "./logo.svg";
import "./App.css";
import Pallete from "./Palette";
import seedColors from "./SeedColors";

function App() {
  return (
    <div>
      <Pallete {...seedColors[2]} />
    </div>
  );
}

export default App;
