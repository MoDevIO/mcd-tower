import "./App.css";
import calcStage from "./utils/calcStage";
import getTowerLayout from "./utils/getTowerLayout";

function App() {
  const number = calcStage(new Date());
  console.log(JSON.stringify(getTowerLayout(22), null, 2));

  return (
    <>
      <p>The Tower</p>
      <p>Current stage: {number}</p>
      <p>Name: {getTowerLayout(number).name}</p>
      <p>Stages:</p>
      <ul>
        {getTowerLayout(number).stages.map((stage, index) => (
          <li key={index}>{stage.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
