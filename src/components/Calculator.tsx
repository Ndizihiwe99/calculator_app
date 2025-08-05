//import React from "react";

interface CalculatorProps {
  input: string;
  insertNumber: (num: string) => void;
  clearInput: () => void;
  calculateResult: () => void;
}

function Calculator({
  insertNumber,
  input,
  clearInput,
  calculateResult,
}: CalculatorProps) {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-96 p-4">
      <div className=" shadow-lg w-full max-w-md p-6">
        <input
          id="display"
          type="text"
          className="w-96 h-12 text-right text-3xl font-mono  border border-gray-300 focus:outline-none bg-gray-400 place-self-center ml-2"
          placeholder="0"
          value={input}
          readOnly
        />
        <div className=" place-self-center">
          <button
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-2 border-gray-400"
            onClick={() => clearInput()}
          >
            AC
          </button>
          <button className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2">
            +/-
          </button>
          <button className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2">
            %
          </button>
          <button
            onClick={() => insertNumber("/")}
            className="h-24 w-24 bg-orange-400 text-2xl font-bold border-gray-400 border-2"
          >
            /
          </button>
        </div>
        <div className=" place-self-center">
          <button
            onClick={() => insertNumber("7")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2 "
          >
            7
          </button>
          <button
            onClick={() => insertNumber("8")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            8
          </button>
          <button
            onClick={() => insertNumber("9")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            9
          </button>
          <button
            onClick={() => insertNumber("*")}
            className="h-24 w-24 bg-orange-400 text-2xl font-bold border-gray-400 border-2 "
          >
            x
          </button>
        </div>
        <div className=" place-self-center">
          <button
            onClick={() => insertNumber("4")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            4
          </button>
          <button
            onClick={() => insertNumber("5")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            5
          </button>
          <button
            onClick={() => insertNumber("6")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            6
          </button>
          <button
            onClick={() => insertNumber("-")}
            className="h-24 w-24 bg-orange-400 text-2xl font-bold border-gray-400 border-2"
          >
            -
          </button>
        </div>
        <div className=" place-self-center">
          <button
            onClick={() => insertNumber("1")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            1
          </button>
          <button
            onClick={() => insertNumber("2")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            2
          </button>
          <button
            onClick={() => insertNumber("3")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            3
          </button>
          <button
            onClick={() => insertNumber("+")}
            className="h-24 w-24 bg-orange-400 text-2xl font-bold border-gray-400 border-2"
          >
            +
          </button>
        </div>
        <div className=" place-self-center">
          <button
            onClick={() => insertNumber("0")}
            className="h-24 w-48 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            0
          </button>
          <button
            onClick={() => insertNumber(".")}
            className="h-24 w-24 bg-gray-100 text-2xl font-bold border-gray-400 border-2"
          >
            .
          </button>
          <button
            onClick={calculateResult}
            className="h-24 w-24 bg-orange-400 text-2xl font-bold border-gray-400 border-2"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
