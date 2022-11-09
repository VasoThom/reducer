import "./App.css";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { useReducer } from "react";
const reducer = (count, action) => {
  console.log(count, action);
  switch (action.type) {
    case "up":
      count++;
      return count;
    case "down":
      count--;
      return count;
    case "reset":
      return 0;
    default:
      return count;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <div>
        <div>
          <h1>Counter</h1>
        </div>
        <div>
          <div> {count}</div>
        </div>
        <div>
          <div>
            <button onClick={() => dispatch({ type: "up" })}>Hochzahlen</button>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "down" })}>
              Runderzahlen
            </button>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
