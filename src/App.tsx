import "./App.css";
import { useState } from "react";
import calcStage from "./utils/calcStage";
import getTowerLayout from "./utils/getTowerLayout";

function App() {
  const [stage, setStage] = useState(calcStage(new Date()));

  return (
    <>
      <h1>The Tower</h1>
      <h3>Current stage: {stage}</h3>{" "}
      <button onClick={() => setStage(stage + 1)}>+</button>{" "}
      <button onClick={() => setStage(stage - 1)}>-</button>
      <p>Name: {getTowerLayout(stage)?.name}</p>
      <p>
        Boss count:{" "}
        {
          getTowerLayout(stage)?.stages.filter(
            (stage) => stage.name === "Boss floor",
          ).length
        }
      </p>
      <p>
        Merchant count:{" "}
        {
          getTowerLayout(stage)?.stages.filter(
            (stage) => stage.name === "Merchant floor",
          ).length
        }
      </p>
      <p>-------</p>
      <p>Stages:</p>
      <ul>
        {getTowerLayout(stage)?.stages.map((stage, index) => (
          <li key={index}>
            {stage.name === "Boss floor" ? (
              <strong>{stage.name}</strong>
            ) : stage.name === "Merchant floor" ? (
              <u>{stage.name}</u>
            ) : (
              stage.name
            )}
            {stage.notes && ` - ${stage.notes}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
