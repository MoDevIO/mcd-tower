import "./App.css";
import calcStage from "./utils/calcStage";
import getTowerLayout from "./utils/getTowerLayout";

function App() {
  const number = calcStage(new Date());

  return (
    <>
      <h1>The Tower</h1>
      <h3>Current stage: {number}</h3>
      <p>Name: {getTowerLayout(number)?.name}</p>
      <p>Stages:</p>
      <ul>
        {getTowerLayout(number)?.stages.map((stage, index) => (
          <li key={index}>{stage.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
