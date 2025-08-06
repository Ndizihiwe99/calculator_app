import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [input, setInput] = useState("");
  const [isResult, setIsResult] = useState(false);
  //const [visible, setvisible] = useState(false);

  //const isOperator = (char: string) => ["/", "+", "-", "*"].includes(char);

  function handleInput(num: string) {
    if (isResult) {
      setInput(num);
      setIsResult(false);
    } else {
      setInput((input: string) => input + num);
    }
    if (num === "=") {
      setIsResult(true);
    } else {
      setIsResult(false);
    }
    /*const lastChar = input.charAt(input.length - 1);
    if (isOperator(num) && isOperator(lastChar)) {
      setInput((prev: string) => prev.slice(0, -1) + num);
    }*/
  }
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
