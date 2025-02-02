import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Maincard from "./Maincard";

function App() {
  let [counter, setCounter] = useState(5);

  const increase = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="appcontainer">
      <div className="divone" onClick={increase}>
        <p>This will update divOne: value:: {counter} </p>
      </div>

      <div className="divtwo">
        <p>This will update divTwo: value:: {counter} </p>
      </div>

      <div className="divthree" onClick={decrease}>
        <p>This will update divThree: value:: {counter} </p>
      </div>
    </div>
  );
}

export default App;
