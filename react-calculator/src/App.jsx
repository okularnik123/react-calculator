import { useState, useReducer } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState([]);
  const [previousNumber, setPreviousNumber] = useState(0);
  const [operator, setOperator] = useState("");

  function addNumber(number) {
    setCurrentNumber([...currentNumber, number]);
  }

  return (
    <div className="calculatorGrid">
      <div className="display">
        <p className="lastOperation"></p>
        <p className="operation">{currentNumber}</p>
      </div>
      <button className="spanTwo">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>1</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>2</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>3</button>
      <button>*</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>4</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>5</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>6</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>+</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>7</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>8</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>9</button>
      <button>-</button>
      <button>.</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>0</button>
      <button className="spanTwo">=</button>
    </div>
  );
}

export default App;
