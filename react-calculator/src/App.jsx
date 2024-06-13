import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState([]);
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [isResultShown, setIsResultShown] = useState(false);

  function addNumber(number) {
    if (isResultShown) {
      setCurrentNumber([number]);
      setIsResultShown(false);
    } else {
      setCurrentNumber([...currentNumber, number]);
    }
  }

  function addDecimal() {
    if (!currentNumber.includes(".")) {
      if (currentNumber.length === 0) {
        setCurrentNumber(["0", "."]);
      } else {
        setCurrentNumber([...currentNumber, "."]);
      }
    }
  }
  function addOperator(newOperator) {
    if (currentNumber.length === 0) {
      if (newOperator !== operator) {
        setOperator(newOperator);
        setPreviousNumber(previousNumber.slice(0, -1) + newOperator);
        return;
      } else return;
    }
    if (operator === "") {
      setOperator(newOperator);
      setPreviousNumber(currentNumber.join("") + newOperator);
      setCurrentNumber([]);
    } else {
      setPreviousNumber(calculate(operator) + newOperator);
      setOperator(newOperator);
      setCurrentNumber([]);
    }
  }
  function showResult() {
    if (operator === "") return;
    setCurrentNumber(
      Array.from(String(calculate(operator)), (char) =>
        char === "."
          ? "."
          : char === "-"
          ? "-"
          : char === "e"
          ? "e"
          : char === "+"
          ? "+"
          : Number(char)
      )
    );
    setPreviousNumber("");
    setOperator("");
    setIsResultShown(true);
  }
  function calculate(operator) {
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber.join(""));

    switch (operator) {
      case "+":
        return (prev + current).toFixed(6) * 1; //multiply by 1 to delete .0000

      case "-":
        return (prev - current).toFixed(6) * 1;

      case "*":
        return (prev * current).toFixed(6) * 1;

      case "÷":
        return (prev / current).toFixed(6) * 1;
    }
  }
  function clear() {
    setCurrentNumber([]);
    setPreviousNumber("");
    setOperator("");
    setIsResultShown(false);
  }
  function deleteNumber() {
    setCurrentNumber(currentNumber.slice(0, -1));
  }

  return (
    <div className="calculatorGrid">
      <div className="display">
        <p className="lastOperation">{previousNumber}</p>
        <p className="operation">{currentNumber}</p>
      </div>
      <button className="spanTwo" onClick={clear}>
        AC
      </button>
      <button onClick={deleteNumber}>DEL</button>
      <button onClick={(e) => addOperator(e.target.innerText)}>÷</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>1</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>2</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>3</button>
      <button onClick={(e) => addOperator(e.target.innerText)}>*</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>4</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>5</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>6</button>
      <button onClick={(e) => addOperator(e.target.innerText)}>+</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>7</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>8</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>9</button>
      <button onClick={(e) => addOperator(e.target.innerText)}>-</button>
      <button onClick={addDecimal}>.</button>
      <button onClick={(e) => addNumber(e.target.innerText)}>0</button>
      <button className="spanTwo" onClick={showResult}>
        =
      </button>
    </div>
  );
}

export default App;
