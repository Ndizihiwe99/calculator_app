import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [input, setInput] = useState("");
  const [isResult, setIsResult] = useState(false);
  //const [visible, setvisible] = useState(false);

  const isOperator = (op: string) => ["+", "-", "*", "/"].includes(op);

  const handleInput = (num: string) => {
    if (isResult) {
      if (isOperator(num)) {
        setInput((prev: string) => prev + num);
      } else {
        setInput(num);
      }
      setIsResult(false);
    } else {
      const lastchar = input.slice(-1);
      if (isOperator(num) && isOperator(lastchar)) {
        setInput((prev: string) => prev.slice(0, -1) + num);
      } else {
        setInput((prev: string) => prev + input);
      }
    }
    if (num === "=") {
      setIsResult(true);
    } else {
      setIsResult(false);
    }
  };

  const Result = () => {
    setInput((prev: string) => eval(prev).toString());
    setIsResult(true);
  };

  return (
    <div>
      <Calculator
        insertNumber={handleInput}
        input={input}
        clearInput={() => setInput("")}
        calculateResult={Result}
      />
    </div>
  );
}

export default App;
