import React, { useReducer } from "react";
import "./styles.css";

const initialStateValue = 100;
const init = (initialValue) => initialValue;

const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return state + 50;
    case "minus":
      return state - 50;
    case "mult":
      return state * 20;
    case "reset":
      return init(initialStateValue);
    default:
      throw new Error("What the hell");
  }
};

export default function App() {
  // pass three args to useReducer

  const [width, dispatch] = useReducer(reducer, initialStateValue, init);

  // you update state by calling dispatch
  const increaseLength = () => dispatch({ type: "plus" });

  const decreaseLength = () => dispatch({ type: "minus" });

  const multLength = () => dispatch({ type: "mult" });
  // reset
  const handleReset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Click the button belw to see it grow:</h1>
      <button style={{ width }} onClick={increaseLength}>
        I grow
      </button>
      <h1>Click the button belw to see it shrink:</h1>
      <button style={{ width }} onClick={decreaseLength}>
        I shrink
      </button>
      <h1>Click the button belw to see it multiply:</h1>
      <button style={{ width }} onClick={multLength}>
        I multiply
      </button>

      <br />
      <br />
      <br />
      <br />
      {/* reset button */}
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
