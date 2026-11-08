import "./App.css";
import { useState } from "react";
import calcStage from "./utils/calcStage";
import { calcTimeUntilNextStage } from "./utils/calcStage";
import getTowerLayout from "./utils/getTowerLayout";

function App() {
  const [date, setDate] = useState(new Date());
  const stage = calcStage(date);

  return (
    <>
      <h1>The Tower</h1>
      <h3>Current stage: {stage}</h3> <h4>Date: {date.toDateString()}</h4>
      <button
        onClick={() => {
          const nextWeek = new Date(date);
          nextWeek.setDate(nextWeek.getDate() + 7);
          setDate(nextWeek);
        }}
      >
        +
      </button>{" "}
      <button
        onClick={() => {
          const prevWeek = new Date(date);
          prevWeek.setDate(prevWeek.getDate() - 7);
          setDate(prevWeek);
        }}
      >
        -
      </button>
      <p>
        Time until next stage: {calcTimeUntilNextStage(new Date())} day
        {calcTimeUntilNextStage(new Date()) !== 1 ? "s" : ""}
      </p>
      <p>Name: {getTowerLayout(stage)?.name}</p>
      <p>
        Boss count:{" "}
        {
          getTowerLayout(stage)?.stages.filter((stage) => stage.boss === true)
            .length
        }
      </p>
      <p>
        Merchant count:{" "}
        {
          getTowerLayout(stage)?.stages.filter(
            (stage) => stage.merchant === true,
          ).length
        }
      </p>
      <p>-------</p>
      <p>Stages:</p>
      <ol start={0}>
        {getTowerLayout(stage)?.stages.map((stage, index) => (
          <li key={index}>
            {stage.boss === true ? (
              <strong>{stage.name}</strong>
            ) : stage.merchant === true ? (
              <u>{stage.name}</u>
            ) : (
              stage.name
            )}
            {stage.notes && ` - ${stage.notes}`}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
