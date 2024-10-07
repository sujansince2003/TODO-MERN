import { useState } from "react";
import Login from "./components/Login";

import "./App.css";
import Signup from "./components/Signup";
import { Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Signup />
    </>
  );
}

export default App;
