import "./App.css";
import calcStage from "./utils/calcStage";

function App() {
  const number = calcStage(new Date());

  return (
    <>
      <p>The Tower</p>
      <p>Current stage: {number}</p>
    </>
  );
}

export default App;
