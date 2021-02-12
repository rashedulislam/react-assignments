import "./App.css";
import Suggestions from "./components/Suggestions/Suggestions.js";

function App() {
  return (
    <div className="App">
      <h2 className="assignment-heading">First Assignment</h2>
      <div className="suggestion-component">
        <Suggestions />
      </div>
    </div>
  );
}

export default App;
